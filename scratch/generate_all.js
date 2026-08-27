const fs = require('fs');
const path = require('path');

const baseTokens = JSON.parse(fs.readFileSync('d:/iMAGES/base-palette-tokens.json', 'utf8'));
const foundationalTokens = JSON.parse(fs.readFileSync('d:/iMAGES/foundational-tokens.json', 'utf8'));
const figmaDoc = JSON.parse(fs.readFileSync('d:/iMAGES/figma-document-raw.json', 'utf8'));

const targetDir = 'd:/iMAGES/design-system-storybook';
const stylesDir = path.join(targetDir, 'src/styles');
const storiesDir = path.join(targetDir, 'src/stories');
const componentsDir = path.join(targetDir, 'src/components');

fs.mkdirSync(stylesDir, { recursive: true });
fs.mkdirSync(path.join(storiesDir, 'Tokens'), { recursive: true });
fs.mkdirSync(componentsDir, { recursive: true });

// STEP 1: Parse tokens and build variableMap & figma-tokens.css
const variableMap = {};
const cssRules = [];
const colorFamilies = {};
const foundationalScales = {
  borderRadius: [],
  gap: [],
  padding: [],
  opacity: [],
  maxWidth: []
};

function traverseTokens(obj, pathArr = []) {
  if (!obj || typeof obj !== 'object') return;
  
  if (obj['$extensions'] && obj['$extensions']['com.figma.variableId']) {
    const varId = obj['$extensions']['com.figma.variableId'];
    const type = obj['$type'];
    let val = obj['$value'];
    if (typeof val === 'object' && val !== null && val.hex) {
      val = val.hex;
    }

    const webSyntax = obj['$extensions']?.['com.figma.codeSyntax']?.['WEB'];
    
    let varName = '';
    if (webSyntax) {
      varName = webSyntax;
    } else {
      varName = pathArr.map(p => p.toLowerCase().replace(/[^a-z0-9_-]/g, '-')).join('-');
    }

    if (!varName.startsWith('uedp-') && !varName.startsWith('--uedp-')) {
      varName = `uedp-${varName}`;
    }
    const cssVarName = varName.startsWith('--') ? varName : `--${varName}`;

    let formattedVal = val;
    if (typeof val === 'number') {
      formattedVal = val === 0 ? '0' : `${val}px`;
    }

    variableMap[varId] = { cssVarName, value: formattedVal, rawValue: val, type, pathArr, webSyntax };
    cssRules.push(`  ${cssVarName}: ${formattedVal};`);

    if (type === 'color' || (typeof val === 'string' && val.startsWith('#'))) {
      const family = pathArr[0] || 'base';
      if (!colorFamilies[family]) colorFamilies[family] = [];
      colorFamilies[family].push({ name: pathArr.join(' / '), cssVarName, hex: val });
    } else {
      const cat = pathArr[0]?.toLowerCase() || '';
      if (cat.includes('radius')) {
        foundationalScales.borderRadius.push({ name: pathArr[1] || varName, cssVarName, val: formattedVal });
      } else if (cat.includes('gap')) {
        foundationalScales.gap.push({ name: pathArr[1] || varName, cssVarName, val: formattedVal });
      } else if (cat.includes('padding')) {
        foundationalScales.padding.push({ name: pathArr[1] || varName, cssVarName, val: formattedVal });
      } else if (cat.includes('opacity')) {
        foundationalScales.opacity.push({ name: pathArr[1] || varName, cssVarName, val: formattedVal });
      } else if (cat.includes('max')) {
        foundationalScales.maxWidth.push({ name: pathArr[1] || varName, cssVarName, val: formattedVal });
      }
    }
  } else {
    for (const key of Object.keys(obj)) {
      if (key.startsWith('$')) continue;
      traverseTokens(obj[key], [...pathArr, key]);
    }
  }
}

traverseTokens(baseTokens);
traverseTokens(foundationalTokens);

// Write src/styles/figma-tokens.css
const cssTokensContent = `:root {\n${cssRules.join('\n')}\n}\n`;
fs.writeFileSync(path.join(stylesDir, 'figma-tokens.css'), cssTokensContent);
console.log(`✅ Generated figma-tokens.css with ${cssRules.length} variables.`);

