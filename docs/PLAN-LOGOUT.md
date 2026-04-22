# Plan: Tính năng Logout

## Hiện trạng (Current State)

### Frontend — `src/pages/profile.tsx`
```typescript
const handleLogout = async () => {
  const token = authState.jwt;
  try {
    if (token) {
      await authService.logout(token); // POST /auth/logout
    }
  } catch {
    // ignore server errors
  }
  clearAuth();      // gọi logout lần 2 (trong clearAuthAtom)
  setCandidate(null);
  openSnackbar({ type: "success", text: "Đã đăng xuất" });
};
// KHÔNG có redirect — user đứng im ở trang profile
```

### Frontend — `src/store/auth.ts`
```typescript
export const clearAuthAtom = atom(null, (_get, set) => {
  const token = localStorage.getItem(STORAGE_KEY);
  if (token) {
    authService.logout(token).catch(() => {}); // gọi logout lần 2
  }
  authService.clearToken(); // xóa localStorage
  set(authAtom, { jwt: null, ... }); // reset atom state
});
```

### Frontend — `src/services/api/auth.service.ts`
```typescript
async logout(jwt: string): Promise<void> {
  await axios.post(`${API_URL}/auth/logout`, {}, {
    headers: { Authorization: `Bearer ${jwt}` },
  });
}
```

### Backend — `src/auth/auth.service.ts`
```typescript
async logout() {
  return { success: true }; // chỉ trả về success
}
```

---

## Vấn đề (Issues)

| # | Mức độ | Mô tả |
|---|---------|--------|
| 1 | **HIGH** | **Không redirect sau logout** — user đứng ở trang profile đã logout, state `candidate=null` nhưng UI có thể flicker |
| 2 | **MEDIUM** | **Gọi `logout()` 2 lần** — `handleLogout()` gọi `authService.logout()`, rồi `clearAuth()` lại gọi `authService.logout()` lần nữa |
| 3 | **LOW** | **Backend không invalidate JWT** — JWT vẫn còn valid cho đến khi hết hạn. Với mô hình stateless JWT, đây là acceptable trade-off, không cần fix trong phase này |

---

## Yêu cầu (Requirements)

1. Nhấn "Đăng xuất" → xóa token khỏi localStorage
2. Reset toàn bộ auth state (Jotai atom)
3. Redirect về trang home (`/`)
4. Hiện snackbar thông báo "Đã đăng xuất"
5. Gọi backend logout **đúng 1 lần**
6. Xử lý lỗi graceful — không crash app nếu backend timeout

---

## Implementation Phases

### Phase 1: Fix `clearAuthAtom` — Loại bỏ duplicate logout call
**File**: `src/store/auth.ts`

`clearAuthAtom` hiện tại gọi `authService.logout(token)` bên trong. Cần loại bỏ vì `handleLogout` đã gọi rồi.

```typescript
export const clearAuthAtom = atom(null, (_get, set) => {
  // KHÔNG gọi authService.logout ở đây nữa
  authService.clearToken();
  set(authAtom, {
    jwt: null, candidateId: null, zaloId: null,
    fullName: null, avatarUrl: null, profileStatus: null, loading: false,
  });
});
```

### Phase 2: Fix `handleLogout` — Thêm redirect + gọi logout đúng 1 lần
**File**: `src/pages/profile.tsx`

```typescript
const handleLogout = async () => {
  const token = authState.jwt;
  // Gọi backend logout đúng 1 lần
  if (token) {
    await authService.logout(token).catch(() => {});
  }
  clearAuth();       // chỉ clear token + reset state, không gọi logout nữa
  setCandidate(null);
  openSnackbar({ type: "success", text: "Đã đăng xuất" });
  navigate("/");      // redirect về home
};
```

### Phase 3: Verify & Test
- Verify: logout → token bị xóa, atom reset, redirect về home, snackbar hiện
- Test: gọi logout khi không có token (không crash)

---

## Files sẽ thay đổi

| File | Thay đổi |
|------|-----------|
| `src/store/auth.ts` | Xóa `authService.logout()` khỏi `clearAuthAtom` |
| `src/pages/profile.tsx` | Thêm `navigate("/")`, `.catch(() => {})` cho logout, đảm bảo gọi `clearAuth()` sau khi logout xong |

---

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Redirect khi đang ở `/profile` logout → home | **LOW** | `navigate("/")` là standard Zalo Mini App navigation |
| Race condition: `clearAuth()` chạy trước khi `logout()` xong | **LOW** | await `authService.logout()` trước khi `clearAuth()` |

---

## Estimated Complexity: **LOW** (2 files, ~5 dòng thay đổi)

---

## Chờ xác nhận: "yes" để tiến hành implement, "modify: ..." để thay đổi plan
