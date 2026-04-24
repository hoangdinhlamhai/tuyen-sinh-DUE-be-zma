const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const PROFILES = [
  'THPT Chuyên',
  'THPT Nguyễn Trãi',
  'THPT Lê Quý Đôn',
  'THPT Chu Văn An',
  'THPT Hai Bà Trưng',
  'THPT Hùng Vương',
  'THPT Trần Phú',
  'THPT Phan Đình Phùng',
  'THPT Lê Hồng Phong',
  'THPT Nguyễn Du',
  'THPT Lý Tự Trọng',
  'THPT Ngô Quyền',
  'THPT Võ Thị Sáu',
  'THPT Quang Trung',
  'THPT Trần Hưng Đạo',
  'THPT Nguyễn Bỉnh Khiêm',
  'THPT Nguyễn Đình Chiểu',
  'THPT Phan Bội Châu',
  'THPT Lương Thế Vinh',
  'THPT Trần Quốc Toản',
  'THPT Hoàng Hoa Thám',
  'THPT Nguyễn Khuyến',
  'THPT Lê Lợi',
  'THPT Đinh Tiên Hoàng',
  'THPT Nguyễn Công Trứ',
  'THPT Thái Phiên',
  'THPT Dân Lập Số 1',
  'THPT Quốc Tế',
  'THPT Thực Hành',
  'THPT Nội Trú'
];

function generateDefaultSchools(provinceName) {
  const shortName = provinceName.replace('Thành phố ', '').replace('Tỉnh ', '').trim();
  let result = [];
  
  // Các quận huyện giả định hoặc tên riêng
  let districts = ['Trung Tâm', 'Ngoại Thành', 'Bắc', 'Nam', 'Đông', 'Tây'];

  for (let pro of PROFILES) {
    if (pro.includes('Chuyên')) result.push(`THPT Chuyên ${shortName}`);
    else result.push(`${pro} ${shortName}`);
  }
  
  for (let i = 1; i <= 10; i++) {
    result.push(`THPT Số ${i} ${shortName}`);
  }
  
  for (let dist of districts) {
    result.push(`THPT ${dist} ${shortName}`);
  }

  // Loại bỏ trùng lặp
  return [...new Set(result)].slice(0, 40); // 40 trường mỗi tỉnh
}

function toCode(name) {
  return name.replace('THPT ', '').split(' ').map(w => w[0] || '').join('').toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 5);
}

async function run() {
  await prisma.$connect();

  console.log('Generating exactly ~40 schools per province to simulate real density...');

  const provinces = await prisma.$queryRawUnsafe(`SELECT id, name FROM provinces ORDER BY id`);
  let totalCount = 0;
  
  for (const prov of provinces) {
    const provName = prov.name;
    const provCode = prov.id;
    
    // Xoá trường cũ của tỉnh này trước khi chèn mới
    await prisma.$executeRawUnsafe(`DELETE FROM high_schools WHERE province_code = $1`, provCode);

    const schools = generateDefaultSchools(provName);

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
      }
      idx++;
    }
  }

  console.log(`\nDone! Total ${totalCount} high schools seeded for ${provinces.length} provinces.`);
  await prisma.$disconnect();
}

run().catch(e => { console.error(e); process.exit(1); });
