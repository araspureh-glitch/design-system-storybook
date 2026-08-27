const fs = require('fs');

const figmaDoc = JSON.parse(fs.readFileSync('d:/iMAGES/figma-document-raw.json', 'utf8'));

function inspectNode(node, depth = 0) {
  const indent = '  '.repeat(depth);
  console.log(`${indent}- [${node.type}] "${node.name}" (ID: ${node.id})`);
  if (node.characters) console.log(`${indent}  Text: "${node.characters}"`);
  if (node.layoutMode) console.log(`${indent}  LayoutMode: ${node.layoutMode}, Gap: ${node.itemSpacing}, Pad: T${node.paddingTop}/R${node.paddingRight}/B${node.paddingBottom}/L${node.paddingLeft}`);
  if (node.fills && node.fills.length > 0) {
    const f = node.fills[0];
    if (f.color) console.log(`${indent}  Fill: rgb(${Math.round(f.color.r*255)}, ${Math.round(f.color.g*255)}, ${Math.round(f.color.b*255)})`);
  }
  if (node.boundVariables) console.log(`${indent}  BoundVars: ${JSON.stringify(node.boundVariables)}`);

  if (node.children && depth < 3) {
    node.children.forEach(c => inspectNode(c, depth + 1));
  }
}

// Sample inspect components from cards and nav bar pages
figmaDoc.document.children.forEach(page => {
  console.log(`\n=== PAGE: ${page.name} ===`);
  page.children.slice(0, 3).forEach(c => inspectNode(c, 0));
});
