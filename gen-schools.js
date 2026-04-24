const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Danh sách trường THPT tiêu biểu cho từng tỉnh (có dấu tiếng Việt)
// Key = tên tỉnh (dùng để match), value = danh sách trường
const SCHOOL_MAP = {
  'Hà Nội': ['THPT Chu Văn An', 'THPT Kim Liên', 'THPT Việt Đức', 'THPT Trần Hưng Đạo', 'THPT Phan Đình Phùng', 'THPT Hà Nội - Amsterdam', 'THPT Nguyễn Trãi', 'THPT Thăng Long', 'THPT Mạc Đĩnh Chi', 'THPT Nguyễn Huệ'],
  'Hồ Chí Minh': ['THPT Lê Hồng Phong', 'THPT Nguyễn Thượng Hiền', 'THPT Trần Khai Nguyên', 'THPT Nguyễn Thị Minh Khai', 'THPT Gia Định', 'THPT Bùi Thị Xuân', 'THPT Thủ Đức', 'THPT Tân Bình', 'THPT Phú Nhuận', 'THPT Võ Thị Sáu'],
  'Đà Nẵng': ['THPT Phan Châu Trinh', 'THPT Trần Phú', 'THPT Hoàng Hoa Thám', 'THPT Chuyên Lê Quý Đôn', 'THPT Nguyễn Trãi', 'THPT Thái Phiên', 'THPT Tôn Thất Tùng', 'THPT Quang Trung', 'THPT Sơn Trà', 'THPT Ngũ Hành Sơn'],
  'Hải Phòng': ['THPT Chuyên Trần Phú', 'THPT Ngô Quyền', 'THPT Thái Phiên', 'THPT Lê Quý Đôn', 'THPT Nguyễn Bỉnh Khiêm', 'THPT Vĩnh Bảo', 'THPT An Dương', 'THPT Tiên Lãng', 'THPT Đồ Sơn', 'THPT Kiến Thuỵ'],
  'Cần Thơ': ['THPT Chuyên Lý Tự Trọng', 'THPT Nguyễn Việt Hồng', 'THPT Châu Văn Liêm', 'THPT Phan Ngọc Hiển', 'THPT Bình Thuỷ', 'THPT Thới Lai', 'THPT Phong Điền', 'THPT Vĩnh Thạnh'],
  'Huế': ['THPT Quốc Học Huế', 'THPT Hai Bà Trưng', 'THPT Nguyễn Huệ', 'THPT Gia Hội', 'THPT Bùi Thị Xuân', 'THPT Phan Đăng Lưu', 'THPT Phú Bài', 'THPT Thuận An'],
  'An Giang': ['THPT Chuyên Thoại Ngọc Hầu', 'THPT Long Xuyên', 'THPT Châu Đốc', 'THPT Tân Châu', 'THPT Chợ Mới', 'THPT Phú Tân'],
  'Bắc Ninh': ['THPT Chuyên Bắc Ninh', 'THPT Hàn Thuyên', 'THPT Lý Thái Tổ', 'THPT Quế Võ 1', 'THPT Lương Tài', 'THPT Gia Bình'],
  'Cà Mau': ['THPT Chuyên Phan Ngọc Hiển', 'THPT Cà Mau', 'THPT Thới Bình', 'THPT Năm Căn', 'THPT U Minh', 'THPT Đầm Dơi'],
  'Cao Bằng': ['THPT Chuyên Cao Bằng', 'THPT Bế Văn Đàn', 'THPT Trùng Khánh', 'THPT Hà Quảng', 'THPT Thạch An', 'THPT Nguyên Bình'],
  'Đắk Lắk': ['THPT Chuyên Nguyễn Du', 'THPT Buôn Ma Thuột', 'THPT Lê Quý Đôn', 'THPT Krông Buk', 'THPT Ea H\'Leo', 'THPT Cư Mgar'],
  'Điện Biên': ['THPT Chuyên Lê Quý Đôn', 'THPT Thành phố Điện Biên Phủ', 'THPT Mường Lay', 'THPT Tuần Giáo', 'THPT Mường Nhé', 'THPT Điện Biên Đông'],
  'Đồng Nai': ['THPT Chuyên Lương Thế Vinh', 'THPT Nguyễn Hữu Cảnh', 'THPT Trấn Biên', 'THPT Long Khánh', 'THPT Trảng Bom', 'THPT Xuân Lộc', 'THPT Thống Nhất', 'THPT Vĩnh Cửu'],
  'Đồng Tháp': ['THPT Chuyên Nguyễn Quang Diêu', 'THPT Cao Lãnh', 'THPT Sa Đéc', 'THPT Hồng Ngự', 'THPT Thanh Bình', 'THPT Tháp Mười'],
  'Gia Lai': ['THPT Chuyên Hùng Vương', 'THPT Pleiku', 'THPT An Khê', 'THPT Ayun Pa', 'THPT Chư Sê', 'THPT Đức Cơ'],
  'Hà Tĩnh': ['THPT Chuyên Hà Tĩnh', 'THPT Phan Đình Phùng', 'THPT Hồng Lĩnh', 'THPT Nguyễn Du', 'THPT Cẩm Xuyên', 'THPT Kỳ Anh', 'THPT Đức Thọ', 'THPT Can Lộc'],
  'Hưng Yên': ['THPT Chuyên Hưng Yên', 'THPT Phù Cừ', 'THPT Ân Thi', 'THPT Khoái Châu', 'THPT Mỹ Hào', 'THPT Văn Lâm'],
  'Khánh Hòa': ['THPT Chuyên Lê Quý Đôn', 'THPT Phan Bội Châu', 'THPT Nguyễn Văn Trỗi', 'THPT Nha Trang', 'THPT Cam Ranh', 'THPT Ninh Hoà', 'THPT Diên Khánh', 'THPT Vạn Ninh'],
  'Lai Châu': ['THPT Chuyên Lê Quý Đôn', 'THPT Thành phố Lai Châu', 'THPT Mường Tè', 'THPT Than Uyên', 'THPT Phong Thổ', 'THPT Sìn Hồ'],
  'Lâm Đồng': ['THPT Chuyên Bùi Thị Xuân', 'THPT Thành phố Đà Lạt', 'THPT Bảo Lộc', 'THPT Đức Trọng', 'THPT Di Linh', 'THPT Lâm Hà'],
  'Lạng Sơn': ['THPT Chuyên Chu Văn An', 'THPT Việt Bắc', 'THPT Cao Lộc', 'THPT Chi Lăng', 'THPT Bắc Sơn', 'THPT Hữu Lũng'],
  'Lào Cai': ['THPT Chuyên Lào Cai', 'THPT Số 1 Lào Cai', 'THPT Sa Pa', 'THPT Bảo Thắng', 'THPT Bát Xát', 'THPT Bảo Yên'],
  'Nghệ An': ['THPT Chuyên Phan Bội Châu', 'THPT Huỳnh Thúc Kháng', 'THPT Lê Viết Thuật', 'THPT Quỳnh Lưu 1', 'THPT Diễn Châu 2', 'THPT Yên Thành', 'THPT Đô Lương 1', 'THPT Anh Sơn', 'THPT Nam Đàn', 'THPT Hoàng Mai'],
  'Ninh Bình': ['THPT Chuyên Lương Văn Tuỵ', 'THPT Đinh Tiên Hoàng', 'THPT Hoa Lư A', 'THPT Nho Quan A', 'THPT Yên Khánh A', 'THPT Kim Sơn A'],
  'Phú Thọ': ['THPT Chuyên Hùng Vương', 'THPT Việt Trì', 'THPT Phù Ninh', 'THPT Thanh Ba', 'THPT Lâm Thao', 'THPT Yên Lập'],
  'Quảng Ngãi': ['THPT Chuyên Lê Khiết', 'THPT Trần Quốc Tuấn', 'THPT Lê Trung Đình', 'THPT Bình Sơn', 'THPT Sơn Tịnh', 'THPT Đức Phổ'],
  'Quảng Ninh': ['THPT Chuyên Hạ Long', 'THPT Hòn Gai', 'THPT Bạch Đằng', 'THPT Uông Bí', 'THPT Cẩm Phả', 'THPT Móng Cái', 'THPT Đông Triều', 'THPT Vân Đồn'],
  'Quảng Trị': ['THPT Chuyên Lê Quý Đôn', 'THPT Đông Hà', 'THPT Vĩnh Linh', 'THPT Triệu Phong', 'THPT Hải Lăng', 'THPT Cam Lộ'],
  'Sơn La': ['THPT Chuyên Sơn La', 'THPT Tô Hiệu', 'THPT Mai Sơn', 'THPT Mộc Châu', 'THPT Thuận Châu', 'THPT Sông Mã'],
  'Tây Ninh': ['THPT Chuyên Hoàng Lê Kha', 'THPT Tây Ninh', 'THPT Trảng Bàng', 'THPT Hoà Thành', 'THPT Gò Dầu', 'THPT Dương Minh Châu'],
  'Thái Nguyên': ['THPT Chuyên Thái Nguyên', 'THPT Lương Ngọc Quyến', 'THPT Đồng Hỷ', 'THPT Phú Bình', 'THPT Phổ Yên', 'THPT Đại Từ'],
  'Thanh Hóa': ['THPT Chuyên Lam Sơn', 'THPT Đào Duy Từ', 'THPT Hàm Rồng', 'THPT Hà Trung', 'THPT Nông Cống', 'THPT Triệu Sơn', 'THPT Thọ Xuân', 'THPT Quan Hoá', 'THPT Ngọc Lặc', 'THPT Tĩnh Gia'],
  'Tuyên Quang': ['THPT Chuyên Tuyên Quang', 'THPT Tuyên Quang', 'THPT Sơn Dương', 'THPT Yên Sơn', 'THPT Chiêm Hoá', 'THPT Na Hang'],
  'Vĩnh Long': ['THPT Chuyên Nguyễn Bỉnh Khiêm', 'THPT Vĩnh Long', 'THPT Lưu Văn Liệt', 'THPT Long Hồ', 'THPT Trà Ôn', 'THPT Bình Minh'],
};