// Write src/stories/Tokens/ColorPalette.stories.tsx
const colorStoriesContent = `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const colorFamilies = ${JSON.stringify(colorFamilies, null, 2)};

const ColorPaletteComponent: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '24px', backgroundColor: 'var(--uedp-slate-900, #0f172a)', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>🎨 UEDP 4 Base Color Palette</h1>
      <p style={{ color: 'var(--uedp-slate-400, #94a3b8)', marginBottom: '32px' }}>
        Design tokens synchronized directly from <code>base-palette-tokens.json</code>.
      </p>

      {Object.entries(colorFamilies).map(([familyName, swatches]) => (
        <div key={familyName} style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '20px', textTransform: 'capitalize', borderBottom: '1px solid var(--uedp-slate-800, #1e293b)', paddingBottom: '8px', marginBottom: '16px' }}>
            {familyName} Family
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
            {(swatches as any[]).map(swatch => (
              <div key={swatch.cssVarName} style={{ background: 'var(--uedp-slate-800, #1e293b)', borderRadius: '12px', padding: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                <div style={{ backgroundColor: swatch.hex, height: '64px', borderRadius: '8px', marginBottom: '12px', border: '1px solid rgba(255,255,255,0.1)' }} />
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#f8fafc' }}>{swatch.name}</div>
                <div style={{ fontSize: '11px', fontFamily: 'monospace', color: 'var(--uedp-slate-400, #94a3b8)', margin: '4px 0' }}>{swatch.hex}</div>
                <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#38bdf8', wordBreak: 'break-all' }}>{swatch.cssVarName}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const meta: Meta<typeof ColorPaletteComponent> = {
  title: 'Tokens/Color Palette',
  component: ColorPaletteComponent,
  parameters: {
    docs: {
      description: {
        component: 'Complete palette of color family design tokens extracted from Figma design variables.',
      },
    },
  },
};

export default meta;
export const Default: StoryObj<typeof ColorPaletteComponent> = {};
`;

fs.writeFileSync(path.join(storiesDir, 'Tokens/ColorPalette.stories.tsx'), colorStoriesContent);
console.log('✅ Generated ColorPalette.stories.tsx');

// Write src/stories/Tokens/FoundationalTokens.stories.tsx
const foundationalStoriesContent = `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const scales = ${JSON.stringify(foundationalScales, null, 2)};

const FoundationalTokensComponent: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '24px', backgroundColor: 'var(--uedp-slate-900, #0f172a)', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>📐 UEDP 4 Foundational Design Tokens</h1>
      <p style={{ color: 'var(--uedp-slate-400, #94a3b8)', marginBottom: '32px' }}>
        Border radii, spacing, padding, opacity, and geometry scales extracted from <code>foundational-tokens.json</code>.
      </p>

      {/* Border Radius */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '20px', borderBottom: '1px solid var(--uedp-slate-800, #1e293b)', paddingBottom: '8px', marginBottom: '16px' }}>
          Border Radius
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
          {scales.borderRadius.map((item: any) => (
            <div key={item.cssVarName} style={{ background: 'var(--uedp-slate-800, #1e293b)', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '64px', height: '64px', backgroundColor: '#38bdf8', borderRadius: "var(" + item.cssVarName + ", " + item.val + ")", marginBottom: '12px' }} />
              <div style={{ fontSize: '13px', fontWeight: 600 }}>{item.name}</div>
              <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#38bdf8' }}>{item.val}</div>
              <div style={{ fontSize: '10px', fontFamily: 'monospace', color: 'var(--uedp-slate-400, #94a3b8)' }}>{item.cssVarName}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Gap & Spacing */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '20px', borderBottom: '1px solid var(--uedp-slate-800, #1e293b)', paddingBottom: '8px', marginBottom: '16px' }}>
          Gap & Spacing Scale
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
          {scales.gap.map((item: any) => (
            <div key={item.cssVarName} style={{ background: 'var(--uedp-slate-800, #1e293b)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>{item.name} ({item.val})</div>
              <div style={{ display: 'flex', gap: "var(" + item.cssVarName + ", " + item.val + ")", background: '#0f172a', padding: '8px', borderRadius: '6px' }}>
                <div style={{ width: '20px', height: '20px', background: '#ec4899', borderRadius: '4px' }} />
                <div style={{ width: '20px', height: '20px', background: '#ec4899', borderRadius: '4px' }} />
                <div style={{ width: '20px', height: '20px', background: '#ec4899', borderRadius: '4px' }} />
              </div>
              <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#38bdf8', marginTop: '8px' }}>{item.cssVarName}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const meta: Meta<typeof FoundationalTokensComponent> = {
  title: 'Tokens/Foundational Tokens',
  component: FoundationalTokensComponent,
  parameters: {
    docs: {
      description: {
        component: 'Foundational design tokens for border radii, spacing scales, padding, and opacity.',
      },
    },
  },
};

export default meta;
export const Default: StoryObj<typeof FoundationalTokensComponent> = {};
`;

