-- Create wards table
CREATE TABLE "wards" (
    "id" VARCHAR(20) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "province_code" VARCHAR(10) NOT NULL,
    CONSTRAINT "wards_province_fkey" FOREIGN KEY ("province_code") REFERENCES "provinces"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Create index for faster queries
CREATE INDEX "wards_province_code_idx" ON "wards"("province_code");

-- Seed data for wards (using correct province codes from database)
-- Thành phố Hà Nội (01)
INSERT INTO "wards" ("id", "name", "province_code") VALUES
('01P001', 'Phường Cầu Giấy', '01'),
('01P002', 'Phường Dịch Vọng', '01'),
('01P003', 'Phường Trung Hoà', '01'),
('01P004', 'Phường Nghĩa Đô', '01'),
('01P005', 'Phường Nghĩa Tân', '01'),
('01P006', 'Phường Mai Dịch', '01'),
('01P007', 'Phường Quan Hoa', '01'),
('01P008', 'Phường Yên Hoà', '01'),
('01P009', 'Phường Trung Văn', '01'),
('01X001', 'Xã Thụy Phương', '01');

-- Thành phố Hồ Chí Minh (29)
INSERT INTO "wards" ("id", "name", "province_code") VALUES
('29P001', 'Phường Bến Nghé', '29'),
('29P002', 'Phường Đa Kao', '29'),
('29P003', 'Phường Tân Định', '29'),
('29P004', 'Phường Nguyễn Thái Bình', '29'),
('29P005', 'Phường Phạm Ngũ Lão', '29'),
('29P006', 'Phường Cầu Ông Lãnh', '29'),
('29P007', 'Phường Cô Giang', '29'),
('29P008', 'Phường Nguyễn Cư Trinh', '29'),
('29P009', 'Phường Cầu Kho', '29'),
('29X001', 'Xã Xuân Thới Đông', '29');

-- Thành phố Đà Nẵng (21)
INSERT INTO "wards" ("id", "name", "province_code") VALUES
('21P001', 'Phường Thạch Thang', '21'),
('21P002', 'Phường Hải Châu', '21'),
('21P003', 'Phường Phước Ninh', '21'),
('21P004', 'Phường Hòa Thuận Đông', '21'),
('21P005', 'Phường Hòa Thuận Tây', '21'),
('21P006', 'Phường Nam Dương', '21'),
('21P007', 'Phường Bình Hiên', '21'),
('21P008', 'Phường Bình Thuận', '21'),
('21X001', 'Xã Hoà Bắc', '21'),
('21X002', 'Xã Hoà Liên', '21');

-- Thành phố Hải Phòng (04)
INSERT INTO "wards" ("id", "name", "province_code") VALUES
('04P001', 'Phường Ngô Quyền', '04'),
('04P002', 'Phường Lê Chân', '04'),
('04P003', 'Phường Hải An', '04'),
('04P004', 'Phường Kiến An', '04'),
('04P005', 'Phường Đồ Sơn', '04'),
('04P006', 'Phường Vĩnh Niệm', '04'),
('04P007', 'Phường Trại Chuối', '04'),
('04P008', 'Phường Quán Toan', '04'),
('04X001', 'Xã An Thanh', '04'),
('04X002', 'Xã Lê Lợi', '04');

-- Thành phố Cần Thơ (33)
INSERT INTO "wards" ("id", "name", "province_code") VALUES
('33P001', 'Phường Ninh Kiều', '33'),
('33P002', 'Phường Bình Thủy', '33'),
('33P003', 'Phường Cái Khế', '33'),
('33P004', 'Phường An Hòa', '33'),
('33P005', 'Phường Tân An', '33'),
('33P006', 'Phường Long Tuyền', '33'),
('33P007', 'Phường An Nghiệp', '33'),
('33P008', 'Phường Xuân Khánh', '33'),
('33X001', 'Xã Mỹ Khánh', '33'),
('33X002', 'Xã Thới Đông', '33');

-- Tỉnh Hà Tĩnh (18)
INSERT INTO "wards" ("id", "name", "province_code") VALUES
('18P001', 'Phường Trần Phú', '18'),
('18P002', 'Phường Nam Hà', '18'),
('18P003', 'Phường Bắc Hà', '18'),
('18P004', 'Phường Đại Nài', '18'),
('18P005', 'Phường Hà Huy Tập', '18'),
('18X001', 'Xã Thạch Trung', '18'),
('18X002', 'Xã Thạch Linh', '18'),
('18X003', 'Xã Thạch Hạ', '18'),
('18X004', 'Xã Đồng Môn', '18'),
('18X005', 'Xã Kim Hoa', '18');

-- Tỉnh Nghệ An (17)
INSERT INTO "wards" ("id", "name", "province_code") VALUES
('17P001', 'Phường Vinh', '17'),
('17P002', 'Phường Hưng Phúc', '17'),
('17P003', 'Phường Hưng Dũng', '17'),
('17P004', 'Phường Cửa Nam', '17'),
('17P005', 'Phường Quán Bàu', '17'),
('17P006', 'Phường Trung Đô', '17'),
('17X001', 'Xã Nghi Phú', '17'),
('17X002', 'Xã Hưng Chính', '17'),
('17X003', 'Xã Đại Đồng', '17'),
('17X004', 'Xã Long Xá', '17');

-- Tỉnh Thanh Hóa (16)
INSERT INTO "wards" ("id", "name", "province_code") VALUES
('16P001', 'Phường Đông Hương', '16'),
('16P002', 'Phường Đông Vệ', '16'),
('16P003', 'Phường Nam Ngạn', '16'),
('16P004', 'Phường Trường Thi', '16'),
('16P005', 'Phường Ba Đình', '16'),
('16P006', 'Phường Lam Sơn', '16'),
('16X001', 'Xã Đông Lĩnh', '16'),
('16X002', 'Xã Đông Tân', '16'),
('16X003', 'Xã Đông Hưng', '16'),
('16X004', 'Xã Quang Trung', '16');

-- Tỉnh Đồng Nai (28)
INSERT INTO "wards" ("id", "name", "province_code") VALUES
('28P001', 'Phường Dĩ An', '28'),
('28P002', 'Phường Tân Đông Hiệp', '28'),
('28P003', 'Phường Bình An', '28'),
('28P004', 'Phường Lái Thiêu', '28'),
('28P005', 'Phường Bình Hòa', '28'),
('28P006', 'Phường Vĩnh Phú', '28'),
('28X001', 'Xã An Bình', '28'),
('28X002', 'Xã Bình Nhâm', '28'),
('28X003', 'Xã Thuận Giao', '28'),
('28X004', 'Xã An Thạnh', '28');

-- Tỉnh Khánh Hòa (23)
INSERT INTO "wards" ("id", "name", "province_code") VALUES
('23P001', 'Phường Nha Trang', '23'),
('23P002', 'Phường Phước Hải', '23'),
('23P003', 'Phường Phước Tân', '23'),
('23P004', 'Phường Lộc Thọ', '23'),
('23P005', 'Phường Vạn Thắng', '23'),
('23P006', 'Phường Vạn Thạnh', '23'),
('23X001', 'Xã Vĩnh Lương', '23'),
('23X002', 'Xã Vĩnh Phương', '23'),
('23X003', 'Xã Vĩnh Ngọc', '23'),
('23X004', 'Xã Vĩnh Hiệp', '23');
