-- CreateTable
CREATE TABLE "majors" (
    "id" VARCHAR(30) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "min_score" DOUBLE PRECISION,
    "is_active" SMALLINT NOT NULL DEFAULT 1,
    "scholarship_group_id" VARCHAR(20),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "majors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "provinces" (
    "id" VARCHAR(10) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "region" VARCHAR(50),

    CONSTRAINT "provinces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "high_schools" (
    "id" VARCHAR(20) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "province_code" VARCHAR(10) NOT NULL,
    "code" VARCHAR(20),

    CONSTRAINT "high_schools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "candidates" (
    "id" VARCHAR(20) NOT NULL,
    "zalo_id" VARCHAR(50),
    "email" VARCHAR(255) NOT NULL,
    "full_name" VARCHAR(255) NOT NULL,
    "dob" DATE NOT NULL,
    "gender" VARCHAR(10),
    "id_card" VARCHAR(20),
    "phone" VARCHAR(20),
    "contact" VARCHAR(20),
    "province" VARCHAR(100),
    "province_code" VARCHAR(10),
    "high_school" VARCHAR(255),
    "high_school_code" VARCHAR(20),
    "address" TEXT,
    "ward" VARCHAR(100),
    "art_exam_major" TEXT,
    "art_exam_status" VARCHAR(30) NOT NULL DEFAULT 'not_registered',
    "final_major" VARCHAR(100),
    "scholarship_interest" BOOLEAN NOT NULL DEFAULT false,
    "profile_status" VARCHAR(20) NOT NULL DEFAULT 'pending',
    "avatar_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "candidates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "art_exam_registrations" (
    "id" SERIAL NOT NULL,
    "candidate_id" VARCHAR(20) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "full_name" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(20),
    "id_card" VARCHAR(20),
    "dob" DATE,
    "gender" VARCHAR(10),
    "high_school" VARCHAR(255),
    "high_school_code" VARCHAR(20),
    "province" VARCHAR(100),
    "province_code" VARCHAR(10),
    "address" TEXT,
    "ward" VARCHAR(100),
    "major_choice" TEXT NOT NULL,
    "contact_province_code" VARCHAR(10),
    "contact_province" VARCHAR(100),
    "registration_status" VARCHAR(30) NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "art_exam_registrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" SERIAL NOT NULL,
    "candidate_id" VARCHAR(20) NOT NULL,
    "registration_id" INTEGER,
    "payment_ref" VARCHAR(100),
    "payment_proof" TEXT,
    "amount" INTEGER NOT NULL DEFAULT 500000,
    "bank_name" VARCHAR(100),
    "bank_account" VARCHAR(30),
    "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tarot_card" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "card_title" VARCHAR(100) NOT NULL,
    "subtitle" VARCHAR(255),
    "oracle_text" TEXT,
    "meaning" TEXT,
    "full_meaning" TEXT,
    "lucky_tag" VARCHAR(100),
    "suggested_majors" JSONB,
    "university_highlights" JSONB,
    "image_url" VARCHAR(500),
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "tarot_card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tarot_sessions" (
    "id" SERIAL NOT NULL,
    "play_id" INTEGER,
    "session_token" VARCHAR(255),
    "candidate_id" VARCHAR(20),
    "zalo_user_id" VARCHAR(50),
    "player_name" VARCHAR(100),
    "card_id" INTEGER,
    "tarot_card_id" VARCHAR(100),
    "tarot_card_name" VARCHAR(100),
    "tarot_image_url" TEXT,
    "short_meaning" VARCHAR(255),
    "category" VARCHAR(50),
    "comment" TEXT,
    "oracle_text" TEXT,
    "is_win" BOOLEAN NOT NULL DEFAULT false,
    "gift_id" INTEGER,
    "gift_name" VARCHAR(255),
    "gift_type" VARCHAR(50),
    "gift_image_url" TEXT,
    "suggested_majors" JSONB,
    "school_highlights" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tarot_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gifts" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "image_url" TEXT,
    "total_quantity" INTEGER NOT NULL DEFAULT 0,
    "remaining_quantity" INTEGER NOT NULL DEFAULT 0,
    "win_probability" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "gifts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scholarships" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "amount" VARCHAR(100),
    "description" TEXT,
    "target_audience" TEXT,
    "conditions" TEXT,
    "detail_content" JSONB,
    "icon" VARCHAR(50),
    "color" VARCHAR(100),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "scholarships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "app_config" (
    "key" VARCHAR(100) NOT NULL,
    "value" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "app_config_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "cms_news" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255),
    "summary" TEXT,
    "thumbnail" TEXT,
    "slug" VARCHAR(255),
    "content" JSONB,
    "content_format" VARCHAR(50),
    "published_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cms_news_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cms_faq" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255),
    "summary" TEXT,
    "content" TEXT,
    "icon" VARCHAR(50),

    CONSTRAINT "cms_faq_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cms_stats" (
    "id" VARCHAR(50) NOT NULL,
    "label" VARCHAR(255),
    "number" INTEGER,
    "suffix" VARCHAR(10),
    "type" VARCHAR(20),
    "icon_name" VARCHAR(50),

    CONSTRAINT "cms_stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "candidate_documents" (
    "id" SERIAL NOT NULL,
    "candidate_id" VARCHAR(20) NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "file_url" TEXT NOT NULL,
    "file_path" TEXT,
    "uploaded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "candidate_documents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "candidates_zalo_id_key" ON "candidates"("zalo_id");

-- CreateIndex
CREATE UNIQUE INDEX "candidates_email_key" ON "candidates"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tarot_sessions_play_id_key" ON "tarot_sessions"("play_id");

-- CreateIndex
CREATE UNIQUE INDEX "cms_news_slug_key" ON "cms_news"("slug");

-- AddForeignKey
ALTER TABLE "high_schools" ADD CONSTRAINT "high_schools_province_code_fkey" FOREIGN KEY ("province_code") REFERENCES "provinces"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidates" ADD CONSTRAINT "candidates_province_code_fkey" FOREIGN KEY ("province_code") REFERENCES "provinces"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "art_exam_registrations" ADD CONSTRAINT "art_exam_registrations_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "candidates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "art_exam_registrations" ADD CONSTRAINT "art_exam_registrations_province_code_fkey" FOREIGN KEY ("province_code") REFERENCES "provinces"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "candidates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_registration_id_fkey" FOREIGN KEY ("registration_id") REFERENCES "art_exam_registrations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tarot_sessions" ADD CONSTRAINT "tarot_sessions_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "tarot_card"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tarot_sessions" ADD CONSTRAINT "tarot_sessions_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "candidates"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tarot_sessions" ADD CONSTRAINT "tarot_sessions_gift_id_fkey" FOREIGN KEY ("gift_id") REFERENCES "gifts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidate_documents" ADD CONSTRAINT "candidate_documents_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "candidates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
