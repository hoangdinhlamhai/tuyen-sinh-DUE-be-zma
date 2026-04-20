const fs = require('fs');

const seedDataPath = './seed-data.sql';
let seedData = fs.readFileSync(seedDataPath, 'utf8');

// Danh sách các tin tức trong seed-data.sql
const newsList = [
  { id: '14271d4d-e49d-4e35-bc68-6665dad8db52', format: 'blocknote' },
  // c786fc68-... đã được thêm content thật
  { id: 'f3b35e9c-9a84-4e48-abc4-ca673b96f4a1', format: 'html' },
  { id: '876cfb8d-8415-4665-949a-4cbb416530df', format: 'blocknote' },
  { id: '31097e55-045a-4c64-a699-1968ea08357b', format: 'html' },
  { id: '5CDAE875-1F74-44C0-9DA0-EE8D4C501846', format: 'html' },
  { id: 'EF995DAF-B643-45C8-9049-A16BDEFE4D26', format: 'blocknote' },
  { id: 'A94D5FF2-FF91-46F7-8B6D-38FAF4CE87F0', format: 'blocknote' },
  { id: '78F5E673-B9DF-4A68-9736-46C9FB0DB3EE', format: 'blocknote' },
  { id: '06AE6A59-28F9-432F-8093-86B5F6554112', format: 'blocknote' },
];

const mockBlockNote = JSON.stringify([
  {
    "id": "mock-p1",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Nội dung bài viết này đang được cập nhật...",
        "styles": {
          "italic": true,
          "textColor": "gray"
        }
      }
    ],
    "children": []
  }
]).replace(/'/g, "''");

const mockHTML = "'<p style=\"color: gray; font-style: italic;\">Nội dung bài viết này đang được cập nhật...</p>'";

let updateQueries = `\n-- Cập nhật data mặc định cho các tin tức khác\n`;

newsList.forEach(news => {
  const contentSql = news.format === 'blocknote' ? `'${mockBlockNote}'` : mockHTML;
  updateQueries += `UPDATE cms_news SET content = ${contentSql} WHERE id = '${news.id}';\n`;
});

// Chèn đè vào cuối file
fs.writeFileSync(seedDataPath, seedData + updateQueries, 'utf8');
console.log('Thêm UPDATE cho toàn bộ row cms_news thành công!');
