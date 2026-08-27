const fs = require('fs');

const figma = JSON.parse(fs.readFileSync('d:/iMAGES/figma-document-raw.json', 'utf8'));

const pages = figma.document.children;

console.log('Pages found:', pages.map(p => p.name));

const allNodes = [];

function traverse(node, pageName, parentName = '') {
  if (!node) return;
  const nodeInfo = {
    id: node.id,
    name: node.name,
    type: node.type,
    pageName,
    parentName,
    boundVariables: node.boundVariables || {},
    childrenCount: node.children ? node.children.length : 0,
    componentPropertyDefinitions: node.componentPropertyDefinitions,
    variantProperties: node.variantProperties,
    rawNode: node
  };
  
  if (['COMPONENT', 'COMPONENT_SET', 'FRAME', 'INSTANCE', 'GROUP'].includes(node.type)) {
    allNodes.push(nodeInfo);
  }

  if (node.children) {
    node.children.forEach(child => traverse(child, pageName, node.name));
  }
}

pages.forEach(page => {
  page.children.forEach(child => traverse(child, page.name));
});

console.log('\nTotal nodes collected:', allNodes.length);

const topLevelByPage = {};
pages.forEach(page => {
  topLevelByPage[page.name] = page.children.map(c => ({ id: c.id, name: c.name, type: c.type }));
});

console.log('\nTop-level nodes by page:');
console.log(JSON.stringify(topLevelByPage, null, 2));
