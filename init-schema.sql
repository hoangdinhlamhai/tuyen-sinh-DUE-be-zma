-- ==============================================================================
-- DATABASE SCHEMA: Zalo Mini App Tuyển sinh ĐH Kiến trúc Đà Nẵng (DAU)
-- PostgreSQL Dialect
-- Reverse-engineered from production bundle & real API JSON dumps
-- ==============================================================================

-- 1. MAJORS (Ngành đào tạo)
CREATE TABLE IF NOT EXISTS majors (
    id VARCHAR(30) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    min_score DECIMAL(4,2),
    is_active SMALLINT DEFAULT 1,
    scholarship_group_id VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO majors (id, name, scholarship_group_id) VALUES 
    ('7580101', 'Kiến trúc', 'GROUP_A'),
    ('7580108', 'Thiết kế nội thất', 'GROUP_A'),
    ('7210404', 'Thiết kế Đồ họa', 'GROUP_A'),
    ('7480201', 'Công nghệ thông tin', 'GROUP_B'),
    ('7810201', 'Quản trị khách sạn', 'GROUP_B'),
    ('7810103', 'Quản trị dịch vụ du lịch và lữ hành', 'GROUP_B')
ON CONFLICT (id) DO NOTHING;


-- 2. PROVINCES (Tỉnh/Thành phố)
CREATE TABLE IF NOT EXISTS provinces (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    region VARCHAR(50)
);

INSERT INTO provinces (id, name) VALUES 
    ('01', 'Thành phố Hà Nội'),
    ('21', 'Thành phố Đà Nẵng'),
    ('29', 'Thành phố Hồ Chí Minh')
ON CONFLICT (id) DO NOTHING;


-- 3. HIGH_SCHOOLS (Trường THPT)
CREATE TABLE IF NOT EXISTS high_schools (
    id VARCHAR(20) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    province_code VARCHAR(10) REFERENCES provinces(id),
    code VARCHAR(20)
);


-- 4. CANDIDATES (Thí sinh - Bảng core)
CREATE TABLE IF NOT EXISTS candidates (
    id VARCHAR(20) PRIMARY KEY,
    zalo_id VARCHAR(50) UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,
    gender VARCHAR(10),
    id_card VARCHAR(20),
    phone VARCHAR(20),
    contact VARCHAR(20),
    
    -- Học vấn
    province VARCHAR(100),
    province_code VARCHAR(10) REFERENCES provinces(id),
    high_school VARCHAR(255),
    high_school_code VARCHAR(20),
    address TEXT,
    ward VARCHAR(100),
    
    -- Ngành & Trạng thái
    art_exam_major TEXT,
    art_exam_status VARCHAR(30) DEFAULT 'not_registered',
    final_major VARCHAR(100),
    scholarship_interest BOOLEAN DEFAULT FALSE,
    
    profile_status VARCHAR(20) DEFAULT 'pending',
    avatar_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- 5. ART_EXAM_REGISTRATIONS (Đăng ký hồ sơ thi MT)
CREATE TABLE IF NOT EXISTS art_exam_registrations (
    id SERIAL PRIMARY KEY,
    candidate_id VARCHAR(20) REFERENCES candidates(id),
    email VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    id_card VARCHAR(20),
    dob DATE,
    gender VARCHAR(10),
    high_school VARCHAR(255),
    high_school_code VARCHAR(20),
    province VARCHAR(100),
    province_code VARCHAR(10) REFERENCES provinces(id),
    address TEXT,
    ward VARCHAR(100),
    
    major_choice TEXT NOT NULL,
    
    contact_province_code VARCHAR(10),
    contact_province VARCHAR(100),
    
    registration_status VARCHAR(30) DEFAULT 'pending', 
    -- "not_registered", "pending", "paid", "submitted", "approved", "rejected"
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- 6. PAYMENTS (Thanh toán Lệ phí thi)
CREATE TABLE IF NOT EXISTS payments (
    id SERIAL PRIMARY KEY,
    candidate_id VARCHAR(20) REFERENCES candidates(id),
    registration_id INTEGER REFERENCES art_exam_registrations(id),
    payment_ref VARCHAR(100),
    payment_proof TEXT,
    amount INTEGER DEFAULT 500000,
    bank_name VARCHAR(100),
    bank_account VARCHAR(30),
    status VARCHAR(20) DEFAULT 'pending',
    -- "pending", "verified", "rejected"
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- 7. TAROT_SESSIONS (Game bốc bài trúng quà)
CREATE TABLE IF NOT EXISTS tarot_sessions (
    id SERIAL PRIMARY KEY,
    play_id INTEGER UNIQUE,
    session_token VARCHAR(255),
    
    candidate_id VARCHAR(20) REFERENCES candidates(id),
    zalo_user_id VARCHAR(50),
    player_name VARCHAR(100),
    
    -- Tarot details
    tarot_card_id VARCHAR(100),
    tarot_card_name VARCHAR(100),
    tarot_image_url TEXT,
    short_meaning VARCHAR(255),
    category VARCHAR(50),
    comment TEXT,
    oracle_text TEXT,
    
    -- Gift parsing
    is_win BOOLEAN DEFAULT FALSE,
    gift_id INTEGER,
    gift_name VARCHAR(255),
    gift_type VARCHAR(50),
    gift_image_url TEXT,
    
    -- JSON blobs
    suggested_majors JSONB,
    school_highlights JSONB,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- 8. SCHOLARSHIPS (Học bổng)
CREATE TABLE IF NOT EXISTS scholarships (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    amount VARCHAR(100),
    description TEXT,
    target_audience TEXT,
    conditions TEXT,
    detail_content JSONB,
    icon VARCHAR(50),
    color VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- 9. APP_CONFIG (Cấu hình text, deadline, rules)
CREATE TABLE IF NOT EXISTS app_config (
    key VARCHAR(100) PRIMARY KEY,
    value TEXT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- 10. CMS_CONTENT (Trang chủ nội dung mở rộng)
CREATE TABLE IF NOT EXISTS cms_news (
    id UUID PRIMARY KEY,
    title VARCHAR(255),
    summary TEXT,
    thumbnail TEXT,
    slug VARCHAR(255) UNIQUE,
    content_format VARCHAR(50),
    published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cms_faq (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    summary TEXT,
    content TEXT,
    icon VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS cms_stats (
    id VARCHAR(50) PRIMARY KEY,
    label VARCHAR(255),
    number INTEGER,
    suffix VARCHAR(10),
    type VARCHAR(20),
    icon_name VARCHAR(50)
);


-- 11. CANDIDATE_DOCUMENTS (File Uploading)
CREATE TABLE IF NOT EXISTS candidate_documents (
    id SERIAL PRIMARY KEY,
    candidate_id VARCHAR(20) REFERENCES candidates(id),
    type VARCHAR(50) NOT NULL, -- photo_3x4, cccd_front, etc.
    file_url TEXT NOT NULL,
    file_path TEXT,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- End of Schema