fs.writeFileSync(path.join(storiesDir, 'Tokens/FoundationalTokens.stories.tsx'), foundationalStoriesContent);
console.log('✅ Generated FoundationalTokens.stories.tsx');

function sanitizeComponentName(rawName) {
  let cleaned = rawName
    .trim()
    .replace(/[^a-zA-Z0-9\s_-]/g, ' ')
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
  
  if (/^[0-9]/.test(cleaned)) {
    cleaned = 'Comp' + cleaned;
  }
  return cleaned || 'Component';
}

function getNodeFillCss(node) {
  const boundVars = node.boundVariables || {};
  if (boundVars.fills && boundVars.fills[0] && boundVars.fills[0].id) {
    const aliasId = boundVars.fills[0].id;
    if (variableMap[aliasId]) {
      return `var(${variableMap[aliasId].cssVarName})`;
    }
  }
  if (node.fills && node.fills[0] && node.fills[0].color) {
    const c = node.fills[0].color;
    const r = Math.round(c.r * 255);
    const g = Math.round(c.g * 255);
    const b = Math.round(c.b * 255);
    const a = node.fills[0].opacity !== undefined ? node.fills[0].opacity : (c.a !== undefined ? c.a : 1);
    return a < 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
  }
  return null;
}

function getNodeTextColorCss(node) {
  const boundVars = node.boundVariables || {};
  if (boundVars.fills && boundVars.fills[0] && boundVars.fills[0].id) {
    const aliasId = boundVars.fills[0].id;
    if (variableMap[aliasId]) {
      return `var(${variableMap[aliasId].cssVarName})`;
    }
  }
  if (node.fills && node.fills[0] && node.fills[0].color) {
    const c = node.fills[0].color;
    const r = Math.round(c.r * 255);
    const g = Math.round(c.g * 255);
    const b = Math.round(c.b * 255);
    const a = node.fills[0].opacity !== undefined ? node.fills[0].opacity : (c.a !== undefined ? c.a : 1);
    return a < 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
  }
  return 'inherit';
}

function buildChildNodeJsx(node, depth = 0) {
  if (!node || depth > 5) return '';

  const name = node.name || 'node';
  const type = node.type || '';
  const fill = getNodeFillCss(node);
  const textColor = getNodeTextColorCss(node);

  if (type === 'TEXT') {
    const text = node.characters ? node.characters.trim() : name;
    const fontSize = node.style?.fontSize ? `${node.style.fontSize}px` : '14px';
    const fontWeight = node.style?.fontWeight || 500;
    return `<span style={{ fontSize: '${fontSize}', fontWeight: ${fontWeight}, color: '${textColor || '#ffffff'}', display: 'inline-block' }}>${JSON.stringify(text).slice(1, -1)}</span>`;
  }

  if (['VECTOR', 'STAR', 'ELLIPSE', 'REGULAR_POLYGON'].includes(type)) {
    return `<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '${fill || 'var(--uedp-slate-400, #94a3b8)'}', display: 'inline-block', flexShrink: 0 }} />`;
  }

  const isVertical = node.layoutMode === 'VERTICAL';
  const gap = node.itemSpacing ? `${node.itemSpacing}px` : '8px';
  const padT = node.paddingTop || 0;
  const padR = node.paddingRight || 0;
  const padB = node.paddingBottom || 0;
  const padL = node.paddingLeft || 0;
  const paddingCss = (padT || padR || padB || padL) ? `${padT}px ${padR}px ${padB}px ${padL}px` : '4px 8px';
  const radius = node.cornerRadius ? `${node.cornerRadius}px` : '6px';

  let childrenJsx = '';
  if (node.children && node.children.length > 0) {
    childrenJsx = node.children.map(child => buildChildNodeJsx(child, depth + 1)).filter(Boolean).join('\n');
  } else {
    childrenJsx = `<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>${JSON.stringify(name).slice(1, -1)}</span>`;
  }

  const bgStyle = fill ? `background: '${fill}'` : `background: 'rgba(255,255,255,0.03)'`;

  return `<div style={{ display: 'flex', flexDirection: '${isVertical ? 'column' : 'row'}', gap: '${gap}', padding: '${paddingCss}', borderRadius: '${radius}', ${bgStyle}, alignItems: 'center' }}>
${childrenJsx}
</div>`;
}

