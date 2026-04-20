# Plan: Hồ sơ liên kết Zalo Account

## Requirements Restatement

- **Mục tiêu**: Trang hồ sơ người dùng hiển thị thông tin từ Zalo account (avatar + tên Zalo ID)
- **Không thu thập SĐT** vì chưa có VPS tại Việt Nam để verify
- **Cấu hình Zalo Mini App** tại portal.zalo.me để khai báo các API cần thiết

## Current State

- `Candidate` model đã có `zaloId` (unique, nullable) và `avatarUrl`
- Frontend `pages/profile.tsx` chỉ là stub, chưa có logic
- Chưa có Zalo OAuth integration — chỉ dùng mock Zalo user ID
- Zalo Mini App SDK (`zmp-sdk`) đã được integrate trong frontend

## Implementation Phases

### Phase 1: Backend — Candidate Service mở rộng

- [ ] Thêm endpoint `GET /api/candidates/me` — lấy profile của candidate hiện tại dựa trên `zaloId`
- [ ] Thêm endpoint `PATCH /api/candidates/me` — cập nhật avatarUrl hoặc `zaloId`
- [ ] Thêm DTO `UpdateProfileDto` với các fields được phép update
- [ ] Tạo `CandidateModule` (tách từ `AppModule` nếu cần)

### Phase 2: Zalo Mini App — Cấu hình & SDK

- [ ] Cập nhật `app-config.json` với Zalo App ID và Secret từ portal.zalo.me
- [ ] Thêm `zmp-sdk-js-api` config cho phép truy cập profile API
- [ ] Tạo `src/services/zalo.ts` — wrapper cho Zalo profile API

### Phase 3: Frontend — Profile Page

- [ ] Đọc Zalo user profile từ `zmp-sdk` method `ZaloSDK.api.getUserProfile()`
- [ ] Tạo component `ProfileHeader` hiển thị avatar + tên Zalo
- [ ] Kết nối `profile.tsx` với API backend để lưu/truy xuất candidate
- [ ] Thêm menu items: "Hồ sơ cá nhân", "Đăng ký xét tuyển", "Tárot"

### Phase 4: Hướng dẫn cấu hình Zalo Mini App Portal

- [ ] Ghi chú step-by-step cấu hình tại portal.zalo.me
- [ ] Khai báo permissions cần thiết: `profile` (read)
- [ ] Không khai báo `phone` permission vì không sử dụng

## Zalo Profile API Flow

```
Frontend (zmp-sdk)
  → Zalo.getUserProfile() // Lấy { zaloId, name, avatar }
  → Backend PATCH /api/candidates/me { zaloId, avatarUrl }
  → Candidate.zaloId + avatarUrl saved to DB
  → Frontend hiển thị profile
```

## Database Schema Changes

**Không cần thay đổi** — `Candidate` model đã có:
```prisma
zaloId     String?   @unique
avatarUrl  String?
```

## Dependencies

- `zmp-sdk` (đã có)
- Backend endpoint mới
- Không cần thêm package

## Risks

- **MEDIUM**: Zalo Mini App SDK chỉ hoạt động khi deploy lên Zalo — local dev không test được profile API
- **LOW**: Phân biệt giữa mock user và real Zalo user trong dev environment

## Steps chi tiết

### Step 1: Backend endpoint
- Tạo `src/candidate/dto/update-profile.dto.ts`
- Thêm `updateProfile()` method trong `candidate.service.ts`
- Thêm route `PATCH /me` trong `candidate.controller.ts`

### Step 2: Zalo SDK wrapper
- Tạo `src/services/zalo.ts` (frontend) — gọi `Zalo.getUserProfile()`

### Step 3: Profile page
- Cập nhật `src/pages/profile.tsx` — fetch & display Zalo profile

### Step 4: Docs
- Ghi hướng dẫn cấu hình Zalo Mini App portal vào README hoặc file riêng

## Estimated Complexity: LOW-MEDIUM

- Backend: 1-2 hours
- Frontend: 2-3 hours
- Zalo Portal Config: 30 mins
- Total: ~4-5 hours

---

## Zalo Mini App Portal — Cấu hình Profile API

### Bước 1: Truy cập Zalo Mini App Portal

1. Đăng nhập [portal.zalo.me](https://portal.zalo.me)
2. Chọn **Mini App** → chọn ứng dụng của bạn
3. Vào **Cài đặt** → **Cấu hình API**

### Bước 2: Khai báo Permissions

Trong phần **API Permissions**, khai báo:

| Permission | Mục đích | Trạng thái |
|---|---|---|
| `profile` | Đọc avatar + tên Zalo ID | BẬT |
| `phone` | **KHÔNG BẬT** (chưa có VPS VN) | TẮT |

### Bước 3: Lấy App ID & Secret

1. Vào **Thông tin ứng dụng**
2. Copy **App ID** và **App Secret**
3. Thêm vào `app-config.json` (frontend):

```json
{
  "zalo_app_id": "YOUR_APP_ID",
  "zalo_app_secret": "YOUR_APP_SECRET"
}
```

### Bước 4: Cấu hình Open API (nếu cần)

Nếu Zalo yêu cầu khai báo Open API:
1. Vào **Open API** → **Tạo API Key**
2. Thêm domain backend vào whitelist: `https://your-backend-domain.com`

### Lưu ý quan trọng

- **Local dev**: `getUserProfile()` sẽ fail vì Zalo SDK chỉ hoạt động trong Zalo environment. Dùng `getMockProfile()` để test.
- **Chỉ cần `profile` permission** — không cần `phone` vì không lưu SĐT
- Sau khi deploy, test bằng Zalo app thật trên thiết bị

