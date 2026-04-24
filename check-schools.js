const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();
(async () => {
  const r = await p.$queryRawUnsafe(`
    SELECT p.id, p.name, 
      (SELECT COUNT(*)::int FROM high_schools h WHERE h.province_code = p.id) as cnt 
    FROM provinces p 
    WHERE (SELECT COUNT(*)::int FROM high_schools h WHERE h.province_code = p.id) = 0
    ORDER BY p.id
  `);
  if (r.length === 0) {
    console.log('ALL provinces have schools!');
  } else {
    console.log('Provinces WITHOUT schools:');
    for (const x of r) {
      console.log('  MISSING:', x.id, x.name);
    }
  }
  await p.$disconnect();
})();
