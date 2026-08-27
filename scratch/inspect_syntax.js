const fs = require('fs');
const found = JSON.parse(fs.readFileSync('d:/iMAGES/foundational-tokens.json', 'utf8'));

function checkSyntax(obj, catName) {
  for (const k of Object.keys(obj)) {
    if (k.startsWith('$')) continue;
    const item = obj[k];
    const web = item['$extensions']?.['com.figma.codeSyntax']?.['WEB'];
    const id = item['$extensions']?.['com.figma.variableId'];
    console.log(`${catName} > ${k}: webSyntax="${web}", id="${id}", val=${item['$value']}`);
  }
}

for (const cat of Object.keys(found)) {
  if (cat.startsWith('$')) continue;
  console.log(`\n=== ${cat} ===`);
  checkSyntax(found[cat], cat);
}