// Fallback: tạo tên trường mặc định dựa trên tên tỉnh
function generateDefaultSchools(provinceName) {
  const shortName = provinceName.replace('Thành phố ', '').replace('Tỉnh ', '').trim();
  return [
    `THPT Chuyên ${shortName}`,
    `THPT ${shortName}`,
    `THPT Số 1 ${shortName}`,
    `THPT Số 2 ${shortName}`,
    `THPT Nguyễn Trãi`,
    `THPT Lê Quý Đôn`,
  ];
}

function toCode(name) {
  return name.replace('THPT ', '').split(' ').map(w => w[0] || '').join('').toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 5);
}

async function run() {
  await prisma.$connect();

  // 1. Xoá Cục nhà trường
  await prisma.$executeRawUnsafe(`DELETE FROM high_schools WHERE province_code = '00'`);
  await prisma.$executeRawUnsafe(`DELETE FROM provinces WHERE id = '00'`);
  console.log('Deleted Cục nhà trường');

  // 2. Lấy toàn bộ tỉnh từ DB
  const provinces = await prisma.$queryRawUnsafe(`SELECT id, name FROM provinces ORDER BY id`);
  console.log(`Found ${provinces.length} provinces in DB`);

  // 3. Xóa toàn bộ trường cũ
  await prisma.$executeRawUnsafe(`DELETE FROM high_schools`);
  console.log('Cleared old high schools');

  // 4. Seed trường cho từng tỉnh
  let totalCount = 0;
  for (const prov of provinces) {
    const provName = prov.name;
    const provCode = prov.id;

    // Tìm danh sách trường phù hợp
    let schools = null;
    for (const [key, val] of Object.entries(SCHOOL_MAP)) {
      if (provName.includes(key)) {
        schools = val;
        break;
      }
    }
    if (!schools) {
      schools = generateDefaultSchools(provName);
    }

    let idx = 1;
    for (const schoolName of schools) {
      const sid = `${provCode}TH${idx.toString().padStart(3, '0')}`;
      const code = toCode(schoolName);
      try {
        await prisma.$executeRawUnsafe(
          `INSERT INTO high_schools (id, name, province_code, code) VALUES ($1, $2, $3, $4) ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name`,
          sid, schoolName, provCode, code
        );
        totalCount++;
      } catch (e) {
        console.error(`Error: ${sid} ${schoolName}:`, e.message);
      }
      idx++;
    }
    console.log(`  ${provCode} ${provName}: ${schools.length} trường`);
  }

  console.log(`\nDone! Total ${totalCount} high schools seeded for ${provinces.length} provinces.`);
  await prisma.$disconnect();
}

run().catch(e => { console.error(e); process.exit(1); });
