const fs = require('fs');

const variableMap = JSON.parse(fs.readFileSync('d:/iMAGES/scratch/variable_map.json', 'utf8'));

console.log('--- FOUNDATIONAL TOKENS SAMPLE ---');
Object.entries(variableMap).filter(([id, item]) => !item.pathArr.includes('slate') && !item.pathArr.includes('gray') && !item.pathArr.includes('red')).slice(0, 30).forEach(([id, item]) => {
  console.log(`${id} => path: ${item.pathArr.join('/')} | var: ${item.cssVarName} | val: ${item.value}`);
});
