const fs = require('fs');
const path = require('path');

const baseTokens = JSON.parse(fs.readFileSync('d:/iMAGES/base-palette-tokens.json', 'utf8'));
const foundationalTokens = JSON.parse(fs.readFileSync('d:/iMAGES/foundational-tokens.json', 'utf8'));

const variableMap = {};
const cssRules = [];

function traverse(obj, pathArr = []) {
  if (!obj || typeof obj !== 'object') return;
  if (obj['$extensions'] && obj['$extensions']['com.figma.variableId']) {
    const varId = obj['$extensions']['com.figma.variableId'];
    const type = obj['$type'];
    let val = obj['$value'];
    if (typeof val === 'object' && val !== null) {
      if (val.hex) val = val.hex;
    }
    
    // Check if codeSyntax WEB exists
    let webSyntax = obj['$extensions']?.['com.figma.codeSyntax']?.['WEB'];
    
    // Format path to CSS variable name
    // Examples from prompt: --uedp-slate-900, --uedp-rounded-3xl, --uedp-gap-4, --uedp-padding-6
    let namePart = '';
    if (webSyntax) {
      namePart = webSyntax;
    } else {
      namePart = pathArr.map(p => p.toLowerCase().replace(/[^a-z0-9_-]/g, '-')).join('-');
    }
    
    // Ensure --uedp- prefix
    let cssVarName = namePart.startsWith('uedp-') ? `--${namePart}` : (namePart.startsWith('--uedp-') ? namePart : `--uedp-${namePart}`);
    
    let formattedVal = val;
    if (typeof val === 'number') {
      formattedVal = val === 0 ? '0' : `${val}px`;
    }
    
    variableMap[varId] = { cssVarName, value: formattedVal, pathArr, rawValue: val, type, webSyntax };
    cssRules.push(`  ${cssVarName}: ${formattedVal};`);
  } else {
    for (const key of Object.keys(obj)) {
      if (key.startsWith('$')) continue;
      traverse(obj[key], [...pathArr, key]);
    }
  }
}

traverse(baseTokens);
traverse(foundationalTokens);

console.log('Total variable IDs extracted:', Object.keys(variableMap).length);
console.log('\nSample mapping (first 20):');
Object.entries(variableMap).slice(0, 20).forEach(([id, item]) => {
  console.log(`${id} => ${item.cssVarName}: ${item.value}`);
});

fs.writeFileSync('d:/iMAGES/scratch/variable_map.json', JSON.stringify(variableMap, null, 2));
