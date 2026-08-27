const fs = require('fs');

const figma = JSON.parse(fs.readFileSync('d:/iMAGES/figma-document-raw.json', 'utf8'));

const componentsSummary = [];

figma.document.children.forEach(page => {
  page.children.forEach(node => {
    const summary = {
      page: page.name,
      id: node.id,
      name: node.name,
      type: node.type,
      props: node.componentPropertyDefinitions ? Object.keys(node.componentPropertyDefinitions) : [],
      childrenNames: node.children ? node.children.map(c => c.name) : [],
    };
    componentsSummary.push(summary);
  });
});

console.log('Total top-level components/nodes across all pages:', componentsSummary.length);
console.log(JSON.stringify(componentsSummary, null, 2));
