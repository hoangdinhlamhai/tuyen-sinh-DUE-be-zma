-- SEED DATA: Tarot Cards (8 lá bài từ Frontend mock)
-- Chạy sau khi đã prisma db push thành công

INSERT INTO tarot_card (name, card_title, subtitle, meaning, full_meaning, oracle_text, lucky_tag, suggested_majors, university_highlights, is_active) VALUES

('THE MAGICIAN', 'The Magician', 'I - Nhà Ảo Thuật',
 'Sự sáng tạo và tiềm năng vô hạn đang chờ bạn khai phá.',
 'Lá bài đang cố nói với bạn điều này... Bạn mạnh mẽ hơn những gì bạn thể hiện, nhưng đôi khi vẫn nghi ngờ bản thân. Trong thời điểm quan trọng này, hãy tin vào bản năng sáng tạo của mình. Bạn có khả năng biến ý tưởng thành hiện thực.',
 'Hãy tin vào sức mạnh sáng tạo bên trong bạn.',
 '🍀 Cơ hội sáng tạo bất ngờ',
 '["Kiến trúc", "Quy hoạch vùng và đô thị", "KT xây dựng công trình giao thông"]',
 '["Một cánh cửa mở ra tại DAU: Mạng lưới kết nối hơn 500 mạng lưới liên kết doanh nghiệp đối tác, đảm bảo 100% cơ hội thực tập và việc làm cho Sinh viên.", "Năng lượng của thẻ bài phản chiếu điểm mạnh này: Cơ sở vật chất chuyên ngành chuẩn quốc tế, xưởng thực hành chuyên sâu theo mô hình thực tế Doanh nghiệp.", "Năng lượng của thẻ bài phản chiếu điểm mạnh này: Đội ngũ giảng viên 100% là Doanh nhân, Kiến trúc sư, Chuyên gia đang thực chiến tại các Tập đoàn."]',
 true),

('HIGH PRIESTESS', 'The High Priestess', 'II - Nữ Tư Tế',
 'Trực giác mạnh mẽ, hãy lắng nghe tiếng nói bên trong.',
 'Lá bài đang cố nói với bạn điều này... Bạn mạnh mẽ hơn những gì bạn thể hiện, nhưng đôi khi vẫn nghi ngờ bản thân. Trong thời điểm quan trọng này, Sự ấm áp của bạn như tình cảm chân thành. Hãy giữ lấy cảm xúc chưa dám nói. Bạn sẽ toả sáng khi sống thật.',
 'Lắng nghe tiếng nói bên trong, trực giác là la bàn của bạn.',
 '🍀 Cơ hội đổi chiều bất ngờ',
 '["Thiết kế Nội thất", "Thiết kế Đồ hoạ", "Thiết kế Thời trang"]',
 '["Một cánh cửa mở ra tại DAU: Chương trình đào tạo chú trọng thực tiễn, định hướng ứng dụng công nghệ 4.0 (AI, BIM, VR/AR).", "Năng lượng của thẻ bài phản chiếu điểm mạnh này: Không gian sáng tạo mở với các studio thiết kế hiện đại, phòng thí nghiệm vật liệu tiên tiến.", "Năng lượng của thẻ bài phản chiếu điểm mạnh này: Sinh viên được trải nghiệm dự án thực tế từ năm 2, cùng làm việc với doanh nghiệp hàng đầu."]',
 true),

('THE EMPRESS', 'The Empress', 'III - Nữ Hoàng',
 'Sự dồi dào và thịnh vượng đang đến gần.',
 'Vũ trụ đang ban tặng bạn nguồn năng lượng dồi dào. Đây là lúc để bạn mở lòng đón nhận những điều tốt đẹp. Mọi nỗ lực của bạn sẽ được đền đáp xứng đáng. Hãy để bản thân được chăm sóc và yêu thương.',
 'Mở lòng đón nhận những điều tốt đẹp sắp đến.',
 '🌟 Vận may tài chính',
 '["Quản lý xây dựng", "Kỹ thuật Hạ tầng đô thị", "Công nghệ kỹ thuật Môi trường"]',
 '["Một cánh cửa mở ra tại DAU: Học bổng lên đến 100% học phí cho sinh viên xuất sắc, đảm bảo tương lai tài chính vững vàng.", "Năng lượng của thẻ bài phản chiếu điểm mạnh này: Chương trình liên kết quốc tế với các trường đại học Nhật Bản, Hàn Quốc, Singapore.", "Năng lượng của thẻ bài phản chiếu điểm mạnh này: 97% sinh viên có việc làm trong 6 tháng sau tốt nghiệp."]',
 true),

('THE EMPEROR', 'The Emperor', 'IV - Hoàng Đế',
 'Quyền lực và sự ổn định trong tầm tay bạn.',
 'Bạn đang ở thời điểm cần sự quyết đoán. Hãy đứng vững trên đôi chân của mình và đưa ra quyết định bằng lý trí. Thành công đang chờ đợi những người dám bước đi. Bạn sinh ra để dẫn dắt.',
 'Đứng vững và dẫn dắt bằng lý trí sáng suốt.',
 '👑 Lãnh đạo bẩm sinh',
 '["Kiến trúc", "Quản lý xây dựng", "KT xây dựng công trình giao thông"]',
 '["Một cánh cửa mở ra tại DAU: Đào tạo kỹ sư và kiến trúc sư có năng lực lãnh đạo, quản lý dự án quy mô lớn.", "Năng lượng của thẻ bài phản chiếu điểm mạnh này: Chương trình Quản lý xây dựng duy nhất khu vực miền Trung tại DAU.", "Năng lượng của thẻ bài phản chiếu điểm mạnh này: Mạng lưới cựu sinh viên giữ vị trí lãnh đạo tại các doanh nghiệp lớn."]',
 true),

