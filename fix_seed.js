const fs = require('fs');

const seedDataPath = './seed-data.sql';
const detailsNewsPath = './details-news.json';

// Phục hồi lại đoạn INSERT ban đầu, bỏ đi chữ content
let seedData = fs.readFileSync(seedDataPath, 'utf8');

// Bỏ đoạn lỗi cũ (đã thay thế hỏng)
seedData = seedData.replace(
  'INSERT INTO cms_news (id, title, summary, content, thumbnail, slug, content_format, published_at) VALUES',
  'INSERT INTO cms_news (id, title, summary, thumbnail, slug, content_format, published_at) VALUES'
);

// Xóa hết chữ NULL, NULL, 'https://...' bị lỗi do script trước
seedData = seedData.replace(/NULL, NULL, 'https:\/\//g, "NULL, 'https://");
seedData = seedData.replace(/NULL, 'https:\/\//g, "'https://");
seedData = seedData.replace(/, NULL, NULL, 'blocknote'/g, ", NULL, 'blocknote'");

// Replace the content array string embedded earlier
// We can just find the long array for 'c786fc...' and remove it safely.
// Let's use a regex to clean up any array starting with '[{"id"
seedData = seedData.replace(/, '\[\{"id".+?\]', /g, ", ");

// Bây giờ tạo UPDATE riêng lẻ lấy content từ json
const detailNews = JSON.parse(fs.readFileSync(detailsNewsPath, 'utf8'));
const newsContentJson = JSON.stringify(detailNews.content).replace(/'/g, "''");

const updateStatement = `\n\n-- Cập nhật data blocknote cho tin tức chi tiết
UPDATE cms_news SET content = '${newsContentJson}' WHERE id = 'c786fc68-2695-410b-9883-fc0773d645d1';\n`;

// Thêm câu lệnh UPDATE vào cuối file
fs.writeFileSync(seedDataPath, seedData + updateStatement, 'utf8');
console.log('Phục hồi bảng cms_news và thêm UPDATE thành công!');
