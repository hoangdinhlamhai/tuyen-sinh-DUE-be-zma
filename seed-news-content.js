const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const newsContents = [
  {
    id: "f3b35e9c-9a84-4e48-abc4-ca673b96f4a1",
    contentFormat: "blocknote",
    content: [
      {
        id: "b1", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "1. Các phương thức xét tuyển năm 2026", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "b2", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "Năm 2026, Trường Đại học Kiến trúc Đà Nẵng áp dụng 04 phương thức xét tuyển đại học chính quy, bao gồm:", styles: {} }], children: []
      },
      {
        id: "b3", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Phương thức 1: ", styles: { bold: true, textColor: "rgb(0,0,255)" } },
          { type: "text", text: "Xét tuyển dựa trên kết quả thi tốt nghiệp THPT năm 2026.", styles: {} }
        ], children: []
      },
      {
        id: "b4", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Phương thức 2: ", styles: { bold: true, textColor: "rgb(0,0,255)" } },
          { type: "text", text: "Xét tuyển dựa trên kết quả học bạ THPT (Xét học bạ 5 học kỳ hoặc 6 học kỳ).", styles: {} }
        ], children: []
      },
      {
        id: "b5", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Phương thức 3: ", styles: { bold: true, textColor: "rgb(0,0,255)" } },
          { type: "text", text: "Xét tuyển kết hợp kết quả thi tốt nghiệp THPT và kết quả thi Đánh giá năng lực mỹ thuật (dành cho các ngành: Kiến trúc, Thiết kế nội thất, Thiết kế đồ họa).", styles: {} }
        ], children: []
      },
      {
        id: "b6", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Phương thức 4: ", styles: { bold: true, textColor: "rgb(0,0,255)" } },
          { type: "text", text: "Xét tuyển thẳng theo quy chế của Bộ GD&ĐT.", styles: {} }
        ], children: []
      },
      {
        id: "b7", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "2. Chỉ tiêu tuyển sinh", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "b8", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [
          { type: "text", text: "Tổng chỉ tiêu tuyển sinh năm 2026: ", styles: {} },
          { type: "text", text: "2.500 chỉ tiêu", styles: { bold: true, textColor: "red" } },
          { type: "text", text: " cho 16 ngành đào tạo đa lĩnh vực.", styles: {} }
        ], children: []
      },
      {
        id: "b9", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "3. Các ngành đào tạo", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "b10", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Kiến trúc", styles: { bold: true } }], children: []
      },
      {
        id: "b11", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Thiết kế nội thất", styles: { bold: true } }], children: []
      },
      {
        id: "b12", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Thiết kế đồ họa", styles: { bold: true } }], children: []
      },
      {
        id: "b13", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Kỹ thuật xây dựng", styles: { bold: true } }], children: []
      },
      {
        id: "b14", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Kỹ thuật công trình giao thông", styles: { bold: true } }], children: []
      },
      {
        id: "b15", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Kỹ thuật xây dựng công trình thủy", styles: { bold: true } }], children: []
      },
      {
        id: "b16", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Quy hoạch vùng và đô thị, Quản lý xây dựng, Công nghệ kỹ thuật vật liệu xây dựng, Kỹ thuật cấp thoát nước, Kỹ thuật hạ tầng đô thị, Kinh tế xây dựng, Kỹ thuật môi trường, Công nghệ thông tin, Logistics và Quản lý chuỗi cung ứng, Luật kinh tế.", styles: {} }], children: []
      },
      {
        id: "b17", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "4. Mốc thời gian quan trọng", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "b18", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Nhận hồ sơ xét học bạ: ", styles: {} },
          { type: "text", text: "Từ ngày 01/03/2026 đến 30/06/2026", styles: { bold: true, textColor: "red" } }
        ], children: []
      },
      {
        id: "b19", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Đăng ký nguyện vọng trên hệ thống của Bộ GD&ĐT: ", styles: {} },
          { type: "text", text: "Theo lịch của Bộ GD&ĐT", styles: { bold: true } }
        ], children: []
      },
      {
        id: "b20", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [
          { type: "text", text: "Chi tiết xem tại: ", styles: {} },
          { type: "link", href: "http://tuyensinh.dau.edu.vn", content: [{ type: "text", text: "tuyensinh.dau.edu.vn", styles: { bold: true, underline: true, textColor: "blue" } }] },
          { type: "text", text: " hoặc gọi hotline: ", styles: {} },
          { type: "text", text: "19007466", styles: { bold: true, textColor: "red" } }
        ], children: []
      }
    ]
  },
  {
    id: "14271d4d-e49d-4e35-bc68-6665dad8db52",
    contentFormat: "blocknote",
    content: [
      {
        id: "c1", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "2K8 ơi, bạn đã biết ngành mình thích có thể xét tuyển bằng tổ hợp nào chưa? Đừng để đến phút cuối mới \"ngơ ngác\" vì thiếu mất một lựa chọn phù hợp nha!", styles: {} }], children: []
      },
      {
        id: "c2", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "1. Tổ hợp xét tuyển theo nhóm ngành", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "c3", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "Nhóm ngành Kiến trúc – Mỹ thuật:", styles: { bold: true, textColor: "rgb(0,0,255)" } }], children: []
      },
      {
        id: "c4", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Kiến trúc: ", styles: { bold: true } },
          { type: "text", text: "V00 (Toán, Lý, Vẽ MT), V01 (Toán, Văn, Vẽ MT), H00 (Toán, Vẽ MT, ĐGNL MT)", styles: {} }
        ], children: []
      },
      {
        id: "c5", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Thiết kế nội thất: ", styles: { bold: true } },
          { type: "text", text: "V00, V01, H00, H01 (Văn, Vẽ MT, ĐGNL MT)", styles: {} }
        ], children: []
      },
      {
        id: "c6", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Thiết kế đồ họa: ", styles: { bold: true } },
          { type: "text", text: "V00, V01, H00, H01", styles: {} }
        ], children: []
      },
      {
        id: "c7", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "Nhóm ngành Kỹ thuật:", styles: { bold: true, textColor: "rgb(0,0,255)" } }], children: []
      },
      {
        id: "c8", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Kỹ thuật xây dựng, Kỹ thuật công trình giao thông, Kỹ thuật XD công trình thủy: ", styles: { bold: true } },
          { type: "text", text: "A00 (Toán, Lý, Hóa), A01 (Toán, Lý, Anh), D01 (Toán, Văn, Anh)", styles: {} }
        ], children: []
      },
      {
        id: "c9", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Quy hoạch vùng và đô thị: ", styles: { bold: true } },
          { type: "text", text: "A00, A01, D01, V00", styles: {} }
        ], children: []
      },
      {
        id: "c10", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "Nhóm ngành Kinh tế – Quản lý – Luật – CNTT:", styles: { bold: true, textColor: "rgb(0,0,255)" } }], children: []
      },
      {
        id: "c11", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Kinh tế xây dựng, Quản lý xây dựng, Luật kinh tế, Logistics: ", styles: { bold: true } },
          { type: "text", text: "A00, A01, D01, C00 (Văn, Sử, Địa)", styles: {} }
        ], children: []
      },
      {
        id: "c12", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Công nghệ thông tin: ", styles: { bold: true } },
          { type: "text", text: "A00, A01, D01, D07 (Toán, Hóa, Anh)", styles: {} }
        ], children: []
      },
      {
        id: "c13", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "2. Lưu ý quan trọng", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "c14", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Mỗi thí sinh có thể đăng ký nhiều nguyện vọng với các tổ hợp xét tuyển khác nhau.", styles: {} }], children: []
      },
      {
        id: "c15", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Các ngành Kiến trúc, Thiết kế nội thất, Thiết kế đồ họa yêu cầu thí sinh có kết quả thi Đánh giá năng lực mỹ thuật nếu xét theo tổ hợp H00, H01.", styles: { bold: true } }], children: []
      },
      {
        id: "c16", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [
          { type: "text", text: "Xem thêm chi tiết tại: ", styles: {} },
          { type: "link", href: "http://tuyensinh.dau.edu.vn", content: [{ type: "text", text: "tuyensinh.dau.edu.vn", styles: { bold: true, underline: true, textColor: "blue" } }] }
        ], children: []
      }
    ]
  },
  {
    id: "5cdae875-1f74-44c0-9da0-ee8d4c501846",
    contentFormat: "blocknote",
    content: [
      {
        id: "d1", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "Ngành Kiến trúc tại Trường Đại học Kiến trúc Đà Nẵng là một trong những ngành đào tạo trọng điểm, được xây dựng và phát triển hơn 45 năm với chất lượng đào tạo hàng đầu khu vực miền Trung – Tây Nguyên.", styles: {} }], children: []
      },
      {
        id: "d2", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "1. Ngành Kiến trúc học gì?", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "d3", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "Sinh viên ngành Kiến trúc sẽ được đào tạo toàn diện từ kiến thức nền tảng đến chuyên sâu, bao gồm:", styles: {} }], children: []
      },
      {
        id: "d4", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Kiến thức cơ sở: ", styles: { bold: true, textColor: "rgb(0,0,255)" } },
          { type: "text", text: "Hình họa – Vẽ kỹ thuật, Mỹ thuật cơ bản, Lịch sử kiến trúc Việt Nam và thế giới, Vật liệu xây dựng, Cơ học công trình.", styles: {} }
        ], children: []
      },
      {
        id: "d5", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Kiến thức chuyên ngành: ", styles: { bold: true, textColor: "rgb(0,0,255)" } },
          { type: "text", text: "Thiết kế kiến trúc nhà ở, công trình công cộng, công trình công nghiệp; Quy hoạch đô thị; Thiết kế cảnh quan; Kiến trúc bền vững và xanh.", styles: {} }
        ], children: []
      },
      {
        id: "d6", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Kỹ năng thực hành: ", styles: { bold: true, textColor: "rgb(0,0,255)" } },
          { type: "text", text: "Sử dụng phần mềm AutoCAD, Revit, SketchUp, 3Ds Max, Lumion; Làm mô hình kiến trúc; Đi thực tế công trình.", styles: {} }
        ], children: []
      },
      {
        id: "d7", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "2. Cơ hội nghề nghiệp", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "d8", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "Sinh viên tốt nghiệp ngành Kiến trúc có thể làm việc ở nhiều vị trí và lĩnh vực:", styles: {} }], children: []
      },
      {
        id: "d9", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Kiến trúc sư thiết kế tại các công ty, văn phòng kiến trúc", styles: {} }], children: []
      },
      {
        id: "d10", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Chuyên viên tư vấn thiết kế, giám sát công trình", styles: {} }], children: []
      },
      {
        id: "d11", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Giảng viên, nghiên cứu viên tại các trường đại học, viện nghiên cứu", styles: {} }], children: []
      },
      {
        id: "d12", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Chuyên viên quy hoạch tại các cơ quan quản lý nhà nước", styles: {} }], children: []
      },
      {
        id: "d13", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "3. Vì sao chọn ngành Kiến trúc tại DAU?", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "d14", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Trường có truyền thống đào tạo Kiến trúc lâu đời nhất khu vực miền Trung – Tây Nguyên.", styles: {} }], children: []
      },
      {
        id: "d15", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Đội ngũ giảng viên giàu kinh nghiệm, nhiều thầy cô là Kiến trúc sư nổi tiếng.", styles: {} }], children: []
      },
      {
        id: "d16", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Cơ sở vật chất hiện đại: xưởng mô hình, phòng máy tính chuyên dụng, thư viện kiến trúc.", styles: {} }], children: []
      },
      {
        id: "d17", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Tỷ lệ có việc làm sau 6 tháng tốt nghiệp: ", styles: {} },
          { type: "text", text: "97%", styles: { bold: true, textColor: "red" } }
        ], children: []
      },
      {
        id: "d18", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [
          { type: "text", text: "Tìm hiểu thêm tại: ", styles: {} },
          { type: "link", href: "http://tuyensinh.dau.edu.vn", content: [{ type: "text", text: "tuyensinh.dau.edu.vn", styles: { bold: true, underline: true, textColor: "blue" } }] }
        ], children: []
      }
    ]
  },
  {
    id: "31097e55-045a-4c64-a699-1968ea08357b",
    contentFormat: "blocknote",
    content: [
      {
        id: "e1", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "Nhằm giảm bớt gánh nặng tài chính cho thí sinh và gia đình, đồng thời khích lệ tinh thần học tập, Trường Đại học Kiến trúc Đà Nẵng triển khai nhiều chính sách học bổng hấp dẫn dành cho tân sinh viên khóa tuyển sinh năm 2026.", styles: {} }], children: []
      },
      {
        id: "e2", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "1. Học bổng tuyển thẳng và ưu tiên xét tuyển", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "e3", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "100% học phí năm đầu: ", styles: { bold: true, textColor: "rgb(0,0,255)" } },
          { type: "text", text: "Dành cho thí sinh đạt giải Nhất, Nhì, Ba trong các kỳ thi học sinh giỏi cấp tỉnh/thành phố trở lên.", styles: {} }
        ], children: []
      },
      {
        id: "e4", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "50% học phí năm đầu: ", styles: { bold: true, textColor: "rgb(0,0,255)" } },
          { type: "text", text: "Dành cho thí sinh đạt giải Khuyến khích trong các kỳ thi học sinh giỏi cấp tỉnh/thành phố.", styles: {} }
        ], children: []
      },
      {
        id: "e5", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "2. Học bổng dựa trên kết quả thi tốt nghiệp THPT", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "e6", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "100% học phí năm đầu: ", styles: { bold: true, textColor: "rgb(0,0,255)" } },
          { type: "text", text: "Tổng điểm 3 môn tổ hợp xét tuyển từ 27 điểm trở lên (chưa tính điểm ưu tiên).", styles: {} }
        ], children: []
      },
      {
        id: "e7", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "50% học phí năm đầu: ", styles: { bold: true, textColor: "rgb(0,0,255)" } },
          { type: "text", text: "Tổng điểm 3 môn tổ hợp xét tuyển từ 24 đến dưới 27 điểm (chưa tính điểm ưu tiên).", styles: {} }
        ], children: []
      },
      {
        id: "e8", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "25% học phí năm đầu: ", styles: { bold: true, textColor: "rgb(0,0,255)" } },
          { type: "text", text: "Tổng điểm 3 môn tổ hợp xét tuyển từ 22 đến dưới 24 điểm (chưa tính điểm ưu tiên).", styles: {} }
        ], children: []
      },
      {
        id: "e9", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "3. Học bổng khuyến khích học tập", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "e10", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "Từ năm học thứ 2 trở đi, sinh viên có kết quả học tập xuất sắc sẽ được xét cấp học bổng khuyến khích mỗi học kỳ với mức từ 25% đến 100% học phí.", styles: {} }], children: []
      },
      {
        id: "e11", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "4. Chính sách hỗ trợ khác", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "e12", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Miễn, giảm học phí theo chính sách của Nhà nước (con thương binh, liệt sĩ, hộ nghèo, cận nghèo, dân tộc thiểu số...)", styles: {} }], children: []
      },
      {
        id: "e13", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Hỗ trợ vay vốn sinh viên qua Ngân hàng Chính sách Xã hội.", styles: {} }], children: []
      },
      {
        id: "e14", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Ký túc xá với chi phí hợp lý, ưu tiên cho sinh viên vùng xa.", styles: {} }], children: []
      },
      {
        id: "e15", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [
          { type: "text", text: "Liên hệ tư vấn: Hotline ", styles: {} },
          { type: "text", text: "19007466", styles: { bold: true, textColor: "red" } },
          { type: "text", text: " | Website: ", styles: {} },
          { type: "link", href: "http://tuyensinh.dau.edu.vn", content: [{ type: "text", text: "tuyensinh.dau.edu.vn", styles: { bold: true, underline: true, textColor: "blue" } }] }
        ], children: []
      }
    ]
  },
  {
    id: "876cfb8d-8415-4665-949a-4cbb416530df",
    contentFormat: "blocknote",
    content: [
      {
        id: "f1", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "Chọn đúng ngành học chính là bước khởi đầu quan trọng để mỗi bạn trẻ phát huy thế mạnh và theo đuổi đam mê của mình. Trường Đại học Kiến trúc Đà Nẵng hiện đào tạo 16 ngành đa dạng, phù hợp với nhiều sở thích và năng lực khác nhau.", styles: {} }], children: []
      },
      {
        id: "f2", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "1. Nhóm ngành Kiến trúc – Thiết kế", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "f3", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Kiến trúc: ", styles: { bold: true } },
          { type: "text", text: "Đào tạo kiến trúc sư có khả năng thiết kế công trình, quy hoạch đô thị, kiến trúc cảnh quan.", styles: {} }
        ], children: []
      },
      {
        id: "f4", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Thiết kế nội thất: ", styles: { bold: true } },
          { type: "text", text: "Chuyên sâu về thiết kế không gian nội thất nhà ở, thương mại, văn phòng, khách sạn.", styles: {} }
        ], children: []
      },
      {
        id: "f5", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Thiết kế đồ họa: ", styles: { bold: true } },
          { type: "text", text: "Sáng tạo thương hiệu, đồ họa truyền thông, quảng cáo, UI/UX, motion graphic.", styles: {} }
        ], children: []
      },
      {
        id: "f6", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "2. Nhóm ngành Kỹ thuật – Xây dựng", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "f7", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Kỹ thuật xây dựng: ", styles: { bold: true } },
          { type: "text", text: "Thiết kế kết cấu, thi công, giám sát các công trình dân dụng và công nghiệp.", styles: {} }
        ], children: []
      },
      {
        id: "f8", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Kỹ thuật công trình giao thông: ", styles: { bold: true } },
          { type: "text", text: "Thiết kế và xây dựng đường, cầu, hầm, công trình giao thông.", styles: {} }
        ], children: []
      },
      {
        id: "f9", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Kỹ thuật hạ tầng đô thị, Kỹ thuật cấp thoát nước, Kỹ thuật môi trường: ", styles: { bold: true } },
          { type: "text", text: "Phát triển hệ thống hạ tầng kỹ thuật đô thị hiện đại và bền vững.", styles: {} }
        ], children: []
      },
      {
        id: "f10", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "3. Nhóm ngành Kinh tế – Quản lý – Luật – CNTT", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "f11", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Kinh tế xây dựng, Quản lý xây dựng: ", styles: { bold: true } },
          { type: "text", text: "Quản lý dự án, đấu thầu, định giá xây dựng.", styles: {} }
        ], children: []
      },
      {
        id: "f12", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Luật kinh tế: ", styles: { bold: true } },
          { type: "text", text: "Chuyên sâu pháp luật kinh doanh, đầu tư, bất động sản.", styles: {} }
        ], children: []
      },
      {
        id: "f13", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Logistics và Quản lý chuỗi cung ứng: ", styles: { bold: true } },
          { type: "text", text: "Ngành \"hot\" với nhu cầu nhân lực lớn trong bối cảnh hội nhập.", styles: {} }
        ], children: []
      },
      {
        id: "f14", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Công nghệ thông tin: ", styles: { bold: true } },
          { type: "text", text: "Phát triển phần mềm, hệ thống thông tin, trí tuệ nhân tạo ứng dụng trong xây dựng.", styles: {} }
        ], children: []
      },
      {
        id: "f15", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [
          { type: "text", text: "Xem chi tiết từng ngành tại: ", styles: {} },
          { type: "link", href: "http://tuyensinh.dau.edu.vn", content: [{ type: "text", text: "tuyensinh.dau.edu.vn", styles: { bold: true, underline: true, textColor: "blue" } }] }
        ], children: []
      }
    ]
  },
  {
    id: "06ae6a59-28f9-432f-8093-86b5f6554112",
    contentFormat: "blocknote",
    content: [
      {
        id: "g1", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "Bạn chưa kịp đăng ký nguyện vọng trên hệ thống của Bộ GD&ĐT? Đừng lo – Trường Đại học Kiến trúc Đà Nẵng vẫn còn nhiều cơ hội xét tuyển dành cho bạn!", styles: {} }], children: []
      },
      {
        id: "g2", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "1. Xét tuyển bổ sung", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "g3", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "Sau mỗi đợt xét tuyển chính, Trường sẽ mở thêm các đợt xét tuyển bổ sung cho các ngành còn chỉ tiêu. Thí sinh hoàn toàn có thể nộp hồ sơ xét tuyển bổ sung mà không cần phải đăng ký nguyện vọng trước đó trên hệ thống.", styles: {} }], children: []
      },
      {
        id: "g4", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "2. Điều kiện xét tuyển bổ sung", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "g5", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Thí sinh đã tốt nghiệp THPT hoặc tương đương.", styles: {} }], children: []
      },
      {
        id: "g6", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Có kết quả thi tốt nghiệp THPT hoặc kết quả học bạ đáp ứng ngưỡng đầu vào.", styles: {} }], children: []
      },
      {
        id: "g7", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Đối với các ngành Kiến trúc, Thiết kế nội thất, Thiết kế đồ họa: cần có kết quả thi Đánh giá năng lực mỹ thuật (nếu xét theo tổ hợp có môn Vẽ).", styles: {} }], children: []
      },
      {
        id: "g8", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "3. Cách thức đăng ký", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "g9", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Đăng ký trực tuyến tại: ", styles: {} },
          { type: "link", href: "http://tuyensinh.dau.edu.vn", content: [{ type: "text", text: "tuyensinh.dau.edu.vn", styles: { bold: true, underline: true, textColor: "blue" } }] }
        ], children: []
      },
      {
        id: "g10", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Nộp hồ sơ trực tiếp tại Phòng Đào tạo, Trường Đại học Kiến trúc Đà Nẵng, 566 Núi Thành, P.Hòa Cường, TP. Đà Nẵng.", styles: {} }], children: []
      },
      {
        id: "g11", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [
          { type: "text", text: "Mọi thắc mắc vui lòng liên hệ hotline: ", styles: {} },
          { type: "text", text: "19007466", styles: { bold: true, textColor: "red" } }
        ], children: []
      }
    ]
  },
  {
    id: "78f5e673-b9df-4a68-9736-46c9fb0db3ee",
    contentFormat: "blocknote",
    content: [
      {
        id: "h1", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "Chào mừng các bạn Tân sinh viên khóa 2024 đến với Trường Đại học Kiến trúc Đà Nẵng! Để giúp các bạn và phụ huynh nắm rõ kế hoạch học tập cũng như các thông tin cần thiết, Nhà trường gửi đến tài liệu hướng dẫn chi tiết sau đây.", styles: {} }], children: []
      },
      {
        id: "h2", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "1. Kế hoạch học tập học kỳ I", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "h3", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Tuần sinh hoạt công dân: ", styles: { bold: true } },
          { type: "text", text: "Tuần đầu tiên sau khai giảng, tân sinh viên sẽ tham gia tuần sinh hoạt công dân, tìm hiểu nội quy, quy chế, môi trường học tập.", styles: {} }
        ], children: []
      },
      {
        id: "h4", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Đăng ký học phần: ", styles: { bold: true } },
          { type: "text", text: "Sinh viên đăng ký học phần trực tuyến qua hệ thống quản lý đào tạo của Trường.", styles: {} }
        ], children: []
      },
      {
        id: "h5", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Lịch học: ", styles: { bold: true } },
          { type: "text", text: "Bắt đầu từ tuần thứ 2, thời gian học sáng từ 7h00 – 11h30, chiều từ 13h00 – 17h30.", styles: {} }
        ], children: []
      },
      {
        id: "h6", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "2. Tài liệu cần chuẩn bị", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "h7", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Giấy báo nhập học (bản gốc)", styles: {} }], children: []
      },
      {
        id: "h8", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Bằng tốt nghiệp THPT hoặc giấy chứng nhận tốt nghiệp tạm thời (bản sao công chứng)", styles: {} }], children: []
      },
      {
        id: "h9", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Học bạ THPT (bản sao công chứng)", styles: {} }], children: []
      },
      {
        id: "h10", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Ảnh 3×4 (6 tấm, chụp trong vòng 6 tháng gần nhất)", styles: {} }], children: []
      },
      {
        id: "h11", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "CMND/CCCD (bản sao công chứng)", styles: {} }], children: []
      },
      {
        id: "h12", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "3. Thông tin cho phụ huynh", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "h13", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "Phụ huynh có thể theo dõi kết quả học tập của con em thông qua hệ thống quản lý đào tạo trực tuyến. Mọi thắc mắc xin liên hệ Phòng Công tác sinh viên qua số điện thoại: 0236 3512 345.", styles: {} }], children: []
      }
    ]
  },
  {
    id: "ef995daf-b643-45c8-9049-a16bdefe4d26",
    contentFormat: "blocknote",
    content: [
      {
        id: "i1", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "Trường Đại học Kiến trúc Đà Nẵng thông báo hướng dẫn chi tiết các bước nhập học dành cho tân sinh viên khóa tuyển sinh năm 2025. Thí sinh trúng tuyển có thể lựa chọn nhập học trực tuyến hoặc trực tiếp tại Trường.", styles: {} }], children: []
      },
      {
        id: "i2", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "1. Nhập học trực tuyến (Online)", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "i3", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "Các bước thực hiện:", styles: { bold: true } }], children: []
      },
      {
        id: "i4", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Bước 1: ", styles: { bold: true, textColor: "rgb(0,0,255)" } },
          { type: "text", text: "Truy cập hệ thống nhập học trực tuyến tại ", styles: {} },
          { type: "link", href: "http://tuyensinh.dau.edu.vn", content: [{ type: "text", text: "tuyensinh.dau.edu.vn", styles: { bold: true, underline: true, textColor: "blue" } }] }
        ], children: []
      },
      {
        id: "i5", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Bước 2: ", styles: { bold: true, textColor: "rgb(0,0,255)" } },
          { type: "text", text: "Đăng nhập bằng số CMND/CCCD và mã thí sinh.", styles: {} }
        ], children: []
      },
      {
        id: "i6", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Bước 3: ", styles: { bold: true, textColor: "rgb(0,0,255)" } },
          { type: "text", text: "Xác nhận thông tin cá nhân, ngành trúng tuyển và tải lên hồ sơ nhập học (scan bản gốc).", styles: {} }
        ], children: []
      },
      {
        id: "i7", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Bước 4: ", styles: { bold: true, textColor: "rgb(0,0,255)" } },
          { type: "text", text: "Đóng học phí trực tuyến qua cổng thanh toán.", styles: {} }
        ], children: []
      },
      {
        id: "i8", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Bước 5: ", styles: { bold: true, textColor: "rgb(0,0,255)" } },
          { type: "text", text: "Nhận giấy xác nhận nhập học qua email.", styles: {} }
        ], children: []
      },
      {
        id: "i9", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "2. Nhập học trực tiếp", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "i10", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [
          { type: "text", text: "Thí sinh mang đầy đủ hồ sơ đến ", styles: {} },
          { type: "text", text: "Phòng Đào tạo, Trường Đại học Kiến trúc Đà Nẵng, 566 Núi Thành, P.Hòa Cường, TP. Đà Nẵng", styles: { bold: true } },
          { type: "text", text: " trong giờ hành chính (7h30 – 11h30 và 13h30 – 17h00, từ thứ 2 đến thứ 6).", styles: {} }
        ], children: []
      },
      {
        id: "i11", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "3. Hồ sơ nhập học gồm", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "i12", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Giấy báo trúng tuyển (bản gốc)", styles: {} }], children: []
      },
      {
        id: "i13", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Bằng tốt nghiệp THPT hoặc giấy chứng nhận tốt nghiệp tạm thời (bản sao công chứng)", styles: {} }], children: []
      },
      {
        id: "i14", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Học bạ THPT (bản sao công chứng)", styles: {} }], children: []
      },
      {
        id: "i15", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "CMND/CCCD (bản sao công chứng) và 6 ảnh 3×4", styles: {} }], children: []
      },
      {
        id: "i16", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [
          { type: "text", text: "Liên hệ hỗ trợ: ", styles: {} },
          { type: "text", text: "19007466", styles: { bold: true, textColor: "red" } }
        ], children: []
      }
    ]
  },
  {
    id: "a94d5ff2-ff91-46f7-8b6d-38faf4ce87f0",
    contentFormat: "blocknote",
    content: [
      {
        id: "j1", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "Chúc mừng bạn đã trở thành Tân sinh viên Trường Đại học Kiến trúc Đà Nẵng! Nhằm tạo điều kiện thuận lợi cho thí sinh và phụ huynh trong quá trình làm thủ tục nhập học, Nhà trường thông báo lịch trình và hướng dẫn chi tiết sau đây.", styles: {} }], children: []
      },
      {
        id: "j2", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "1. Lịch nhập học dự kiến", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "j3", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Nhập học trực tuyến: ", styles: { bold: true, textColor: "rgb(0,0,255)" } },
          { type: "text", text: "Từ ngày 15/08 đến 25/08/2026", styles: { bold: true } }
        ], children: []
      },
      {
        id: "j4", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Nhập học trực tiếp: ", styles: { bold: true, textColor: "rgb(0,0,255)" } },
          { type: "text", text: "Từ ngày 26/08 đến 30/08/2026", styles: { bold: true } }
        ], children: []
      },
      {
        id: "j5", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Khai giảng năm học mới: ", styles: { bold: true, textColor: "rgb(0,0,255)" } },
          { type: "text", text: "Dự kiến ngày 05/09/2026", styles: { bold: true, textColor: "red" } }
        ], children: []
      },
      {
        id: "j6", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "2. Checklist chuẩn bị nhập học", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "j7", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Hoàn thành đăng ký nhập học trực tuyến trên hệ thống.", styles: {} }], children: []
      },
      {
        id: "j8", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Chuẩn bị đầy đủ hồ sơ nhập học (giấy báo trúng tuyển, bằng TN THPT, học bạ, CCCD, ảnh 3×4).", styles: {} }], children: []
      },
      {
        id: "j9", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Đóng học phí đợt 1 (có thể đóng trực tuyến hoặc tại Trường).", styles: {} }], children: []
      },
      {
        id: "j10", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Đăng ký ký túc xá (nếu có nhu cầu) – ưu tiên cho sinh viên vùng xa.", styles: {} }], children: []
      },
      {
        id: "j11", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [{ type: "text", text: "Tham gia Tuần sinh hoạt công dân đầu khóa (bắt buộc).", styles: { bold: true } }], children: []
      },
      {
        id: "j12", type: "paragraph", props: { backgroundColor: "rgb(255,255,255)", textColor: "rgb(51,51,51)", textAlignment: "justify" },
        content: [{ type: "text", text: "3. Thông tin liên hệ", styles: { bold: true, textColor: "red" } }], children: []
      },
      {
        id: "j13", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Phòng Đào tạo: ", styles: { bold: true } },
          { type: "text", text: "566 Núi Thành, P.Hòa Cường, TP. Đà Nẵng", styles: {} }
        ], children: []
      },
      {
        id: "j14", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Hotline: ", styles: { bold: true } },
          { type: "text", text: "19007466", styles: { bold: true, textColor: "red" } }
        ], children: []
      },
      {
        id: "j15", type: "bulletListItem", props: { backgroundColor: "default", textColor: "default", textAlignment: "justify" },
        content: [
          { type: "text", text: "Website: ", styles: { bold: true } },
          { type: "link", href: "http://tuyensinh.dau.edu.vn", content: [{ type: "text", text: "tuyensinh.dau.edu.vn", styles: { bold: true, underline: true, textColor: "blue" } }] }
        ], children: []
      }
    ]
  }
];

async function main() {
  let updated = 0;
  for (const news of newsContents) {
    try {
      await prisma.cmsNews.update({
        where: { id: news.id },
        data: { content: news.content, contentFormat: news.contentFormat }
      });
      updated++;
      console.log(`OK: ${news.id} - ${news.content.length} blocks`);
    } catch (e) {
      console.error(`FAIL: ${news.id} - ${e.message}`);
    }
  }
  console.log(`\nDone: ${updated}/${newsContents.length} updated`);
  await prisma.$disconnect();
}

main();
