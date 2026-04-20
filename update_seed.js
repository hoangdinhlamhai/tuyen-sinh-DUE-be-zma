const fs = require('fs');

const seedDataPath = './seed-data.sql';
const detailsNewsPath = './details-news.json';

const seedData = fs.readFileSync(seedDataPath, 'utf8');
const detailNews = JSON.parse(fs.readFileSync(detailsNewsPath, 'utf8'));

const newsContentJson = JSON.stringify(detailNews.content).replace(/'/g, "''");

const updatedSeedData = seedData.replace(
  'INSERT INTO cms_news (id, title, summary, thumbnail, slug, content_format, published_at) VALUES',
  'INSERT INTO cms_news (id, title, summary, content, thumbnail, slug, content_format, published_at) VALUES'
).split('\n').map(line => {
  if (line.includes("('14271d4d-e49d-4e35-bc68-6665dad8db52'") 
   || line.includes("('f3b35e9c-9a84-4e48-abc4-ca673b96f4a1'")
   || line.includes("('876cfb8d-8415-4665-949a-4cbb416530df'")
   || line.includes("('31097e55-045a-4c64-a699-1968ea08357b'")
   || line.includes("('5CDAE875-1F74-44C0-9DA0-EE8D4C501846'")
   || line.includes("('EF995DAF-B643-45C8-9049-A16BDEFE4D26'")
   || line.includes("('A94D5FF2-FF91-46F7-8B6D-38FAF4CE87F0'")
   || line.includes("('78F5E673-B9DF-4A68-9736-46C9FB0DB3EE'")
   || line.includes("('06AE6A59-28F9-432F-8093-86B5F6554112'")) {
    
    // Nếu là dòng của tin tức c786fc68..., ta chèn JSON content vào
    if (line.includes("('c786fc68-2695-410b-9883-fc0773d645d1'")) {
      // Find the position after the third comma (id, title, summary, -> content)
      // Actually wait, 'c786fc' is one of the items.
      return line;
    }
    
    // Hacky but safe replace for other records:
    // Insert NULL before the thumbnail URL (which starts with 'https://...)
    return line.replace(/, (NULL|'https:\/\/cms-api\.ktd\.edu\.vn|'https:\/\/cms-api\.ktd\.edu\.vn\/Media)/g, ", NULL, $1");
  }
  
  if (line.includes("('c786fc68-2695-410b-9883-fc0773d645d1'")) {
    return line.replace(/, 'https:\/\/cms-api\.ktd\.edu\.vn/g, `, '${newsContentJson}', 'https://cms-api.ktd.edu.vn`);
  }

  return line;
}).join('\n');

fs.writeFileSync(seedDataPath, updatedSeedData, 'utf8');
console.log('Cập nhật file seed-data.sql thành công!');
