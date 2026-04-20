const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const schools = [
  ['01TH001', 'THPT Chu Van An', '01', 'CVA'],
  ['01TH002', 'THPT Kim Lien', '01', 'KLT'],
  ['01TH003', 'THPT Viet Duc', '01', 'VDT'],
  ['01TH004', 'THPT Tran Hung Dao', '01', 'THD'],
  ['01TH005', 'THPT Phan Dinh Phung', '01', 'PDP'],
  ['01TH006', 'THPT Yen Vien', '01', 'YVT'],
  ['01TH007', 'THPT Nguyen Trai', '01', 'NTR'],
  ['01TH008', 'THPT Thang Long', '01', 'TLG'],
  ['01TH009', 'THPT Mac Dinh Chi', '01', 'MDC'],
  ['01TH010', 'THPT Amsterdam', '01', 'AMS'],
  ['29TH001', 'THPT Le Hong Phong', '29', 'LHP'],
  ['29TH002', 'THPT Nguyen Thuong Hien', '29', 'NTH'],
  ['29TH003', 'THPT Tran Khai Nguyen', '29', 'TKN'],
  ['29TH004', 'THPT Nguyen Thi Minh Khai', '29', 'NTMK'],
  ['29TH005', 'THPT Gia Dinh', '29', 'GDT'],
  ['29TH006', 'THPT Bui Thi Xuan', '29', 'BTX'],
  ['29TH007', 'THPT Thu Duc', '29', 'TDT'],
  ['29TH008', 'THPT Tan Binh', '29', 'TBT'],
  ['29TH009', 'THPT Phu Nhuan', '29', 'PNT'],
  ['29TH010', 'THPT Vo Thi Sau', '29', 'VTS'],
  ['21TH001', 'THPT Phan Chau Trinh', '21', 'PCT'],
  ['21TH002', 'THPT Tran Phu', '21', 'TPX'],
  ['21TH003', 'THPT Nguyen Thi Minh Khai', '21', 'NTMK'],
  ['21TH004', 'THPT Ton That Tung', '21', 'TTT'],
  ['21TH005', 'THPT Quang Trung', '21', 'QTR'],
  ['21TH006', 'THPT Hai Chau', '21', 'HCT'],
  ['21TH007', 'THPT Lien Chieu', '21', 'LCT'],
  ['21TH008', 'THPT Thanh Khe', '21', 'TKT'],
  ['21TH009', 'THPT Son Tra', '21', 'STR'],
  ['21TH010', 'THPT Ngu Hanh Son', '21', 'NHS'],
  ['04TH001', 'THPT Chuyen Tran Phu', '04', 'CTP'],
  ['04TH002', 'THPT Nguyen Binh Khiem', '04', 'NBK'],
  ['04TH003', 'THPT Le Quy Don', '04', 'LQD'],
  ['04TH004', 'THPT Vinh Bao', '04', 'VBT'],
  ['04TH005', 'THPT Cong Hien', '04', 'CHT'],
  ['04TH006', 'THPT An Duong', '04', 'ADT'],
  ['04TH007', 'THPT Tien Lang', '04', 'TLG'],
  ['04TH008', 'THPT Do Son', '04', 'DST'],
  ['04TH009', 'THPT Hai An', '04', 'HAT'],
  ['04TH010', 'THPT Kien Thuy', '04', 'KTT'],
  ['33TH001', 'THPT Chuyen Ly Tu Trong', '33', 'LTT'],
  ['33TH002', 'THPT Nguyen Trung Truc', '33', 'NTT'],
  ['33TH003', 'THPT Cai Khe', '33', 'CKT'],
  ['33TH004', 'THPT Ninh Kieu', '33', 'NKT'],
  ['33TH005', 'THPT Binh Thuy', '33', 'BTT'],
  ['33TH006', 'THPT Thoi Lai', '33', 'TIT'],
  ['33TH007', 'THPT Phong Dien', '33', 'PDT'],
  ['33TH008', 'THPT Vinh Thanh', '33', 'VTT'],
  ['33TH009', 'THPT Co Do', '33', 'CDT'],
  ['33TH010', 'THPT Ninh Kieu', '33', 'TNT'],
  ['18TH001', 'THPT Chu Van An', '18', 'CVA'],
  ['18TH002', 'THPT Hong Linh', '18', 'HLT'],
  ['18TH003', 'THPT Nguyen Du', '18', 'NDU'],
  ['18TH004', 'THPT Thach Ha', '18', 'THA'],
  ['18TH005', 'THPT Cam Xuyen', '18', 'CMX'],
  ['18TH006', 'THPT Ky Anh', '18', 'KAH'],
  ['18TH007', 'THPT Duc Tho', '18', 'DTH'],
  ['18TH008', 'THPT Vu Quang', '18', 'VQT'],
  ['18TH009', 'THPT Luu Hoang', '18', 'LHT'],
  ['18TH010', 'THPT Can Loc', '18', 'CLT'],
  ['17TH001', 'THPT Chuyen Phan Boi Chau', '17', 'CPBC'],
  ['17TH002', 'THPT Quynh Luu 1', '17', 'QLT'],
  ['17TH003', 'THPT Dien Chau 2', '17', 'DCT'],
  ['17TH004', 'THPT Yen Thanh', '17', 'YTN'],
  ['17TH005', 'THPT Do Luong 1', '17', 'DLT'],
  ['17TH006', 'THPT An Son', '17', 'AST'],
  ['17TH007', 'THPT Tan Ky', '17', 'TKT'],
  ['17TH008', 'THPT Thai Hoa', '17', 'THT'],
  ['17TH009', 'THPT Nam Dan', '17', 'NDT'],
  ['17TH010', 'THPT Hoang Mai', '17', 'HMT'],
  ['16TH001', 'THPT Chu Van An', '16', 'CVA'],
  ['16TH002', 'THPT Lam Son', '16', 'LSN'],
  ['16TH003', 'THPT Do Son', '16', 'DST'],
  ['16TH004', 'THPT Ha Trung', '16', 'HTT'],
  ['16TH005', 'THPT Nong Cong', '16', 'NCT'],
  ['16TH006', 'THPT Trieu Son', '16', 'TST'],
  ['16TH007', 'THPT Nhu Xuan', '16', 'NXU'],
  ['16TH008', 'THPT Cam Thuy', '16', 'CTY'],
  ['16TH009', 'THPT Tho Xuan', '16', 'TXT'],
  ['16TH010', 'THPT Quan Hoa', '16', 'QHT'],
  ['28TH001', 'THPT Chuyen Luong The Vinh', '28', 'LTV'],
  ['28TH002', 'THPT Tran Phu', '28', 'TPX'],
  ['28TH003', 'THPT Dong Ha', '28', 'DHT'],
  ['28TH004', 'THPT Bien Hoa', '28', 'BHT'],
  ['28TH005', 'THPT Trang Bom', '28', 'TBT'],
  ['28TH006', 'THPT Long Khanh', '28', 'LKT'],
  ['28TH007', 'THPT Xuan Loc', '28', 'XLT'],
  ['28TH008', 'THPT Thong Nhat', '28', 'TNT'],
  ['28TH009', 'THPT Tri An', '28', 'TAT'],
  ['28TH010', 'THPT Vinh Cuu', '28', 'VCT'],
  ['23TH001', 'THPT Chuyen Le Quy Don', '23', 'LQD'],
  ['23TH002', 'THPT Phan Boi Chau', '23', 'PBC'],
  ['23TH003', 'THPT Nguyen Van Troi', '23', 'NVT'],
  ['23TH004', 'THPT Ton Duc Thang', '23', 'TDT'],
  ['23TH005', 'THPT Nha Trang', '23', 'NTT'],
  ['23TH006', 'THPT Cam Ran', '23', 'CRT'],
  ['23TH007', 'THPT Dien Khanh', '23', 'DKT'],
  ['23TH008', 'THPT Khanh Vinh', '23', 'KVT'],
  ['23TH009', 'THPT Ninh Hoa', '23', 'NHT'],
  ['23TH010', 'THPT Van Ninh', '23', 'VNT'],
];

async function run() {
  await prisma.$connect();
  let count = 0;
  for (const [id, name, provinceCode, code] of schools) {
    try {
      await prisma.$executeRaw`INSERT INTO high_schools (id, name, province_code, code) VALUES (${id}, ${name}, ${provinceCode}, ${code}) ON CONFLICT (id) DO NOTHING`;
      count++;
    } catch (e) {
      console.error('Error inserting', id, e.message);
    }
  }
  console.log('Done! ' + count + ' high schools seeded.');
  await prisma.$disconnect();
}
run().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
