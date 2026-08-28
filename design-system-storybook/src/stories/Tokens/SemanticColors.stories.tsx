import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const semanticFamilies = {
  "semanticAlerts": [
    { "name": "Color (Alert Danger)", "cssVarName": "--uedp-semantic-color", "hex": "#DC2626" },
    { "name": "Color 3 (Alert Light Danger)", "cssVarName": "--uedp-semantic-color-3", "hex": "#F87171" },
    { "name": "Color 2 (Alert Soft Danger)", "cssVarName": "--uedp-semantic-color-2", "hex": "#FECACA" },
    { "name": "Color 4 (Alert White)", "cssVarName": "--uedp-semantic-color-4", "hex": "#FFFFFF" },
    { "name": "Color 5 (Alert Light Warning)", "cssVarName": "--uedp-semantic-color-5", "hex": "#FEF3C7" },
    { "name": "Color 6 (Alert Soft Warning)", "cssVarName": "--uedp-semantic-color-6", "hex": "#FDE68A" },
    { "name": "Color 7 (Alert Warning)", "cssVarName": "--uedp-semantic-color-7", "hex": "#FCD34D" },
    { "name": "Color 8 (Alert Light Success)", "cssVarName": "--uedp-semantic-color-8", "hex": "#DCFCE7" },
    { "name": "Color 10 (Alert Soft Success)", "cssVarName": "--uedp-semantic-color-10", "hex": "#86EFAC" },
    { "name": "Color 9 (Alert Success)", "cssVarName": "--uedp-semantic-color-9", "hex": "#22C55E" }
  ],
  "buttonSemantic": [
    { "name": "Color 8 (Button White)", "cssVarName": "--uedp-button-color-8", "hex": "#FFFFFF" },
    { "name": "Color 11 (Button Muted Teal)", "cssVarName": "--uedp-button-color-11", "hex": "#83A4A3" },
    { "name": "Primary (Button Light Teal)", "cssVarName": "--uedp-button-primary", "hex": "#CCFBF1" },
    { "name": "Secondary (Button Teal)", "cssVarName": "--uedp-button-secondary", "hex": "#99F6E4" },
    { "name": "Color (Button Medium Teal)", "cssVarName": "--uedp-button-color", "hex": "#5EEAD4" },
    { "name": "Color 3 (Button Dark Teal)", "cssVarName": "--uedp-button-color-3", "hex": "#14B8A6" },
    { "name": "Color 2 (Button Deep Teal)", "cssVarName": "--uedp-button-color-2", "hex": "#0D9488" },
    { "name": "Color 4 (Button Shadow Teal)", "cssVarName": "--uedp-button-color-4", "hex": "#0F766E" },
    { "name": "Color 5 (Button Darkest Teal)", "cssVarName": "--uedp-button-color-5", "hex": "#115E59" },
    { "name": "Color 6 (Button Deepest Teal)", "cssVarName": "--uedp-button-color-6", "hex": "#134E4A" },
    { "name": "Color 7 (Button Midnight Teal)", "cssVarName": "--uedp-button-color-7", "hex": "#042F2E" }
  ]
};

const SemanticColorsComponent: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '24px', backgroundColor: 'var(--uedp-slate-900, #0f172a)', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>🎨 UEDP 4 Semantic Design Tokens</h1>
      <p style={{ color: 'var(--uedp-slate-400, #94a3b8)', marginBottom: '32px' }}>
        Semantic color mapping rules for alert statuses and buttons.
      </p>

      {Object.entries(semanticFamilies).map(([familyName, swatches]) => (
        <div key={familyName} style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '20px', textTransform: 'capitalize', borderBottom: '1px solid var(--uedp-slate-800, #1e293b)', paddingBottom: '8px', marginBottom: '16px' }}>
            {familyName === 'semanticAlerts' ? 'Semantic Alert & State Colors' : 'Button Semantic Colors'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
            {swatches.map(swatch => (
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

const meta: Meta<typeof SemanticColorsComponent> = {
  title: 'Tokens/Semantic Colors',
  component: SemanticColorsComponent,
  parameters: {
    docs: {
      description: {
        component: 'Complete palette of semantic alerts and button color styles mapped from Figma variables.',
      },
    },
  },
};

export default meta;
export const Default: StoryObj<typeof SemanticColorsComponent> = {};
