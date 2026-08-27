const fs = require('fs');
const found = JSON.parse(fs.readFileSync('d:/iMAGES/foundational-tokens.json', 'utf8'));

console.log('Top keys in foundational-tokens.json:', Object.keys(found));

for (const key of Object.keys(found)) {
  console.log(`\nCategory: "${key}"`);
  console.log('Subkeys:', Object.keys(found[key]));
}