// STEP 2 & 3 & 4: Process Figma Canvas components
const exportedComponents = [];

figmaDoc.document.children.forEach(page => {
  page.children.forEach(node => {
    const originalLayerName = node.name;
    const compName = sanitizeComponentName(originalLayerName);
    
    const compDir = path.join(componentsDir, compName);
    fs.mkdirSync(compDir, { recursive: true });

    const propDefs = node.componentPropertyDefinitions || {};
    const variantProps = {};
    const argTypes = {};
    const defaultArgs = {};

    Object.entries(propDefs).forEach(([propKey, propDef]) => {
      const sanitizedKey = propKey.replace(/[^a-zA-Z0-9]/g, '_');
      const defaultValue = propDef.defaultValue;
      const type = propDef.type;
      const options = propDef.variantOptions || [];

      variantProps[sanitizedKey] = {
        originalName: propKey,
        type: type === 'BOOLEAN' ? 'boolean' : (options.length > 0 ? 'enum' : 'string'),
        defaultValue: defaultValue !== undefined ? defaultValue : (options[0] || ''),
        options
      };

      if (type === 'BOOLEAN') {
        argTypes[sanitizedKey] = { control: 'boolean', description: `Figma property: ${propKey}` };
        defaultArgs[sanitizedKey] = Boolean(defaultValue);
      } else if (options.length > 0) {
        argTypes[sanitizedKey] = { control: { type: 'select' }, options, description: `Figma property: ${propKey}` };
        defaultArgs[sanitizedKey] = defaultValue || options[0];
      } else {
        argTypes[sanitizedKey] = { control: 'text', description: `Figma property: ${propKey}` };
        defaultArgs[sanitizedKey] = String(defaultValue || '');
      }
    });

    const boundVars = node.boundVariables || {};
    const cssDeclarations = [];

    let fillVar = null;
    let rawFill = null;
    if (boundVars.fills && boundVars.fills[0] && boundVars.fills[0].id) {
      const aliasId = boundVars.fills[0].id;
      if (variableMap[aliasId]) {
        fillVar = `var(${variableMap[aliasId].cssVarName})`;
      }
    }
    if (!fillVar && node.fills && node.fills[0] && node.fills[0].color) {
      const c = node.fills[0].color;
      const r = Math.round(c.r * 255);
      const g = Math.round(c.g * 255);
      const b = Math.round(c.b * 255);
      const a = node.fills[0].opacity !== undefined ? node.fills[0].opacity : (c.a !== undefined ? c.a : 1);
      rawFill = a < 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
    }

    let radiusVar = null;
    let rawRadius = null;
    if (boundVars.cornerRadius && boundVars.cornerRadius.id) {
      const aliasId = boundVars.cornerRadius.id;
      if (variableMap[aliasId]) {
        radiusVar = `var(${variableMap[aliasId].cssVarName})`;
      }
    }
    if (!radiusVar && node.cornerRadius !== undefined) {
      rawRadius = `${node.cornerRadius}px`;
    }

    let gapVar = null;
    let rawGap = null;
    if (boundVars.itemSpacing && boundVars.itemSpacing.id) {
      const aliasId = boundVars.itemSpacing.id;
      if (variableMap[aliasId]) {
        gapVar = `var(${variableMap[aliasId].cssVarName})`;
      }
    }
    if (!gapVar && node.itemSpacing !== undefined) {
      rawGap = `${node.itemSpacing}px`;
    }

    cssDeclarations.push(`  background-color: ${fillVar || rawFill || 'var(--uedp-slate-800, #1e293b)'};`);
    cssDeclarations.push(`  border-radius: ${radiusVar || rawRadius || 'var(--uedp-rounded-xl, 12px)'};`);
    if (gapVar || rawGap) {
      cssDeclarations.push(`  gap: ${gapVar || rawGap};`);
    }
    cssDeclarations.push(`  padding: var(--uedp-padding-4, 16px);`);
    cssDeclarations.push(`  box-sizing: border-box;`);
    cssDeclarations.push(`  color: var(--uedp-base-white, #ffffff);`);
    cssDeclarations.push(`  font-family: Inter, sans-serif;`);

    const cssContent = `.${compName.toLowerCase()}-container {\n${cssDeclarations.join('\n')}\n}\n`;
    fs.writeFileSync(path.join(compDir, `${compName}.css`), cssContent);

    const propTypes = Object.entries(variantProps).map(([key, info]) => {
      if (info.type === 'boolean') return `  ${key}?: boolean;`;
      if (info.options.length > 0) {
        const union = info.options.map(o => `'${o}'`).join(' | ');
        return `  ${key}?: ${union};`;
      }
      return `  ${key}?: string;`;
    }).join('\n');

    let childrenRenderJsx = '';
    if (node.children && node.children.length > 0) {
      if (node.type === 'COMPONENT_SET') {
        childrenRenderJsx = node.children.slice(0, 4).map(variantChild => {
          const varName = variantChild.name;
          const childJsx = buildChildNodeJsx(variantChild, 1);
          return `<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: ${JSON.stringify(varName).slice(1, -1)}</div>
            ${childJsx}
          </div>`;
        }).join('\n');
      } else {
        childrenRenderJsx = node.children.map(child => buildChildNodeJsx(child, 1)).join('\n');
      }
    } else {
      childrenRenderJsx = `<div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '13px', color: 'var(--uedp-slate-300, #cbd5e1)' }}>
        Figma Component: ${JSON.stringify(originalLayerName).slice(1, -1)}
      </div>`;
    }

    const componentContent = `import React from 'react';
import './${compName}.css';

export interface ${compName}Props {
${propTypes.length > 0 ? propTypes : '  children?: React.ReactNode;'}
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: \`${originalLayerName}\`
 * Page: \`${page.name}\`
 * Type: \`${node.type}\`
 * ID: \`${node.id}\`
 */
export const ${compName}: React.FC<${compName}Props> = ({
${Object.keys(variantProps).map(k => `  ${k} = ${JSON.stringify(variantProps[k].defaultValue)},`).join('\n')}
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={\`${compName.toLowerCase()}-container \${className}\`}
      style={style}
      data-figma-layer="${originalLayerName.replace(/"/g, '\\"')}"
      data-figma-page="${page.name}"
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          ${page.name} / ${originalLayerName.replace(/"/g, '\\"')}
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          ${node.id}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        ${childrenRenderJsx}
      </div>

${Object.keys(variantProps).length > 0 ? `      <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '11px', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '8px' }}>
${Object.keys(variantProps).map(k => `        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>${k}: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(${k})}</span>
        </div>`).join('\n')}
      </div>` : ''}
    </div>
  );
};

export default ${compName};
`;

    fs.writeFileSync(path.join(compDir, `${compName}.tsx`), componentContent);

    // Clean story file formatting for Storybook Acorn indexer
    const storyTitle = `${page.name}/${originalLayerName.replace(/'/g, "\\'")}`;
    const docSummary = `Figma Layer: ${originalLayerName} | Page: ${page.name} | Node ID: ${node.id} | Type: ${node.type}`;

    const storyContent = `import type { Meta, StoryObj } from '@storybook/react';
import { ${compName} } from './${compName}';

const meta: Meta<typeof ${compName}> = {
  title: ${JSON.stringify(storyTitle)},
  component: ${compName},
  parameters: {
    docs: {
      description: {
        component: ${JSON.stringify(docSummary)},
      },
    },
  },
  argTypes: ${JSON.stringify(argTypes, null, 2)},
};

export default meta;
type Story = StoryObj<typeof ${compName}>;

export const Primary: Story = {
  args: ${JSON.stringify(defaultArgs, null, 2)},
};
`;

    fs.writeFileSync(path.join(compDir, `${compName}.stories.tsx`), storyContent);
    exportedComponents.push({ compName, originalLayerName, page: page.name });
    console.log(`✅ Generated component & story: ${compName} (${originalLayerName})`);
  });
});

const barrelExports = exportedComponents.map(c => `export { ${c.compName} } from './components/${c.compName}/${c.compName}';`).join('\n');
fs.writeFileSync(path.join(targetDir, 'src/index.ts'), barrelExports + '\n');
console.log(`\n🎉 Generated barrel export src/index.ts with ${exportedComponents.length} components.`);
