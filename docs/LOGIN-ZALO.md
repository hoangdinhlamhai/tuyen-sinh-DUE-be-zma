# Login bằng Zalo — Technical Summary

## Flow đăng nhập

```
┌─────────────────────────────────────────────────────────────┐
│                     FRONTEND (Zalo Mini App)                 │
│                                                               │
│  1. zaloService.authorize({ scopes: ['scope.userInfo'] })    │
│     → Hiển thị popup xin quyền userInfo                   │
│                                                               │
│  2. Promise.all([                                          │
│       zaloService.getAuthCode(),   // { authCode, authCodeVerify }│
│       zaloService.getUserProfile(), // { zaloId, name, avatar }  │
│     ])                                                       │
│                                                               │
│  3. authService.loginWithZalo(authCode, profile)            │
│     → POST /api/auth/zalo { authCode, profile }             │
│     → Nhận JWT từ backend                                   │
│     → Lưu JWT vào localStorage key: "zalo_access_token"   │
│                                                               │
│  4. candidateService.getMe()                                 │
│     → GET /api/candidates/me                                │
│     → Header: Authorization: Bearer <jwt>                    │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                     BACKEND (NestJS)                         │
│                                                               │
│  POST /api/auth/zalo                                        │
│  Body: { authCode: string, profile: { zaloId, name, avatar } }│
│                                                               │
│  AuthService.loginWithZalo():                               │
│    1. Tìm candidate theo zaloId trong DB                   │
│    2. Nếu chưa có → tạo mới candidate                     │
│    3. Tạo JWT với payload: { sub: candidateId, zaloId }  │
│    4. Trả về: { accessToken: jwt, candidateId, fullName, }│
│       { avatarUrl, profileStatus, zaloId }                 │
│                                                               │
│  GET /api/candidates/me  (AuthGuard('jwt'))                 │
│    JwtStrategy: đọc Authorization: Bearer <jwt> header      │
│    Passport validate: kiểm tra JWT signature + expiration  │
│    Trả về candidate profile                                │
└─────────────────────────────────────────────────────────────┘
```

## Backend — File cấu trúc

### `src/auth/auth.controller.ts`
- `POST /auth/zalo` — nhận `{ authCode, profile }`, gọi service
- `POST /auth/logout` — có JWT guard (Bearer token)

### `src/auth/auth.service.ts`
- `loginWithZalo(authCode, profile)` — tạo candidate + sign JWT
- `logout()` — success response

### `src/auth/jwt.strategy.ts`
- Custom `jwtFromRequest`: đọc `Authorization: Bearer <token>` header
- Payload: `{ sub: candidateId, zaloId }`
- Validate return: `{ candidateId, zaloId }`

### `src/auth/dto/zalo-login.dto.ts`
```typescript
class ZaloProfileDto {
  zaloId: string;
  name?: string;
  avatar?: string;
}

class ZaloLoginDto {
  authCode: string;        // từ zmp-sdk getAuthCode()
  profile?: ZaloProfileDto; // từ zmp-sdk getUserInfo()
}
```

## Frontend — File cấu trúc

### `src/services/zalo.ts`
```typescript
zaloService.authorize()           // xin quyền scope.userInfo
zaloService.getAuthCode()       // → { authCode, authCodeVerify }
zaloService.getUserProfile()    // → { zaloId, name, avatar }
```

### `src/services/api/auth.service.ts`
```typescript
loginWithZalo(authCode, profile) // POST /auth/zalo → lưu JWT vào localStorage
logout(jwt)                      // POST /auth/logout với Bearer header
```

### `src/services/api/candidate.service.ts`
```typescript
getMe()        // GET /candidates/me với Authorization: Bearer header
updateProfile() // PATCH /candidates/me với Authorization: Bearer header
```

### `src/store/auth.ts`
- `authAtom` — lưu JWT, candidateId, fullName, avatarUrl, profileStatus
- `setAuthAtom` — update state + lưu token vào localStorage
- `clearAuthAtom` — xóa localStorage + reset state

### `src/pages/profile.tsx`
```typescript
initAuth()       // authorize → getAuthCode → getUserProfile → login → getMe
handleLinkZalo() // same flow
handleLogout()   // logout với JWT từ authAtom.jwt
```

## Environment Variables

### Backend `.env`
```env
DATABASE_URL=...
PORT=3002
JWT_SECRET=your_jwt_secret_min_32_chars
ZALO_APP_ID=...
ZALO_APP_SECRET=...
```

### Frontend `.env`
```env
VITE_API_BASE_URL=https://tuyen-sinh-dh-kien-truc-be-zma.vercel.app/api
```

## Lưu ý quan trọng

### Không gọi Zalo API từ backend
Backend **KHÔNG** gọi `https://graph.zalo.me/v2.0/me` vì:
- Server có thể không ở Vietnam IP → Zalo block
- Không cần thiết vì profile đã được xác thực từ Zalo SDK ở client

### Profile từ client có đáng tin không?
- Zalo SDK `getUserInfo()` trả dữ liệu đã được Zalo xác thực
- `authCode` đảm bảo user đã login thành công với Zalo
- Backend tạo candidate từ profile client gửi, không verify thêm (trust Zalo SDK)
- Nếu cần verify thêm: exchange `authCode` với Zalo API (cần server có IP Vietnam)

### HTTP-only Cookie
**Không dùng** HTTP-only cookie cho JWT vì:
- Zalo webview (`h5.zdn.vn`) ≠ backend domain (`vercel.app`) → cross-origin
- Zalo webview (Chromium-based) chặn third-party cookies
- Dùng `Authorization: Bearer` header thay thế

### CORS
```typescript
// main.ts
app.enableCors({
  origin: ['https://h5.zadn.vn', 'https://h5.zdn.vn', 'http://localhost'],
  credentials: true,
});
```
- `h5.zadn.vn` — Zalo test environment
- `h5.zdn.vn` — Zalo production (app thật)
- `localhost` — dev

## Đăng xuất
1. Gọi `POST /auth/logout` với `Authorization: Bearer <jwt>`
2. Xóa token khỏi localStorage
3. Reset auth state (Jotai atom)
