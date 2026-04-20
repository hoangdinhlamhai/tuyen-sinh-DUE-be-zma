-- SEED DATA: Quà tặng (Gifts)
-- Chạy sau khi đã prisma db push thành công để tạo bảng gifts

INSERT INTO gifts (name, type, image_url, total_quantity, remaining_quantity, win_probability, is_active) VALUES

('Bút chì Dream Pencil', 'PHYSICAL', 'https://cms-api.ktd.edu.vn/uploads/ADMS/2026-04/c_bt_chi.png', 1000, 1000, 0.5, true),
('Sổ tay Sketchbook KTD', 'PHYSICAL', 'https://cms-api.ktd.edu.vn/uploads/ADMS/2026-04/c_s_tay.png', 500, 500, 0.2, true),
('Voucher trà sữa 50k', 'VOUCHER', 'https://cms-api.ktd.edu.vn/uploads/ADMS/2026-04/c_voucher.png', 100, 100, 0.05, true),
('Áo thun DAU', 'PHYSICAL', 'https://cms-api.ktd.edu.vn/uploads/ADMS/2026-04/c_ao_thun.png', 50, 50, 0.01, true)

ON CONFLICT DO NOTHING;
