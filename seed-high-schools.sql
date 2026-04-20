-- ==============================================================================
-- SEED DATA: High Schools (Trường THPT)
-- Seed data cho bảng high_schools với các trường THPT trên toàn quốc
-- ==============================================================================

-- Thành phố Hà Nội (01)
INSERT INTO high_schools (id, name, province_code, code) VALUES
('01TH001', 'THPT Chu Văn An', '01', 'CVA'),
('01TH002', 'THPT Kim Liên', '01', 'KLT'),
('01TH003', 'THPT Việt Đức', '01', 'VDT'),
('01TH004', 'THPT Trần Hưng Đạo', '01', 'THD'),
('01TH005', 'THPT Phan Đình Phùng', '01', 'PDP'),
('01TH006', 'THPT Yên Viên', '01', 'YVT'),
('01TH007', 'THPT Nguyễn Trãi', '01', 'NTR'),
('01TH008', 'THPT Thăng Long', '01', 'TLG'),
('01TH009', 'THPT Mạc Đĩnh Chi', '01', 'MDC'),
('01TH010', 'THPT Amsterdam', '01', 'AMS');

-- Thành phố Hồ Chí Minh (29)
INSERT INTO high_schools (id, name, province_code, code) VALUES
('29TH001', 'THPT Lê Hồng Phong', '29', 'LHP'),
('29TH002', 'THPT Nguyễn Thượng Hiền', '29', 'NTH'),
('29TH003', 'THPT Trần Khai Nguyên', '29', 'TKN'),
('29TH004', 'THPT Nguyễn Thị Minh Khai', '29', 'NTMK'),
('29TH005', 'THPT Gia Định', '29', 'GDT'),
('29TH006', 'THPT Bùi Thị Xuân', '29', 'BTX'),
('29TH007', 'THPT Thủ Đức', '29', 'TDT'),
('29TH008', 'THPT Tân Bình', '29', 'TBT'),
('29TH009', 'THPT Phú Nhuận', '29', 'PNT'),
('29TH010', 'THPT Võ Thị Sáu', '29', 'VTS');

-- Thành phố Đà Nẵng (21)
INSERT INTO high_schools (id, name, province_code, code) VALUES
('21TH001', 'THPT Phan Châu Trinh', '21', 'PCT'),
('21TH002', 'THPT Trần Phú', '21', 'TPX'),
('21TH003', 'THPT Nguyễn Thị Minh Khai', '21', 'NTMK'),
('21TH004', 'THPT Tôn Thất Tùng', '21', 'TTT'),
('21TH005', 'THPT Quang Trung', '21', 'QTR'),
('21TH006', 'THPT Hải Châu', '21', 'HCT'),
('21TH007', 'THPT Liên Chiểu', '21', 'LCT'),
('21TH008', 'THPT Thanh Khê', '21', 'TKT'),
('21TH009', 'THPT Sơn Trà', '21', 'STR'),
('21TH010', 'THPT Ngũ Hành Sơn', '21', 'NHS');

-- Thành phố Hải Phòng (04)
INSERT INTO high_schools (id, name, province_code, code) VALUES
('04TH001', 'THPT Chuyên Trần Phú', '04', 'CTP'),
('04TH002', 'THPT Nguyễn Bỉnh Khiêm', '04', 'NBK'),
('04TH003', 'THPT Lê Quý Đôn', '04', 'LQD'),
('04TH004', 'THPT Vĩnh Bảo', '04', 'VBT'),
('04TH005', 'THPT Cộng Hiền', '04', 'CHT'),
('04TH006', 'THPT An Dương', '04', 'ADT'),
('04TH007', 'THPT Tiên Lãng', '04', 'TLG'),
('04TH008', 'THPT Đồ Sơn', '04', 'DST'),
('04TH009', 'THPT Hải An', '04', 'HAT'),
('04TH010', 'THPT Kiến Thụy', '04', 'KTT');

-- Thành phố Cần Thơ (33)
INSERT INTO high_schools (id, name, province_code, code) VALUES
('33TH001', 'THPT Chuyên Lý Tự Trọng', '33', 'LTT'),
('33TH002', 'THPT Nguyễn Trung Trực', '33', 'NTT'),
('33TH003', 'THPT Cái Khế', '33', 'CKT'),
('33TH004', 'THPT Ninh Kiều', '33', 'NKT'),
('33TH005', 'THPT Bình Thủy', '33', 'BTT'),
('33TH006', 'THPT Thới Lai', '33', 'TIT'),
('33TH007', 'THPT Phong Điền', '33', 'PDT'),
('33TH008', 'THPT Vĩnh Thạnh', '33', 'VTT'),
('33TH009', 'THPT Cờ Đỏ', '33', 'CDT'),
('33TH010', 'THPT Trường THPT Ninh Kiều', '33', 'TNT');

