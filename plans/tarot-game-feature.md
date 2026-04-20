# Plan: Tarot Game Feature

## Hiện trạng

### Backend

- Model `TarotSession` đã có trong `prisma/schema.prisma`
- **Chưa có** code tarot nào trong `src/`

### Frontend (`../tuyen-sinh-DAU-fe`)

- UI đầy đủ tại `src/pages/tarot/`: ProvinceStep, SchoolStep, NameStep, DrawStep, CardRevealOverlay, ResultScreen, FullReadingModal, GiftPopup
- Hook `src/pages/tarot/hooks/useTarotFlow.ts` quản lý flow, chọn bài
- **Toàn bộ dùng mock data hardcode** — 4 lá bài trong `src/mock/data.ts`
- Không có API call nào

---

## Phase 1: Backend

### 1.1 Thêm model `TarotCard` vào DB

File: `prisma/schema.prisma`

```prisma
model TarotCard {
  id                   Int      @id @default(autoincrement())
  name                 String   @db.VarChar(100)
  cardTitle            String   @db.VarChar(100)
  subtitle             String?  @db.VarChar(255)
  oracleText           String?  @db.Text
  meaning              String?  @db.Text
  fullMeaning          String?  @db.Text
  luckyTag             String?  @db.VarChar(100)
  suggestedMajors      Json?
  universityHighlights Json?
  imageUrl             String?  @db.VarChar(500)
  isActive             Boolean  @default(true)

  @@map("tarot_card")
}
```

Seed data: chuyển 4 lá bài hiện có từ mock FE vào bảng `tarot_card`.

### 1.2 Tạo `TarotModule`

Cấu trúc theo pattern `news/`:

```
src/tarot/
├── tarot.module.ts
├── tarot.controller.ts
├── tarot.service.ts
└── dto/
    └── draw-card.dto.ts
```

### 1.3 Endpoints

| Method | Path                             | Mô tả                             |
| ------ | -------------------------------- | --------------------------------- |
| `POST` | `/api/tarot/draw`                | Bốc bài, tạo session, trả kết quả |
| `GET`  | `/api/tarot/history/:zaloUserId` | Lịch sử bốc bài                   |

**Request body `POST /api/tarot/draw`:**

```json
{
  "zaloUserId": "string (optional)",
  "playerName": "string",
  "provinceCode": "string (optional)",
  "schoolCode": "string (optional)"
}
```

**Response:**

```json
{
  "sessionId": "uuid",
  "card": { "id": 1, "name": "...", "cardTitle": "...", "suggestedMajors": [...] },
  "isWin": false,
  "giftName": null,
  "giftType": null
}
```

**Logic trong service:**

1. Kiểm tra giới hạn lượt chơi (nếu có)
2. Random chọn `TarotCard` active từ DB
3. Tính xem có trúng quà không (probability config)
4. Tạo `TarotSession` record
5. Trả về kết quả

### 1.4 Register vào AppModule

`src/app.module.ts` — thêm `TarotModule` vào `imports`.

---

## Phase 2: Frontend

### 2.1 Tạo `tarot.service.ts`

File: `src/services/api/tarot.service.ts`

```ts
export const tarotService = {
  drawCard(payload): Promise<DrawCardResponse>
  getHistory(zaloUserId): Promise<TarotSession[]>
}
```

### 2.2 Cập nhật `useTarotFlow.ts`

- Xóa import mock `tarotCards`
- `handleSelectCard` → gọi `tarotService.drawCard()` (async)
- Thêm loading/error state trong khi chờ API
- Nhận gift data từ response → truyền xuống GiftPopup

### 2.3 Cập nhật type `TarotCard`

File: `src/types/index.ts` — align với API response shape:

```ts
interface TarotCard {
  id: number;
  name: string;
  cardTitle: string;
  subtitle?: string;
  oracleText?: string;
  suggestedMajors?: string[];
  universityHighlights?: string[];
  sessionId?: string;
  isWin?: boolean;
  giftName?: string | null;
  giftType?: string | null;
}
```

### 2.4 Wire GiftPopup với data thật

- Nhận props gift từ API response
- Chỉ hiển thị khi `isWin === true`

---

## Phase 3: Polish

### 3.1 Giới hạn lượt chơi

- Backend kiểm tra `TarotSession` của user trong ngày
- Nếu vượt limit → trả `429` với `nextPlayAt`
- Frontend hiển thị thông báo "Hôm nay bạn đã bốc rồi"

### 3.2 Ẩn identity lá bài trước khi bốc

- `DrawStep` hiện đang lấy tên lá bài từ local state
- Sau khi refactor: hiển thị card back generic, chỉ reveal sau khi API trả về

### 3.3 Error handling & loading

- Spinner trong lúc gọi API
- Toast lỗi nếu API fail
- Nút retry

---

## Câu hỏi cần quyết định (PO)

| #   | Câu hỏi                                               | Ảnh hưởng                         |
| --- | ----------------------------------------------------- | --------------------------------- | -------------------------------------------------------- |
| 1   | Giới hạn mấy lần chơi/ngày?                           | Logic play limit ở backend        | -> không giới hạn                                        |
| 2   | Có quà không? Tỉ lệ trúng? Quà gì?                    | Gift probability + GiftPopup data | -> có trong table gift                                   |
| 3   | Giữ 4 lá bài hay mở rộng? Có ảnh không?               | Số record seed + imageUrl         | -> 8 lá bài, tự thêm icon, hoặc bất kì gì cho các lá bài |
| 4   | Phải là Candidate đã đăng ký mới chơi, hay anonymous? | Validation + liên kết Candidate   | -> không cần đăng ký                                     |

---

## Checklist hoàn thành

- [ ] Model `TarotCard` đã migrate & seed data
- [ ] `POST /api/tarot/draw` hoạt động, lưu session vào DB
- [ ] `GET /api/tarot/history/:zaloUserId` hoạt động
- [ ] Frontend gọi API thay mock data
- [ ] GiftPopup hiển thị data thật
- [ ] Play limit được enforce
- [ ] Loading/error states đầy đủ
- [ ] Không có card data nào lộ trong FE JS bundle