('THE LOVER', 'The Lovers', 'VI - Tình Nhân',
 'Một lựa chọn quan trọng đang chờ đợi bạn.',
 'Đứng giữa ngã rẽ cuộc đời, bạn cần lắng nghe cả trái tim lẫn lý trí. Dù chọn con đường nào, hãy tin rằng vũ trụ luôn đồng hành cùng bạn. Tình yêu với nghề sẽ dẫn lối.',
 'Tin vào lựa chọn của trái tim, vũ trụ luôn đồng hành.',
 '💕 Nhân duyên tốt lành',
 '["Thiết kế Nội thất", "Kiến trúc Cảnh quan", "Thiết kế Đồ hoạ"]',
 '["Một cánh cửa mở ra tại DAU: Không gian đại học xanh, hiện đại ngay giữa lòng thành phố Đà Nẵng đáng sống.", "Năng lượng của thẻ bài phản chiếu điểm mạnh này: Môi trường học tập cởi mở, khuyến khích sáng tạo và phát triển cá nhân.", "Năng lượng của thẻ bài phản chiếu điểm mạnh này: Hoạt động ngoại khóa phong phú, câu lạc bộ nghệ thuật đa dạng."]',
 true),

('THE STAR', 'The Star', 'XVII - Ngôi Sao',
 'Hy vọng và cảm hứng đang tỏa sáng trên con đường bạn.',
 'Sau những giông bão, ánh sao hy vọng luôn xuất hiện. Bạn đang tiến gần hơn đến ước mơ của mình. Hãy giữ vững niềm tin và tiếp tục bước đi. Vũ trụ đang dõi theo bạn.',
 'Giữ vững niềm tin, ước mơ đang gần hơn bạn nghĩ.',
 '⭐ Ngôi sao may mắn',
 '["Kiến trúc", "Thiết kế Đồ hoạ", "Quy hoạch vùng và đô thị"]',
 '["Một cánh cửa mở ra tại DAU: Sinh viên DAU liên tục đạt giải thưởng quốc gia và quốc tế về thiết kế kiến trúc.", "Năng lượng của thẻ bài phản chiếu điểm mạnh này: Chương trình mentorship 1-1 với các kiến trúc sư nổi tiếng.", "Năng lượng của thẻ bài phản chiếu điểm mạnh này: Cơ hội tham gia triển lãm kiến trúc quốc tế ngay từ khi còn là sinh viên."]',
 true),

('THE SUN', 'The Sun', 'XIX - Mặt Trời',
 'Niềm vui và thành công rực rỡ đang chờ bạn phía trước.',
 'Mặt Trời chiếu sáng con đường bạn đi. Đây là giai đoạn tràn đầy năng lượng tích cực. Hãy chia sẻ niềm vui với mọi người xung quanh. Sự lạc quan của bạn sẽ lan toả và mang lại thành công.',
 'Năng lượng tích cực sẽ dẫn lối bạn đến thành công.',
 '☀️ Tràn đầy năng lượng',
 '["Thiết kế Thời trang", "Thiết kế Nội thất", "Thiết kế Đồ hoạ"]',
 '["Một cánh cửa mở ra tại DAU: Chương trình đào tạo đa ngành, cho phép sinh viên tự do khám phá đam mê.", "Năng lượng của thẻ bài phản chiếu điểm mạnh này: Xưởng thực hành hiện đại với trang thiết bị chuẩn công nghiệp.", "Năng lượng của thẻ bài phản chiếu điểm mạnh này: Kết nối trực tiếp với thị trường lao động qua hệ thống doanh nghiệp đối tác."]',
 true),

('THE WORLD', 'The World', 'XXI - Thế Giới',
 'Hoàn thành và viên mãn — một chương mới sắp mở ra.',
 'Bạn đang đứng ở đỉnh cao của hành trình. Mọi mảnh ghép đã hoàn thiện, và một chương mới đầy hứa hẹn đang chờ đợi. Hãy sẵn sàng đón nhận. Thế giới đang mở rộng trước mắt bạn.',
 'Một chương mới đầy hứa hẹn đang chờ đợi bạn.',
 '🌍 Hoàn thành viên mãn',
 '["Kiến trúc", "Quy hoạch vùng và đô thị", "Quản lý xây dựng"]',
 '["Một cánh cửa mở ra tại DAU: Chương trình trao đổi sinh viên quốc tế, mở rộng tầm nhìn toàn cầu.", "Năng lượng của thẻ bài phản chiếu điểm mạnh này: Đạt chuẩn quốc gia về kiểm định chất lượng giáo dục.", "Năng lượng của thẻ bài phản chiếu điểm mạnh này: Chương trình đào tạo tích hợp công nghệ 4.0 (AI, BIM, VR/AR)."]',
 true)

ON CONFLICT DO NOTHING;
