# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run start:dev       # Development with hot-reload
npm run build           # Compile TypeScript to dist/
npm run start:prod      # Run compiled production build
npm run lint            # ESLint with auto-fix
npm run test            # Jest unit tests
npm run test:e2e        # End-to-end tests
npx prisma generate     # Regenerate Prisma client after schema changes
npx prisma db push      # Push schema changes to database
```

Server runs on `process.env.PORT` (default 3000). The frontend Vite dev server occupies port 3000, so backend uses `PORT=3002` in `.env` (already set). Frontend `VITE_API_BASE_URL` must point to `http://localhost:$PORT/api`.

## Architecture

**Modular monolith:** `AppModule` imports `PrismaModule` (global singleton) and feature modules. Adding a new feature = new module with controller + service + DTOs, imported into `AppModule`.

```
src/
├── main.ts                       # Bootstrap: global prefix /api, CORS, ValidationPipe
├── app.module.ts                 # Root module
├── prisma/                       # Global PrismaService (auto-connect/disconnect)
└── news/                         # Feature module pattern to follow
    ├── news.module.ts
    ├── news.controller.ts        # Public: GET /api/public/news
    ├── news-admin.controller.ts  # Admin: POST/PATCH/DELETE /api/admin/news
    ├── news.service.ts
    └── dto/
```

**Global config in `main.ts`:**
- Prefix: `/api` on all routes
- `ValidationPipe({ whitelist: true, transform: true })` — strips unknown fields, auto-casts types
- CORS enabled for all origins (dev setup)

## Database

PostgreSQL via Neon (managed cloud). ORM: Prisma 5.16.2.

Key models in `prisma/schema.prisma`:

| Model | Purpose |
|-------|---------|
| `CmsNews` | News articles — `content` is `JsonB` (blocknote block array or null), `contentFormat` is `"blocknote"\|"html"` |
| `Candidate` | Applicant profiles linked to Zalo user (`zaloId`) |
| `ArtExamRegistration` | Art exam sign-ups linked to Candidate |
| `Payment` | Fee payments (default 500,000 VND), linked to Candidate + Registration |
| `TarotSession` | Gamification — tarot card draws with prize/major suggestions as `Json` fields |
| `Scholarship` | Scholarship programs with `detailContent` as `Json` |
| `CmsFaq` / `CmsStat` / `AppConfig` | CMS content and key-value app configuration |

After any schema change, run `npx prisma generate`.

## Content Format

`CmsNews.content` stores blocknote-format blocks (array of `{ id, type, props, content, children }`). The frontend renderer handles: `paragraph`, `heading`, `bulletListItem`, `image`, and inline styles (bold, italic, underline, textColor, link). `contentFormat` must be `"blocknote"` for this to render correctly.

## Environment Variables

```
DATABASE_URL=   # Neon PostgreSQL connection string
PORT=3002       # Must differ from frontend Vite dev server (port 3000)
```

## Seed & Data Scripts

| File | Purpose |
|------|---------|
| `seed-news-content.js` | Seeds blocknote `content` for all `CmsNews` records. Run with `node seed-news-content.js`. All 10 news articles already seeded. |
| `details-news.json` | Source content for one specific news article (used as reference for blocknote block structure). |
| `seed-data.sql` | Initial SQL seed data. |
| `init-schema.sql` | Schema initialization SQL. |

To re-seed news content: `node seed-news-content.js`

## Known Gaps

- `/api/admin/news` has **no authentication** — do not expose publicly without adding a guard.
- No auth module exists yet; adding one should follow the same module pattern as `NewsModule`.

## Frontend Integration

Frontend project lives at `../tuyen-sinh-DAU-fe`. Key integration points:

- `VITE_API_BASE_URL` in frontend `.env` must be `http://localhost:<PORT>/api` (matching backend `PORT`)
- News list: `GET /api/public/news` → `{ data: CmsNews[], meta: { total, page, limit, totalPages } }`
- News detail: `GET /api/public/news/:id` → full `CmsNews` object including `content` and `contentFormat`
- Frontend renders `contentFormat: "blocknote"` using a custom block renderer in `src/pages/home.tsx`