-- Tỉnh Hà Tĩnh (18)
INSERT INTO high_schools (id, name, province_code, code) VALUES
('18TH001', 'THPT Chu Văn An', '18', 'CVA'),
('18TH002', 'THPT Hồng Lĩnh', '18', 'HLT'),
('18TH003', 'THPT Nguyễn Du', '18', 'NDU'),
('18TH004', 'THPT Thạch Hà', '18', 'THA'),
('18TH005', 'THPT Cẩm Xuyên', '18', 'CMX'),
('18TH006', 'THPT Kỳ Anh', '18', 'KAH'),
('18TH007', 'THPT Đức Thọ', '18', 'DTH'),
('18TH008', 'THPT Vũ Quang', '18', 'VQT'),
('18TH009', 'THPT Lưu Hoàng', '18', 'LHT'),
('18TH010', 'THPT Can Lộc', '18', 'CLT');

-- Tỉnh Nghệ An (17)
INSERT INTO high_schools (id, name, province_code, code) VALUES
('17TH001', 'THPT Chuyên Phan Bội Châu', '17', 'CPBC'),
('17TH002', 'THPT Quỳnh Lưu 1', '17', 'QLT'),
('17TH003', 'THPT Diễn Châu 2', '17', 'DCT'),
('17TH004', 'THPT Yên Thành', '17', 'YTN'),
('17TH005', 'THPT Đô Lương 1', '17', 'DLT'),
('17TH006', 'THPT Anh Sơn', '17', 'AST'),
('17TH007', 'THPT Tân Kỳ', '17', 'TKT'),
('17TH008', 'THPT Thái Hòa', '17', 'THT'),
('17TH009', 'THPT Nam Đàn', '17', 'NDT'),
('17TH010', 'THPT Hoàng Mai', '17', 'HMT');

-- Tỉnh Thanh Hóa (16)
INSERT INTO high_schools (id, name, province_code, code) VALUES
('16TH001', 'THPT Chu Văn An', '16', 'CVA'),
('16TH002', 'THPT Lam Sơn', '16', 'LSN'),
('16TH003', 'THPT Đỗ Sơn', '16', 'DST'),
('16TH004', 'THPT Hà Trung', '16', 'HTT'),
('16TH005', 'THPT Nông Cống', '16', 'NCT'),
('16TH006', 'THPT Triệu Sơn', '16', 'TST'),
('16TH007', 'THPT Như Xuân', '16', 'NXU'),
('16TH008', 'THPT Cẩm Thủy', '16', 'CTY'),
('16TH009', 'THPT Thọ Xuân', '16', 'TXT'),
('16TH010', 'THPT Quan Hóa', '16', 'QHT');

-- Tỉnh Đồng Nai (28)
INSERT INTO high_schools (id, name, province_code, code) VALUES
('28TH001', 'THPT Chuyên Lương Thế Vinh', '28', 'LTV'),
('28TH002', 'THPT Trần Phú', '28', 'TPX'),
('28TH003', 'THPT Đông Hà', '28', 'DHT'),
('28TH004', 'THPT Biên Hòa', '28', 'BHT'),
('28TH005', 'THPT Trảng Bom', '28', 'TBT'),
('28TH006', 'THPT Long Khánh', '28', 'LKT'),
('28TH007', 'THPT Xuân Lộc', '28', 'XLT'),
('28TH008', 'THPT Thống Nhất', '28', 'TNT'),
('28TH009', 'THPT Trị An', '28', 'TAT'),
('28TH010', 'THPT Vĩnh Cửu', '28', 'VCT');

-- Tỉnh Khánh Hòa (23)
INSERT INTO high_schools (id, name, province_code, code) VALUES
('23TH001', 'THPT Chuyên Lê Quý Đôn', '23', 'LQD'),
('23TH002', 'THPT Phan Bội Châu', '23', 'PBC'),
('23TH003', 'THPT Nguyễn Văn Trỗi', '23', 'NVT'),
('23TH004', 'THPT Tôn Đức Thắng', '23', 'TDT'),
('23TH005', 'THPT Nha Trang', '23', 'NTT'),
('23TH006', 'THPT Cam Ranh', '23', 'CRT'),
('23TH007', 'THPT Diên Khánh', '23', 'DKT'),
('23TH008', 'THPT Khánh Vĩnh', '23', 'KVT'),
('23TH009', 'THPT Ninh Hòa', '23', 'NHT'),
('23TH010', 'THPT Vạn Ninh', '23', 'VNT');
