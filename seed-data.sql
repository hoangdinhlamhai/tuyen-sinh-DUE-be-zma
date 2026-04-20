-- ==============================================================================
-- SEED DATA: Zalo Mini App Tuyển sinh ĐH Kiến trúc Đà Nẵng (DAU)
-- Được gen tự động từ các file JSON API thực tế (Đã làm sạch data)
-- ==============================================================================

-- Bảng: majors
INSERT INTO majors (id, name, min_score, is_active, scholarship_group_id, created_at) VALUES
('7210403', 'Thiết kế đồ họa', NULL, 1, 'GROUP_A', '2026-03-04T09:17:24.000Z'),
('7220201', 'Ngôn ngữ Anh', NULL, 1, 'GROUP_B', '2026-03-04T09:17:24.000Z'),
('7220204', 'Ngôn ngữ Trung Quốc', NULL, 1, 'GROUP_B', '2026-03-04T09:17:24.000Z'),
('7340101', 'Quản trị kinh doanh', NULL, 1, 'GROUP_B', '2026-03-04T09:17:24.000Z'),
('7340201', 'Tài chính - Ngân hàng', NULL, 1, 'GROUP_B', '2026-03-04T09:17:24.000Z'),
('7340301', 'Kế toán', NULL, 1, 'GROUP_B', '2026-03-04T09:17:24.000Z'),
('7480201', 'Công nghệ thông tin', NULL, 1, 'GROUP_B', '2026-03-04T09:17:24.000Z'),
('7510301', 'Công nghệ kỹ thuật điện, điện tử', NULL, 1, 'GROUP_B', '2026-03-04T09:17:24.000Z'),
('7510605', 'Logistics và quản lý chuỗi cung ứng', NULL, 1, 'GROUP_B', '2026-03-04T09:17:24.000Z'),
('7580101', 'Kiến trúc', NULL, 1, 'GROUP_A', '2026-03-04T09:17:24.000Z'),
('7580108', 'Thiết kế nội thất', NULL, 1, 'GROUP_A', '2026-03-04T09:17:24.000Z'),
('7580201', 'Kỹ thuật xây dựng', NULL, 1, 'GROUP_B', '2026-03-04T09:17:24.000Z'),
('7580205', 'Kỹ thuật xây dựng công trình giao thông', NULL, 1, 'GROUP_C', '2026-03-04T09:17:24.000Z'),
('7580302', 'Quản lý xây dựng', NULL, 1, 'GROUP_B', '2026-03-04T09:17:24.000Z'),
('7810103', 'Quản trị dịch vụ du lịch và lữ hành', NULL, 1, 'GROUP_B', '2026-03-04T09:17:24.000Z'),
('7810201', 'Quản trị khách sạn', NULL, 1, 'GROUP_B', '2026-03-04T09:17:24.000Z')
ON CONFLICT (id) DO NOTHING;

-- Bảng: provinces
INSERT INTO provinces (id, name) VALUES
('00', 'Cục nhà trường'),
('33', 'Thành phố Cần Thơ'),
('21', 'Thành phố Đà Nẵng'),
('01', 'Thành phố Hà Nội'),
('04', 'Thành phố Hải Phòng'),
('29', 'Thành phố Hồ Chí Minh'),
('20', 'Thành phố Huế'),
('32', 'Tỉnh An Giang'),
('02', 'Tỉnh Bắc Ninh'),
('34', 'Tỉnh Cà Mau'),
('07', 'Tỉnh Cao Bằng'),
('25', 'Tỉnh Đắk Lắk'),
('13', 'Tỉnh Điện Biên'),
('28', 'Tỉnh Đồng Nai'),
('31', 'Tỉnh Đồng Tháp'),
('24', 'Tỉnh Gia Lai'),
('18', 'Tỉnh Hà Tĩnh'),
('05', 'Tỉnh Hưng Yên'),
('23', 'Tỉnh Khánh Hòa'),
('14', 'Tỉnh Lai Châu'),
('26', 'Tỉnh Lâm Đồng'),
('11', 'Tỉnh Lạng Sơn'),
('09', 'Tỉnh Lào Cai'),
('17', 'Tỉnh Nghệ An'),
('06', 'Tỉnh Ninh Bình'),
('12', 'Tỉnh Phú Thọ'),
('22', 'Tỉnh Quảng Ngãi'),
('03', 'Tỉnh Quảng Ninh'),
('19', 'Tỉnh Quảng Trị'),
('15', 'Tỉnh Sơn La'),
('27', 'Tỉnh Tây Ninh'),
('10', 'Tỉnh Thái Nguyên'),
('16', 'Tỉnh Thanh Hóa'),
('08', 'Tỉnh Tuyên Quang'),
('30', 'Tỉnh Vĩnh Long')
ON CONFLICT (id) DO NOTHING;

