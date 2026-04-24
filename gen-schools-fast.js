const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Các trường cố định cực kỳ phổ biến
const DEFAULT_NAMES = [
  'THPT Chuyên',
  'THPT Nguyễn Trãi',
  'THPT Lê Quý Đôn',
  'THPT Chu Văn An',
  'THPT Số 1',
  'THPT Số 2',
  'THPT Dân Lập'
];

function generateDefaultSchools(provinceName) {
  const shortName = provinceName.replace('Thành phố ', '').replace('Tỉnh ', '').trim();
  let result = [];
  
  for (let pro of DEFAULT_NAMES) {
    if (pro.includes('Chuyên') || pro.includes('Số 1') || pro.includes('Số 2')) {
      result.push(`${pro} ${shortName}`);
    } else {
      result.push(pro);
    }
  }

  // Chấm dứt ở 7 trường mỗi tỉnh
  return result.slice(0, 7);
}

function toCode(name) {
  return name.replace('THPT ', '').split(' ').map(w => w[0] || '').join('').toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 5);
}

async function run() {
  await prisma.$connect();

  console.log('Clearing old schools...');
  await prisma.$executeRawUnsafe(`DELETE FROM high_schools`);

  const provinces = await prisma.$queryRawUnsafe(`SELECT id, name FROM provinces ORDER BY id`);
  const allSchools = [];
  
  for (const prov of provinces) {
    const provName = prov.name;
    const provCode = prov.id;
    
    const schools = generateDefaultSchools(provName);

    let idx = 1;
    for (const schoolName of schools) {
      const sid = `${provCode}TH${idx.toString().padStart(3, '0')}`;
      const code = toCode(schoolName);
      allSchools.push({
        id: sid,
        name: schoolName,
        provinceCode: provCode,
        code: code
      });
      idx++;
    }
  }

  console.log(`Inserting ${allSchools.length} schools across ${provinces.length} provinces using createMany...`);
  
  await prisma.highSchool.createMany({
    data: allSchools,
    skipDuplicates: true
  });

  console.log(`Done! Fast seeded ${allSchools.length} high schools.`);
  await prisma.$disconnect();
}

run().catch(e => { console.error(e); process.exit(1); });