-- Bảng: app_config
INSERT INTO app_config (key, value) VALUES
('bank_account', '2000201348637'),
('bank_account_name', 'Trường ĐH Kiến trúc Đà Nẵng'),
('bank_name', 'Agribank CN Da Nang'),
('content1_desc', 'Đánh giá năng lực mỹ thuật bằng phương pháp trắc nghiệm trên máy tính. Mỗi thí sinh thi theo 1 trong 3 đợt (theo giấy báo thi).'),
('content1_duration', '50 phút'),
('content1_name', 'Trắc nghiệm máy tính'),
('content1_percent', '50%'),
('content2_desc', 'Vẽ tĩnh vật bằng bút chì đen trên giấy thi khổ A3. Giấy thi do Nhà trường cung cấp.'),
('content2_duration', '180 phút'),
('content2_name', 'Vẽ tĩnh vật'),
('content2_percent', '50%'),
('day1_checkin_label', 'Thí sinh có mặt, làm thủ tục dự thi, nhận giấy báo thi, nghe phổ biến quy chế.'),
('day1_checkin_time', '07h30'),
('day1_date', 'Thứ Bảy, 20/06/2026'),
('day1_session1_label', 'Đợt 1: Thi trắc nghiệm (theo giấy báo thi)'),
('day1_session1_time', '13h00–13h50'),
('day1_session2_label', 'Đợt 2: Thi trắc nghiệm (theo giấy báo thi)'),
('day1_session2_time', '14h20–15h10'),
('day1_session3_label', 'Đợt 3: Thi trắc nghiệm (theo giấy báo thi)'),
('day1_session3_time', '15h40–16h30'),
('day2_backup_label', 'Buổi dự phòng (chiều 21/06)'),
('day2_date', 'Chủ Nhật, 21/06/2026'),
('day2_label', 'Thí sinh có mặt tại phòng thi vẽ mỹ thuật (theo giấy báo thi) để làm bài thi Vẽ tĩnh vật.'),
('day2_time', '07h00'),
('exam_address', '566 Núi Thành, Phường Hoà Cường, Đà Nẵng'),
('exam_deadline_fee', 'trước 17 giờ 00, 08/06/2026'),
('exam_deadline_profile', '08/06/2026'),
('exam_guide_url', 'https://thivemythuat.dau.edu.vn'),
('exam_note_2024', 'Lưu ý: Trường ĐH Kiến trúc Đà Nẵng chấp nhận kết quả thi môn Vẽ mỹ thuật, môn Hình họa, Bố cục màu của thí sinh đã dự thi tại các trường đại học trong cả nước trong cùng năm tuyển sinh (năm 2026) để xét tuyển.'),
('exam_results_date', 'trước 17 giờ 00, 26/6/2026'),
('exam_year', '2026'),
('fee_amount', '500000'),
('registration_open', '1'),
('requirements', 'fa-id-card|CCCD (bắt buộc mang)
fa-palette|Bảng vẽ, ghế ngồi vẽ
fa-pen|Bút bi mực xanh hoặc tím
fa-pencil-alt|Dụng cụ vẽ (không dùng chì màu, chì than)
fa-sticky-note|Giấy thi do Nhà trường cung cấp'),
('transfer_content_prefix', 'Lệ phí thi VMT')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

-- Bảng: cms_news
INSERT INTO cms_news (id, title, summary, thumbnail, slug, content_format, published_at) VALUES
('14271d4d-e49d-4e35-bc68-6665dad8db52', 'Nắm rõ tổ hợp xét tuyển 2026 - cầm chắc “key pass” vào đại học!', '2K8 ơi, bạn đã biết ngành mình thích có thể xét những tổ hợp nào chưa? Đừng để đến phút cuối mới “ngơ ngác” vì thiếu mất một lựa chọn phù hợp nha 👀', 'https://cms-api.ktd.edu.vn/uploads/ADMS/2026-04/7a5415e4-a886-4089-972d-3ba8a2c532a6.webp', 'nam-ro-to-hop-xet-tuyen-2026-cam-chac-key-pass-vao-dai-hoc', 'blocknote', '2026-04-04T02:14:02.710Z'),
('c786fc68-2695-410b-9883-fc0773d645d1', 'Trường Đại học Kiến trúc Đà Nẵng chính thức tổ chức kỳ thi Đánh giá năng lực mỹ thuật 2026 dành cho thí sinh xét tuyển vào các ngành: Kiến trúc, Thiết kế nội thất, Thiết kế đồ họa.', 'Trường Đại học Kiến trúc Đà Nẵng tổ chức thi Đánh giá năng lực mỹ thuật cho thí sinh đăng ký xét tuyển (ĐKXT) vào 3 ngành đào tạo đại học hệ chính quy năm 2026: (1) Kiến trúc, (2) Thiết kế nội thất, (3) Thiết kế đồ họa.', 'https://cms-api.ktd.edu.vn/uploads/ADMS/2026-04/dd4be4d8-436a-4027-a2fa-b12c255e52eb.webp', 'truong-dai-hoc-kien-truc-da-nang-chinh-thuc-to-chuc-ky-thi-danh-gia-nang-luc-my-thuat-2026-danh-cho-thi-sinh-xet-tuyen-vao-cac-nganh-kien-truc-thiet-ke-noi-that-thiet-ke-do-hoa', 'blocknote', '2026-04-02T03:46:57.753Z'),
('f3b35e9c-9a84-4e48-abc4-ca673b96f4a1', 'Trường Đại học Kiến trúc Đà Nẵng công bố Phương án xét tuyển Đại học năm 2026', 'Năm 2026, Trường Đại học Kiến trúc Đà Nẵng chính thức công bố 04 phương thức xét tuyển linh hoạt, mở ra 2.500 chỉ tiêu cho 16 ngành đào tạo đa lĩnh vực. Cơ hội trở thành sinh viên chính quy đang rộng mở hơn bao giờ hết!', 'https://cms-api.ktd.edu.vn/uploads/ADMS/2026-04/dad63bc6-9505-4cc4-a97e-8dc0c4df8f64.webp', 'truong-dai-hoc-kien-truc-da-nang-cong-bo-phuong-an-xet-tuyen-dai-hoc-nam-2026', 'html', '2026-04-11T01:06:31.830Z'),
('876cfb8d-8415-4665-949a-4cbb416530df', 'Khám phá ngành học tại DAU – bắt đầu hành trình tương lai của bạn', 'Chọn đúng ngành học chính là bước khởi đầu quan trọng để mỗi bạn trẻ phát huy thế mạnh và theo đuổi đam mê của mình.

', 'https://cms-api.ktd.edu.vn/uploads/ADMS/2026-03/e90a4670-9674-4ae4-a254-89a158abe3a6.webp', 'kham-pha-nganh-hoc-tai-dau-bat-dau-hanh-trinh-tuong-lai-cua-ban', 'blocknote', '2026-04-02T03:47:34.383Z'),
('31097e55-045a-4c64-a699-1968ea08357b', 'Chính sách học bổng tân sinh viên 2026', 'Nhằm giảm bớt gánh nặng tài chính cho thí sinh và gia đình, đồng thời khích lệ tinh thần học tập của những học sinh có năng lực và khát vọng phát triển, Trường Đại học Kiến trúc Đà Nẵng công bố chính sách học bổng và hỗ trợ nhập học dành cho tân sinh viên năm 2026.', 'https://cms-api.ktd.edu.vn/uploads/ADMS/2026-03/65a55b89-7d25-4626-bd8b-63e4337c0939.webp', 'chinh-sach-hoc-bong-tan-sinh-vien-2026', 'html', '2026-04-02T03:48:53.503Z'),
('5CDAE875-1F74-44C0-9DA0-EE8D4C501846', 'Ngành Kiến trúc – Học gì để trở thành Kiến trúc sư chuyên nghiệp', 'Ngành học dành cho những ai đam mê thiết kế, yêu cái đẹp và muốn kiến tạo những công trình ấn tượng.', 'https://cms-api.ktd.edu.vn/Media\31_TH1044\FolderFunc\202411\Images/anh-bia-nganh-01-1-20241128050552-e.jpg', 'nganh-kien-truc-hoc-gi-de-tro-thanh-kien-truc-su-chuyen-nghiep', 'html', '2026-04-02T03:49:10.203Z'),
('EF995DAF-B643-45C8-9049-A16BDEFE4D26', 'Hướng dẫn các bước nhập học trực tuyến và trực tiếp dành cho tân sinh viên khóa 2025', 'Thông báo quan trọng về Hướng dẫn các bước nhập học trực tuyến và trực tiếp dành cho Tân sinh viên khóa 2025', 'https://cms-api.ktd.edu.vn/Media\31_TH1044\FolderFunc\202508\Images/hd-cac-buoc-nhap-hoc-2025-169-web-20250815041446-e.png', 'huong-dan-cac-buoc-nhap-hoc-truc-tuyen-va-truc-tiep-danh-cho-tan-sinh-vien-khoa-2025', 'blocknote', '2026-03-23T03:40:52.297Z'),
('A94D5FF2-FF91-46F7-8B6D-38FAF4CE87F0', 'Tín hiệu nhập học đã bật xanh – Đếm ngược ngày trở thành Tân sinh viên D.A.U – bạn đã sẵn sàng!', 'Nhằm tạo điều kiện thuận lợi cho thí sinh và phụ huynh trong quá trình làm thủ tục, Trường Đại học Kiến trúc Đà Nẵng tổ chức 2 hình thức nhập học với thời gian cụ thể như sau:', 'https://cms-api.ktd.edu.vn/Media\31_TH1044\FolderFunc\202508\Images/thoi-gian-nhap-cho-2025-20250820032918-e.png', 'tin-hieu-nhap-hoc-da-bat-xanh-dem-nguoc-ngay-tro-thanh-tan-sinh-vien-dau-ban-da-san-sang', 'blocknote', '2026-03-23T03:22:54.100Z'),
('78F5E673-B9DF-4A68-9736-46C9FB0DB3EE', 'Kế hoạch học tập và Tài liệu hướng dẫn cho Tân sinh viên và phụ huynh khóa 2024', NULL, 'https://cms-api.ktd.edu.vn/Media/31_TH1044/FolderFunc/202303/Images/5befcc17b72874762d392-20230302041255-e.jpg', NULL, 'blocknote', '2026-03-23T03:42:04.467Z'),
('06AE6A59-28F9-432F-8093-86B5F6554112', 'Bỏ lỡ đăng ký nguyện vọng? Vẫn còn cơ hội xét tuyển đại học 2025!', 'Bạn chưa đăng ký nguyện vọng? Đừng lo – vẫn còn “cửa sáng” dành cho bạn!', 'https://cms-api.ktd.edu.vn/Media\31_TH1044\FolderFunc\202508\Images/xet-tuyen-bo-sung-2025-20250804121743-e.png', NULL, 'blocknote', '2026-03-23T03:42:20.763Z')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

-- Bảng: cms_faq
INSERT INTO cms_faq (id, title, summary, content, icon) VALUES
(7, 'Hướng dẫn đăng ký xét tuyển', 'Các bước đăng ký xét tuyển vào ĐH Kiến trúc Đà Nẵng', '<h3>Các bước đăng ký xét tuyển</h3><ol><li><b>Bước 1:</b> Tạo tài khoản thí sinh tại cổng đăng ký</li><li><b>Bước 2:</b> Cập nhật hồ sơ cá nhân đầy đủ (CCCD, địa chỉ, trường THPT...)</li><li><b>Bước 3:</b> Đăng ký nguyện vọng ngành học</li><li><b>Bước 4:</b> Nộp minh chứng học bổng (nếu có)</li><li><b>Bước 5:</b> Theo dõi kết quả xét tuyển</li></ol><p><b>Lưu ý:</b> Thí sinh cần hoàn tất các bước theo thứ tự và đúng thời hạn quy định.</p>', 'fa-file-signature'),
(8, 'Chính sách học bổng 2026', 'Thông tin về các mức học bổng dành cho tân sinh viên', '<section class="scholarship-policy">
  <style>
    .scholarship-policy {
      font-family: Arial, sans-serif;
      line-height: 1.45;
      color: #222;
      font-size: 12px;
      text-align: justify;
    }

    .section-block {
      margin-bottom: 24px;
    }

    .main-title,
    .section-title,
    .sub-title,
    .group-title {
      color: #c62828;
      font-weight: 700;
      font-size: 12px;
      margin: 0 0 8px 0;
      text-align: left;
    }

    .scholarship-policy p,
    .scholarship-policy li {
      text-align: justify;
      font-size: 12px;
    }

    .scholarship-policy p {
      margin: 0 0 8px 0;
    }

    .scholarship-policy ul {
      margin: 0 0 10px 18px;
      padding: 0;
    }

    .scholarship-policy li {
      margin-bottom: 5px;
    }

    .scholarship-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 8px;
      font-size: 12px;
    }

    .scholarship-table th,
    .scholarship-table td {
      border: 1px solid #999;
      padding: 7px 8px;
      vertical-align: middle;
      font-size: 12px;
    }

    .scholarship-table th {
      background-color: #fbe9e7;
      font-weight: 700;
      text-align: center;
    }

    .scholarship-table td {
      text-align: center;
    }

    .scholarship-table td:first-child {
      text-align: left;
      font-weight: 600;
    }

    .italic-title {
      font-style: italic;
    }
  </style>

  <div class="section-block">
    <h2 class="section-title">I. Mục tiêu</h2>
    <p>
      Chính sách được xây dựng nhằm khuyến khích, đồng hành và tạo điều kiện để thí sinh có thêm cơ hội tiếp cận môi trường học tập chất lượng tại Trường Đại học Kiến trúc Đà Nẵng. Đồng thời, đây cũng là sự hỗ trợ thiết thực giúp thí sinh chủ động hơn trong quá trình lựa chọn ngành học và chuẩn bị nhập học.
    </p>
    <p>
      Điểm nổi bật của chính sách là cơ chế xét học bổng sớm, giúp thí sinh biết kết quả ngay từ giai đoạn đăng ký để chủ động lựa chọn ngành học và định hướng lộ trình tương lai.
    </p>
  </div>

  <div class="section-block">
    <h2 class="section-title">II. Phạm vi áp dụng</h2>
    <p>
      Chính sách áp dụng cho tất cả thí sinh đăng ký và hoàn tất thủ tục nhập học hệ Đại học Chính quy tại Trường Đại học Kiến trúc Đà Nẵng trước ngày 30/8/2026 trong kỳ tuyển sinh năm 2026.
    </p>
  </div>

  <div class="section-block">
    <h2 class="section-title">III. Các loại học bổng</h2>
    <ul>
      <li>Học bổng Tài năng</li>
      <li>Ưu đãi nhập học theo nhóm</li>
      <li>Học bổng Kết nối Giáo dục</li>
      <li>Học bổng đồng hành và quà tặng nhập học</li>
    </ul>
  </div>

  <div class="section-block">
    <h1 class="main-title">1. Học bổng Tài năng</h1>

    <h3 class="group-title">1.1. Nhóm ngành sáng tạo</h3>
    <p>Các ngành: Kiến trúc, Thiết kế nội thất, Thiết kế đồ họa.</p>
    <table class="scholarship-table">
      <thead>
        <tr>
          <th>Loại học bổng</th>
          <th>Mức học bổng</th>
          <th>Xét theo kết quả thi tốt nghiệp THPT</th>
          <th>Xét theo kết quả điểm học bạ THPT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tài năng vàng</td>
          <td>100% học phí học kỳ I</td>
          <td>ĐXT ≥ 27</td>
          <td>ĐXT ≥ 29</td>
        </tr>
        <tr>
          <td>Tài năng bạc</td>
          <td>50% học phí học kỳ I</td>
          <td>25 ≤ ĐXT &lt; 27</td>
          <td>27 ≤ ĐXT &lt; 29</td>
        </tr>
        <tr>
          <td>Tài năng đồng</td>
          <td>25% học phí học kỳ I</td>
          <td>23 ≤ ĐXT &lt; 25</td>
          <td>25 ≤ ĐXT &lt; 27</td>
        </tr>
      </tbody>
    </table>

    <h3 class="group-title" style="margin-top:14px;">1.2. Nhóm ngành kỹ thuật - kinh tế - du lịch - ngôn ngữ</h3>
    <p>
      Các ngành: Kỹ thuật xây dựng, Quản lý xây dựng, Công nghệ kỹ thuật điện – điện tử, Công nghệ thông tin, Quản trị kinh doanh, Kế toán, Tài chính – Ngân hàng, Logistic và quản lý chuỗi cung ứng, Quản trị dịch vụ du lịch và lữ hành, Quản trị khách sạn, Ngôn ngữ Anh, Ngôn ngữ Trung Quốc.
    </p>
    <table class="scholarship-table">
      <thead>
        <tr>
          <th>Loại học bổng</th>
          <th>Mức học bổng</th>
          <th>Xét theo kết quả thi tốt nghiệp THPT</th>
          <th>Xét theo kết quả điểm học bạ THPT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tài năng vàng</td>
          <td>100% học phí học kỳ I</td>
          <td>ĐXT ≥ 26</td>
          <td>ĐXT ≥ 28</td>
        </tr>
        <tr>
          <td>Tài năng bạc</td>
          <td>50% học phí học kỳ I</td>
          <td>22 ≤ ĐXT &lt; 26</td>
          <td>26 ≤ ĐXT &lt; 28</td>
        </tr>
        <tr>
          <td>Tài năng đồng</td>
          <td>25% học phí học kỳ I</td>
          <td>19 ≤ ĐXT &lt; 22</td>
          <td>24 ≤ ĐXT &lt; 26</td>
        </tr>
      </tbody>
    </table>

    <h3 class="group-title" style="margin-top:14px;">1.3. Nhóm ngành xu hướng</h3>
    <p>Ngành: Kỹ thuật xây dựng công trình giao thông.</p>
    <table class="scholarship-table">
      <thead>
        <tr>
          <th>Loại học bổng</th>
          <th>Mức học bổng</th>
          <th>Xét theo kết quả thi tốt nghiệp THPT</th>
          <th>Xét theo kết quả điểm học bạ THPT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tài năng vàng</td>
          <td>100% học phí học kỳ I</td>
          <td>ĐXT ≥ 22</td>
          <td>ĐXT ≥ 24</td>
        </tr>
        <tr>
          <td>Tài năng bạc</td>
          <td>50% học phí học kỳ I</td>
          <td>16 ≤ ĐXT &lt; 22</td>
          <td>18 ≤ ĐXT &lt; 24</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="section-block">
    <h1 class="main-title">2. Ưu đãi nhập học theo nhóm</h1>

    <h2 class="sub-title">2.1. Nguyên tắc áp dụng và cộng dồn</h2>
    <ul>
      <li><strong>Nguyên tắc cộng dồn:</strong> Áp dụng <strong>song song (cộng dồn)</strong> với các loại học bổng và ưu đãi khác (Học bổng Tài năng, Hỗ trợ tân sinh viên...).</li>
      <li><strong>Giới hạn:</strong> Tổng mức ưu đãi không vượt quá 100% học phí phải đóng.</li>
      <li>Trường hợp sinh viên đạt Học bổng Tài năng 100%: Vẫn được tính là thành viên của nhóm để đảm bảo số lượng cho các thành viên khác hưởng ưu đãi, nhưng cá nhân sinh viên đó không được nhận thêm tiền giảm trừ.</li>
    </ul>

    <h2 class="sub-title">2.2. Mức ưu đãi chi tiết</h2>
    <p>Mức giảm áp dụng cho từng thành viên và khấu trừ trực tiếp vào học phí kỳ đầu tiên.</p>
    <table class="scholarship-table">
      <thead>
        <tr>
          <th>Quy mô nhóm</th>
          <th>Mức giảm cho mỗi thành viên</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nhóm 3 người</td>
          <td>1.000.000 VNĐ / sinh viên</td>
        </tr>
        <tr>
          <td>Nhóm 5 người</td>
          <td>1.500.000 VNĐ / sinh viên</td>
        </tr>
        <tr>
          <td>Nhóm từ 7 người trở lên</td>
          <td>2.000.000 VNĐ / sinh viên</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="section-block">
    <h1 class="main-title">3. Học bổng Kết nối Giáo dục</h1>

    <h2 class="sub-title italic-title">3.1. Đối tượng áp dụng</h2>
    <ul>
      <li>Con của cán bộ, giảng viên, nhân viên đang làm việc tại Trường Đại học Kiến trúc Đà Nẵng.</li>
      <li>Con của cán bộ, giảng viên, nhân viên đang làm việc tại các Sở GD-ĐT và các trường THPT trên cả nước.</li>
    </ul>

    <h2 class="sub-title italic-title">3.2. Mức ưu đãi</h2>
    <p>Giảm 20% học phí toàn khóa học.</p>

    <h2 class="sub-title italic-title">3.3. Điều kiện duy trì</h2>
    <p>GPA ≥ 2.75/4.0.</p>

    <h2 class="sub-title">3.4. Thời hạn đăng ký</h2>
    <p>Thực hiện đầy đủ thủ tục nhập học và hoàn thành học phí trước 17h00 ngày 30/08/2026.</p>

    <h2 class="sub-title">3.5. Trường hợp đạt nhiều học bổng</h2>
    <ul>
      <li>- Thí sinh đồng thời đạt nhiều loại học bổng sẽ được xét mức học bổng có giá trị cao nhất.</li>
      <li>- Riêng Học bổng Kết nối Giáo dục được tiếp tục áp dụng từ học kỳ 2 trở đi và được khấu trừ vào học phí.</li>
      <li>- Từ năm thứ 2, sinh viên cần đáp ứng điều kiện duy trì theo quy định của nhà trường (GPA ≥ 2.75) để tiếp tục được áp dụng học bổng.</li>
    </ul>
  </div>

  <div class="section-block">
    <h1 class="main-title">4. Học bổng đồng hành và quà tặng nhập học</h1>

    <h2 class="sub-title">4.1. Đối tượng áp dụng</h2>
    <p>
      Áp dụng cho thí sinh hoàn tất thủ tục nhập học sớm trước <strong>17h00 ngày 30/08/2026</strong>.
    </p>

    <h2 class="sub-title">4.2. Gói quà tặng “DAU Welcome Kit”</h2>
    <p>
      Dành cho <strong>100% tân sinh viên</strong> nhập học trước thời hạn quy định.
    </p>
    <p>
      Tất cả thí sinh nhập học trước thời hạn nêu trên, bất kể mức ưu tiên đầu vào, đều được nhận bộ quà tặng trị giá <strong>1.000.000 VNĐ</strong>, bao gồm:
    </p>
    <ul>
      <li>- 01 ba lô laptop học hiệu DAU.</li>
      <li>- 01 bộ đồng phục thể dục.</li>
      <li>- 01 áo thun sự kiện.</li>
    </ul>

    <h2 class="sub-title">4.3. Học bổng đồng hành</h2>
    <p>
      Đối với thí sinh <strong>không thuộc diện nhận học bổng tài năng</strong> hoặc <strong>các loại học bổng miễn giảm học phí khác</strong>, nhà trường dành mức hỗ trợ tài chính <strong>2.000.000 VNĐ</strong>, nhằm giúp sinh viên ổn định chi phí trong giai đoạn đầu nhập học.
    </p>
  </div>
</section>', 'fa-award'),
(9, 'Ngành đào tạo', 'Danh sách ngành đào tạo tại ĐH Kiến trúc Đà Nẵng', '<div style="font-family: Arial, sans-serif; line-height:1.7; font-size:15px;">

<p>
Trường Đại học Kiến trúc Đà Nẵng là cơ sở giáo dục đại học theo định hướng ứng dụng, xây dựng hệ sinh thái đào tạo đa ngành trải rộng ở các lĩnh vực Kiến trúc, Xây dựng, Thiết kế, Kinh tế – Kinh doanh, Du lịch và Ngôn ngữ tạo nên môi trường học tập liên ngành, năng động và giàu tính thực tiễn.
</p>

<p>
Với đội ngũ giảng viên giàu kinh nghiệm cùng hệ thống cơ sở vật chất được đầu tư đồng bộ, Nhà trường hướng đến đào tạo những thế hệ sinh viên vững chuyên môn, chắc kỹ năng và sẵn sàng hội nhập.
</p>

<p><b>Các ngành đào tạo tại trường bao gồm:</b></p>

<p style="color:#1976d2;"><b>Nhóm ngành sáng tạo:</b></p>
<ul>
<li><a href="https://dau.edu.vn/nganh-kien-truc.html" style="color:#000000; text-decoration:none;"> - Kiến trúc</a></li>
<li><a href="https://dau.edu.vn/nganh-thiet-ke-noi-that-110942.html" style="color:#000000; text-decoration:none;">- Thiết kế nội thất</a></li>
<li><a href="https://dau.edu.vn/nganh-thiet-ke-do-hoa.html" style="color:#000000; text-decoration:none;">- Thiết kế đồ họa</a></li>
</ul>

<p style="color:#1976d2;"><b>Nhóm ngành Kỹ thuật & Công nghệ:</b></p>
<ul>
<li><a href="https://dau.edu.vn/nganh-ky-thuat-xay-dung-041152.html" style="color:#000000; text-decoration:none;">- Kỹ thuật xây dựng</a></li>
<li><a href="https://dau.edu.vn/nganh-quan-ly-xay-dung-054821.html" style="color:#000000; text-decoration:none;">- Quản lý xây dựng</a></li>
<li><a href="https://dau.edu.vn/nganh-ky-thuat-xay-dung-cong-trinh-giao-thong-025030.html" style="color:#000000; text-decoration:none;">- Kỹ thuật xây dựng công trình giao thông</a></li>
<li><a href="https://dau.edu.vn/nganh-cong-nghe-thong-tin.html" style="color:#000000; text-decoration:none;">- Công nghệ thông tin</a></li>
<li><a href="https://dau.edu.vn/nganh-cong-nghe-ky-thuat-dien-dien-tu.html" style="color:#000000; text-decoration:none;">- Công nghệ kỹ thuật điện, điện tử</a></li>
</ul>

<p style="color:#1976d2;"><b>Nhóm ngành Kinh tế – Du lịch:</b></p>
<ul>
<li><a href="https://dau.edu.vn/quan-tri-kinh-doanh.html" style="color:#000000; text-decoration:none;">- Quản trị kinh doanh</a></li>
<li><a href="https://dau.edu.vn/nganh-ke-toan-043615.html" style="color:#000000; text-decoration:none;">- Kế toán</a></li>
<li><a href="https://dau.edu.vn/nganh-tai-chinh-ngan-hang-100040.html" style="color:#000000; text-decoration:none;">- Tài chính ngân hàng</a></li>
<li><a href="https://dau.edu.vn/nganh-logistics-va-quan-ly-chuoi-cung-ung.html" style="color:#000000; text-decoration:none;">- Logistics và quản trị chuỗi cung ứng</a></li>
<li><a href="https://dau.edu.vn/nganh-quan-tri-dich-vu-du-lich-va-lu-hanh.html" style="color:#000000; text-decoration:none;">- Quản trị dịch vụ du lịch và lữ hành</a></li>
<li><a href="https://dau.edu.vn/nganh-quan-tri-khach-san.html" style="color:#000000; text-decoration:none;">- Quản trị khách sạn</a></li>
</ul>

<p style="color:#1976d2;"><b>Nhóm ngành Ngôn ngữ:</b></p>
<ul>
<li><a href="https://dau.edu.vn/nganh-ngon-ngu-anh.html" style="color:#000000; text-decoration:none;">- Ngôn ngữ Anh</a></li>
<li><a href="https://dau.edu.vn/nganh-ngon-ngu-trung-quoc-113320.html" style="color:#000000; text-decoration:none;">- Ngôn ngữ Trung Quốc</a></li>
</ul>

</div>', 'fa-graduation-cap'),
(10, 'Câu hỏi thường gặp', 'Giải đáp các thắc mắc phổ biến của thí sinh', '<h3>Câu hỏi thường gặp</h3><p><b>Q: Khi nào có kết quả xét tuyển?</b></p><p>A: Kết quả sẽ được công bố theo lịch tuyển sinh hàng năm, thường vào tháng 8.</p><p><b>Q: Tôi có thể thay đổi nguyện vọng không?</b></p><p>A: Có, bạn có thể thay đổi nguyện vọng trong thời gian cho phép trước khi hết hạn nộp hồ sơ.</p><p><b>Q: Học phí dự kiến bao nhiêu?</b></p><p>A: Học phí tùy thuộc vào ngành đào tạo, dao động từ 15-25 triệu/năm.</p>', 'fa-circle-question'),
(11, 'Lịch tuyển sinh 2026', 'Các mốc thời gian quan trọng trong tuyển sinh', '<div style="font-family: Arial, sans-serif; line-height:1.7; font-size:15px;">

<h3 style="color:#d32f2f; text-align:center; font-size:22px; margin-bottom:20px; font-weight:bold;">
LỊCH TUYỂN SINH 2026
</h3>

<p style="margin-bottom:10px;"><b>- 17/6 - 21/6/2026:</b> Thí sinh thực hành đăng ký, điều chỉnh nguyện vọng xét tuyển trên hệ thống.</p>

<p style="margin-bottom:10px;"><b>- Trước 30/6/2026:</b> Các trường Đại học công bố kết quả xét tuyển thẳng.</p>

<p style="margin-bottom:10px;">
<b style="color:#d32f2f;">- 2/7 - 17h ngày 14/7/2026:</b> Thí sinh đăng kí, điều chỉnh nguyện vọng xét tuyển (không giới hạn số lần).
</p>

<p style="margin-bottom:10px;"><b>- Ngày 8/7/2026:</b> Bộ GD&ĐT công bố ngưỡng đảm bảo chất lượng đầu vào.</p>

<p style="margin-bottom:10px;">
<b style="color:#d32f2f;">- Trước ngày 10/7/2026:</b> Các trường Đại học công bố điểm nhận hồ sơ xét tuyển.
</p>

<p style="margin-bottom:10px;"><b>- 15/7 - 17h ngày 21/7/2026:</b> Thí sinh nộp lệ phí xét tuyển trực tuyến.</p>

<p style="margin-bottom:10px;"><b>- 22/7 - 24/7/2026:</b> Sở GD&ĐT giải quyết sai sót của thí sinh (nếu có).</p>

<p style="margin-bottom:10px;"><b>- 4/8 - 17h ngày 10/8/2026:</b> Các đơn vị của Bộ GD&ĐT xử lý nguyện vọng trên hệ thống.</p>

<p style="margin-bottom:10px;">
<b style="color:#d32f2f;">- Trước 17h ngày 13/8/2026:</b> Các trường Đại học công bố điểm chuẩn ĐỢT 1.
</p>

<p style="margin-bottom:10px;"><b>- Trước 17h ngày 21/8/2026:</b> Thí sinh hoàn thành việc xác nhận nhập học trực tuyến Đợt 1.</p>

<p style="margin-bottom:10px;"><b>- Từ 22/8/2026:</b> Các trường Đại học xét tuyển bổ sung.</p>

</div>', 'fa-calendar-alt'),
(12, 'Liên hệ hỗ trợ', 'Thông tin liên hệ phòng tuyển sinh', '<h3>Thông tin liên hệ</h3><p><b>TRƯỜNG ĐẠI HỌC KIẾN TRÚC ĐÀ NẴNG</b></p><ul><li>566 Núi Thành, phường Hòa Cường, TP. Đà Nẵng</li><li>► Hotline: 19007466</li><li>► Email: tuyensinh@dau.edu.vn</li><li>► Website: <a href="https://www.dau.edu.vn">https://www.dau.edu.vn</a></li>
<li>► Fanpage: <a href="https://www.facebook.com/DaihocKientrucDanang">https://www.facebook.com/DaihocKientrucDanang</a></li>
<li>► Zalo OA: <a href="https://zalo.me/dhkientrucdanang">https://zalo.me/dhkientrucdanang</a></li>
<li>► Tiktok: <a href="https://www.tiktok.com/@dhkientrucdanang">https://www.tiktok.com/@dhkientrucdanang</a></li>
</ul>', 'fa-phone-alt')
ON CONFLICT (id) DO NOTHING;

-- Bảng: cms_stats
INSERT INTO cms_stats (id, label, number, suffix, type, icon_name) VALUES
('st1', 'Đạt chuẩn quốc gia về kiểm định CLGD', 1, '', 'ICON', 'Award'),
('st2', 'Có việc làm sau 6 tháng tốt nghiệp', 97, '%', 'NUMBER', 'Briefcase'),
('st3', 'Phòng học trang thiết bị hiện đại', 100, '%', 'NUMBER', 'Monitor'),
('st4', 'Giáo sư, Tiến sĩ, Thạc sĩ', 400, '+', 'NUMBER', 'User'),
('st5', 'Ngành đào tạo', 18, '', 'NUMBER', 'Book')
ON CONFLICT (id) DO NOTHING;



-- Cập nhật data blocknote cho tin tức chi tiết
UPDATE cms_news SET content = '[{"id":"e88c10c6-37f4-41a6-929c-d2fad5eae05e","type":"paragraph","props":{"backgroundColor":"rgb(255, 255, 255)","textColor":"rgb(51, 51, 51)","textAlignment":"justify"},"content":[{"type":"text","text":"1. Nội dung thi và thời gian làm bài thi","styles":{"bold":true,"textColor":"red"}}],"children":[]},{"id":"56601f1c-a924-429c-9535-4054737b8d3b","type":"paragraph","props":{"backgroundColor":"rgb(255, 255, 255)","textColor":"rgb(51, 51, 51)","textAlignment":"justify"},"content":[{"type":"text","text":"Kỳ thi Đánh giá năng lực mỹ thuật tại Trường Đại học Kiến trúc Đà Nẵng gồm 2 nội dung:","styles":{}}],"children":[]},{"id":"2d220ce2-a57f-4170-b7a7-74b4fc6773dd","type":"bulletListItem","props":{"backgroundColor":"default","textColor":"default","textAlignment":"justify"},"content":[{"type":"text","text":"Nội dung 1 (chiếm 50% điểm số):","styles":{"bold":true,"textColor":"rgb(0, 0, 255)"}},{"type":"text","text":" Thi ","styles":{}},{"type":"text","text":"Đánh giá năng lực mỹ thuật","styles":{"bold":true}},{"type":"text","text":" bằng phương pháp trắc nghiệm trên máy tính; thời gian làm bài: 50 phút","styles":{}}],"children":[]},{"id":"7420f21f-c430-4fd6-b550-8a680a6c7623","type":"paragraph","props":{"backgroundColor":"rgb(255, 255, 255)","textColor":"rgb(51, 51, 51)","textAlignment":"justify"},"content":[{"type":"text","text":"       Thí sinh truy cập địa chỉ","styles":{}},{"type":"text","text":" ","styles":{"textColor":"blue"}},{"type":"link","href":"https://thivemythuat.dau.edu.vn","content":[{"type":"text","text":"https://thivemythuat.dau.edu.vn","styles":{"bold":true,"underline":true,"textColor":"blue"}}]},{"type":"text","text":" ","styles":{"bold":true,"underline":true,"textColor":"blue"}},{"type":"text","text":"để xem video hướng dẫn và làm bài thi thử Đánh giá năng lực mỹ thuật bằng phương pháp trắc nghiệm.","styles":{}}],"children":[]},{"id":"98e29999-8f31-41df-8c59-8599f4180ce2","type":"bulletListItem","props":{"backgroundColor":"default","textColor":"default","textAlignment":"justify"},"content":[{"type":"text","text":"Nội dung 2 (chiếm 50% điểm số):","styles":{"bold":true,"textColor":"rgb(0, 0, 255)"}},{"type":"text","text":" ","styles":{"bold":true}},{"type":"text","text":"Làm bài thi ","styles":{}},{"type":"text","text":"Vẽ mỹ thuật","styles":{"bold":true}},{"type":"text","text":" (Vẽ tĩnh vật bằng bút chì đen trên giấy thi khổ A3); thời gian làm bài: 180 phút.","styles":{}}],"children":[]},{"id":"1f3a4db6-33e8-4af5-96a5-79944dd896f6","type":"bulletListItem","props":{"backgroundColor":"default","textColor":"default","textAlignment":"justify"},"content":[{"type":"text","text":"Lưu  ý: Thí sinh phải hoàn thành đầy đủ 2 nội dung thi ở trên mới được công nhận điểm để xét tuyển. ","styles":{"bold":true}}],"children":[]},{"id":"90bfd1dd-a74a-4f0d-a801-98c40f09848a","type":"paragraph","props":{"backgroundColor":"rgb(255, 255, 255)","textColor":"rgb(51, 51, 51)","textAlignment":"justify"},"content":[{"type":"text","text":"2. Hình thức đăng ký dự thi:","styles":{"bold":true,"textColor":"red"}}],"children":[]},{"id":"1d60a8f4-c23a-4a9a-a2a9-a42e0a0fb492","type":"paragraph","props":{"backgroundColor":"rgb(255, 255, 255)","textColor":"rgb(51, 51, 51)","textAlignment":"justify"},"content":[{"type":"text","text":"Thí sinh đăng ký trực tuyến tại link sau: ","styles":{}},{"type":"link","href":"https://vemythuat.dau.edu.vn","content":[{"type":"text","text":"https://vemythuat.dau.edu.vn","styles":{"bold":true,"underline":true,"textColor":"blue"}}]}],"children":[]},{"id":"9dff78f5-ea2b-4195-aa85-33e25e8f884c","type":"paragraph","props":{"backgroundColor":"rgb(255, 255, 255)","textColor":"rgb(51, 51, 51)","textAlignment":"justify"},"content":[{"type":"text","text":"3. Ngày, giờ thi và địa điểm","styles":{"bold":true,"textColor":"red"}}],"children":[]},{"id":"87e555a7-fc66-4075-ab9c-1927c9287c75","type":"image","props":{"textAlignment":"center","backgroundColor":"default","name":"thi ve my thuat 1.png","url":"https://cms-api.ktd.edu.vn/uploads/ADMS/2026-04/65c7a489-ff6c-4402-aa96-8991431f84e1.webp","caption":"","showPreview":true},"children":[]},{"id":"fd0b9338-780e-43a1-91f5-a25bbd000e66","type":"paragraph","props":{"backgroundColor":"rgb(255, 255, 255)","textColor":"rgb(51, 51, 51)","textAlignment":"justify"},"content":[{"type":"text","text":"Địa điểm thi: ","styles":{}},{"type":"text","text":"Trường Đại học Kiến trúc Đà Nẵng, 566 Núi Thành, P.Hòa Cường, TP. Đà Nẵng.","styles":{"bold":true}}],"children":[]},{"id":"f071058f-7769-46c9-afee-ae5199d0c503","type":"paragraph","props":{"backgroundColor":"rgb(255, 255, 255)","textColor":"rgb(51, 51, 51)","textAlignment":"justify"},"content":[{"type":"text","text":"4. Hồ sơ đăng ký dự thi","styles":{"bold":true,"textColor":"rgb(192, 57, 43)"}}],"children":[]},{"id":"b7aa0ebe-0038-4ed5-af7f-f65a14480cb1","type":"paragraph","props":{"backgroundColor":"rgb(255, 255, 255)","textColor":"rgb(51, 51, 51)","textAlignment":"justify"},"content":[{"type":"text","text":"  Hồ sơ đăng ký dự thi (ĐKDT) gồm có:","styles":{}}],"children":[]},{"id":"970d3934-4b88-4a28-8a96-fcb532d61e39","type":"paragraph","props":{"backgroundColor":"rgb(255, 255, 255)","textColor":"rgb(51, 51, 51)","textAlignment":"justify"},"content":[{"type":"text","text":"       - Phiếu ĐKDT (thí sinh in ra, sau khi đăng ký trực tuyến thành công theo đường dẫn  ","styles":{}},{"type":"link","href":"https://vemythuat.dau.edu.vn","content":[{"type":"text","text":"https://vemythuat.dau.edu.vn","styles":{"bold":true,"underline":true,"textColor":"rgb(0, 0, 255)"}}]},{"type":"text","text":" của Trường Đại học Kiến trúc Đà Nẵng);  ","styles":{}}],"children":[]},{"id":"d343ca21-11de-4f75-9e5f-fd1c74d3adbc","type":"paragraph","props":{"backgroundColor":"rgb(255, 255, 255)","textColor":"rgb(51, 51, 51)","textAlignment":"justify"},"content":[{"type":"text","text":"       -  Ba ảnh 3×4 (ghi rõ họ tên, ngày sinh, nơi sinh ở mặt sau của ảnh).","styles":{}}],"children":[]},{"id":"9a92bae2-22f3-439e-b59f-9887f700c1ed","type":"paragraph","props":{"backgroundColor":"rgb(255, 255, 255)","textColor":"rgb(51, 51, 51)","textAlignment":"justify"},"content":[{"type":"text","text":"5. Thủ tục nộp hồ sơ ĐKDT và lệ phí thi","styles":{"bold":true,"textColor":"rgb(192, 57, 43)"}}],"children":[]},{"id":"a00fb1be-ebf2-4fff-9aa3-cbf0571b6ef6","type":"bulletListItem","props":{"backgroundColor":"default","textColor":"default","textAlignment":"justify"},"content":[{"type":"text","text":"Thời gian nộp hồ sơ ĐKDT: ","styles":{}},{"type":"text","text":"Từ ngày 25/03/2025 đến 17h00 ngày 08/06/2026.","styles":{"bold":true,"textColor":"red"}},{"type":"text","text":" Thí sinh nộp hồ sơ ĐKDT trực tiếp tại Phòng Đào tạo của Trường, hoặc gửi qua đường bưu điện chuyển phát nhanh theo địa chỉ: Phòng Đào tạo, Trường Đại học Kiến trúc Đà Nẵng, 566 Núi Thành, P.Hòa Cường, TP. Đà Nẵng.","styles":{}}],"children":[]},{"id":"ee40fbdc-1ac0-47df-a5fa-fc910aff7dee","type":"bulletListItem","props":{"backgroundColor":"default","textColor":"default","textAlignment":"justify"},"content":[{"type":"text","text":"Lệ phí thi: ","styles":{}},{"type":"text","text":"500.000 đồng/hồ sơ","styles":{"bold":true}},{"type":"text","text":";","styles":{}}],"children":[]},{"id":"1444d090-29b0-490e-92c8-04e25a5e5e13","type":"bulletListItem","props":{"backgroundColor":"default","textColor":"default","textAlignment":"justify"},"content":[{"type":"text","text":"Thời gian nộp lệ phí: ","styles":{}},{"type":"text","text":"trước 17h00 ngày 10/06/2026","styles":{"bold":true,"textColor":"rgb(0, 0, 255)"}},{"type":"text","text":".","styles":{"bold":true}}],"children":[]},{"id":"dce8292f-6bc0-48cb-9976-93e93559a69d","type":"bulletListItem","props":{"backgroundColor":"default","textColor":"default","textAlignment":"justify"},"content":[{"type":"text","text":"Hình thức nộp: Thí sinh chuyển khoản đến số tài khoản sau:","styles":{}}],"children":[]},{"id":"1653b4c0-524e-44fd-a9f3-967de7b12c93","type":"image","props":{"textAlignment":"center","backgroundColor":"default","name":"thi ve my thuat 2.png","url":"https://cms-api.ktd.edu.vn/uploads/ADMS/2026-04/52f05572-e599-45e8-87d1-5d82fb9edc02.webp","caption":"","showPreview":true},"children":[]},{"id":"63bfe5af-5402-4a9f-861b-20cf81a0371f","type":"paragraph","props":{"backgroundColor":"rgb(255, 255, 255)","textColor":"rgb(51, 51, 51)","textAlignment":"justify"},"content":[{"type":"text","text":"6. Tài liệu và dụng cụ thí sinh phải mang theo khi đi thi","styles":{"bold":true,"textColor":"rgb(192, 57, 43)"}}],"children":[]},{"id":"18b51d17-a012-41d7-935b-02a7a4b25daa","type":"bulletListItem","props":{"backgroundColor":"default","textColor":"default","textAlignment":"justify"},"content":[{"type":"text","text":"CMND/ CCCD (để cán bộ coi thi kiểm tra đối chiếu);  ","styles":{}}],"children":[]},{"id":"bb27ad30-ebb4-4834-99ac-265e74788692","type":"bulletListItem","props":{"backgroundColor":"default","textColor":"default","textAlignment":"justify"},"content":[{"type":"text","text":"Bảng vẽ; Ghế ngồi vẽ;","styles":{}}],"children":[]},{"id":"eb370022-df30-408a-8baa-b4a241408a76","type":"bulletListItem","props":{"backgroundColor":"default","textColor":"default","textAlignment":"justify"},"content":[{"type":"text","text":"Bút bi có mực màu xanh hoặc tím để viết các thông tin cá nhân vào giấy thi;","styles":{}}],"children":[]},{"id":"fc80d98e-f5da-48ad-8d9b-0e3cc3d2deb7","type":"bulletListItem","props":{"backgroundColor":"default","textColor":"default","textAlignment":"justify"},"content":[{"type":"text","text":"Các dụng cụ cần thiết để vẽ (không được dùng chì màu, chì than).","styles":{}}],"children":[]},{"id":"040a82a9-e6c2-45ce-8632-d1172af62047","type":"paragraph","props":{"backgroundColor":"rgb(255, 255, 255)","textColor":"rgb(51, 51, 51)","textAlignment":"justify"},"content":[{"type":"text","text":"Lưu ý:","styles":{"underline":true}},{"type":"text","text":" Giấy thi vẽ do Nhà trường cung cấp cho thí sinh.","styles":{}}],"children":[]},{"id":"965fb4c2-f03c-43a0-bc36-9ebd904e932d","type":"paragraph","props":{"backgroundColor":"rgb(255, 255, 255)","textColor":"rgb(51, 51, 51)","textAlignment":"justify"},"content":[{"type":"text","text":"7. Công bố kết quả thi","styles":{"bold":true,"textColor":"rgb(192, 57, 43)"}}],"children":[]},{"id":"634dd44a-dd14-4025-8326-deabe634ddd0","type":"paragraph","props":{"backgroundColor":"rgb(255, 255, 255)","textColor":"rgb(51, 51, 51)","textAlignment":"justify"},"content":[{"type":"text","text":"Kết quả thi Đánh giá năng lực mỹ thuật năm 2026 sẽ được công bố trước ","styles":{}},{"type":"text","text":"17h00 ngày 26/06/2026","styles":{"bold":true}},{"type":"text","text":".","styles":{}}],"children":[]},{"id":"28d994e5-60af-42b4-b5dc-c9493c350267","type":"paragraph","props":{"backgroundColor":"rgb(255, 255, 255)","textColor":"rgb(51, 51, 51)","textAlignment":"justify"},"content":[{"type":"text","text":"Thí sinh có thể xem các thông tin tuyển sinh liên quan tại trang thông tin điện tử của Trường Đại học Kiến trúc Đà Nẵng: ","styles":{}},{"type":"link","href":"http://tuyensinh.dau.edu.vn","content":[{"type":"text","text":"tuyensinh.dau.edu.vn","styles":{"bold":true,"underline":true,"textColor":"rgb(0, 0, 255)"}}]},{"type":"text","text":";","styles":{"bold":true}},{"type":"text","text":" hoặc tại trang thông tin của kỳ thi: ","styles":{}},{"type":"link","href":"https://vemythuat.dau.edu.vn","content":[{"type":"text","text":"https://vemythuat.dau.edu.vn","styles":{"bold":true,"underline":true,"textColor":"red"}}]},{"type":"text","text":";","styles":{"bold":true,"textColor":"red"}},{"type":"text","text":" hoặc gọi điện thoại để biết thêm chi tiết: 19007466.","styles":{}}],"children":[]},{"id":"27b2ff44-5594-4e32-811f-a14120ae64b7","type":"paragraph","props":{"backgroundColor":"rgb(255, 255, 255)","textColor":"rgb(51, 51, 51)","textAlignment":"justify"},"content":[{"type":"text","text":"Ghi chú: ","styles":{"bold":true}},{"type":"text","text":"Trường Đại học Kiến trúc Đà Nẵng chấp nhận kết quả thi môn Vẽ mỹ thuật năm 2026 (hoặc môn Hình họa, Bố cục màu) của thí sinh đã dự thi môn này tại các Trường đại học có tên theo bảng bên dưới./.","styles":{"bold":true,"italic":true,"textColor":"rgb(0, 0, 255)"}}],"children":[]},{"id":"a9b6bf65-936e-4537-b130-fc4bce7e422e","type":"paragraph","props":{"backgroundColor":"rgb(255, 255, 255)","textColor":"rgb(51, 51, 51)","textAlignment":"center"},"content":[{"type":"text","text":"DANH SÁCH CÁC CƠ SỞ GIÁO DỤC ĐẠI HỌC CÓ KẾT QUẢ THI MÔN VẼ MỸ THUẬT","styles":{"bold":true,"textColor":"red"}}],"children":[]},{"id":"4d6aea94-05ae-4c9f-ae33-463871c61866","type":"paragraph","props":{"backgroundColor":"rgb(255, 255, 255)","textColor":"rgb(51, 51, 51)","textAlignment":"center"},"content":[{"type":"text","text":"ĐƯỢC CÔNG NHẬN ĐỂ XÉT TUYỂN VÀO TRƯỜNG ĐẠI HỌC KIẾN TRÚC ĐÀ NẴNG 2026","styles":{"bold":true,"textColor":"red"}}],"children":[]},{"id":"644ec1f7-8825-4747-88ee-0e9a7597130c","type":"image","props":{"textAlignment":"center","backgroundColor":"default","name":"thi ve my thuat 3.png","url":"https://cms-api.ktd.edu.vn/uploads/ADMS/2026-04/9d552151-95ad-4f4c-8c9f-44672ec7dc28.webp","caption":"","showPreview":true},"children":[]},{"id":"38886ef0-a7f8-4a5e-b3a0-3b14b1120523","type":"paragraph","props":{"backgroundColor":"default","textColor":"default","textAlignment":"left"},"content":[],"children":[]}]' WHERE id = 'c786fc68-2695-410b-9883-fc0773d645d1';

-- Cập nhật data mặc định cho các tin tức khác
UPDATE cms_news SET content = '[{"id":"mock-p1","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[{"type":"text","text":"Nội dung bài viết này đang được cập nhật...","styles":{"italic":true,"textColor":"gray"}}],"children":[]}]' WHERE id = '14271d4d-e49d-4e35-bc68-6665dad8db52';
UPDATE cms_news SET content = '"<p style=\"color: gray; font-style: italic;\">Nội dung bài viết này đang được cập nhật...</p>"' WHERE id = 'f3b35e9c-9a84-4e48-abc4-ca673b96f4a1';
UPDATE cms_news SET content = '[{"id":"mock-p1","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[{"type":"text","text":"Nội dung bài viết này đang được cập nhật...","styles":{"italic":true,"textColor":"gray"}}],"children":[]}]' WHERE id = '876cfb8d-8415-4665-949a-4cbb416530df';
UPDATE cms_news SET content = '"<p style=\"color: gray; font-style: italic;\">Nội dung bài viết này đang được cập nhật...</p>"' WHERE id = '31097e55-045a-4c64-a699-1968ea08357b';
UPDATE cms_news SET content = '"<p style=\"color: gray; font-style: italic;\">Nội dung bài viết này đang được cập nhật...</p>"' WHERE id = '5CDAE875-1F74-44C0-9DA0-EE8D4C501846';
UPDATE cms_news SET content = '[{"id":"mock-p1","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[{"type":"text","text":"Nội dung bài viết này đang được cập nhật...","styles":{"italic":true,"textColor":"gray"}}],"children":[]}]' WHERE id = 'EF995DAF-B643-45C8-9049-A16BDEFE4D26';
UPDATE cms_news SET content = '[{"id":"mock-p1","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[{"type":"text","text":"Nội dung bài viết này đang được cập nhật...","styles":{"italic":true,"textColor":"gray"}}],"children":[]}]' WHERE id = 'A94D5FF2-FF91-46F7-8B6D-38FAF4CE87F0';
UPDATE cms_news SET content = '[{"id":"mock-p1","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[{"type":"text","text":"Nội dung bài viết này đang được cập nhật...","styles":{"italic":true,"textColor":"gray"}}],"children":[]}]' WHERE id = '78F5E673-B9DF-4A68-9736-46C9FB0DB3EE';
UPDATE cms_news SET content = '[{"id":"mock-p1","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[{"type":"text","text":"Nội dung bài viết này đang được cập nhật...","styles":{"italic":true,"textColor":"gray"}}],"children":[]}]' WHERE id = '06AE6A59-28F9-432F-8093-86B5F6554112';
