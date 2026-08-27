import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const scales = {
  "borderRadius": [
    {
      "name": "rounded-none",
      "cssVarName": "--uedp-rounded-none",
      "val": "0"
    },
    {
      "name": "rounded-sm",
      "cssVarName": "--uedp-rounded-sm",
      "val": "2px"
    },
    {
      "name": "rounded",
      "cssVarName": "--uedp-rounded",
      "val": "4px"
    },
    {
      "name": "rounded-md",
      "cssVarName": "--uedp-rounded-md",
      "val": "6px"
    },
    {
      "name": "rounded-lg",
      "cssVarName": "--uedp-rounded-lg",
      "val": "8px"
    },
    {
      "name": "rounded-xl",
      "cssVarName": "--uedp-rounded-xl",
      "val": "12px"
    },
    {
      "name": "rounded-2xl",
      "cssVarName": "--uedp-rounded-2xl",
      "val": "16px"
    },
    {
      "name": "rounded-3xl",
      "cssVarName": "--uedp-rounded-3xl",
      "val": "24px"
    },
    {
      "name": "rounded-full",
      "cssVarName": "--uedp-rounded-full",
      "val": "9999px"
    }
  ],
  "gap": [
    {
      "name": "gap-0",
      "cssVarName": "--uedp-gap-0",
      "val": "0"
    },
    {
      "name": "gap-px",
      "cssVarName": "--uedp-gap-px",
      "val": "1px"
    },
    {
      "name": "gap-0,5",
      "cssVarName": "--uedp-gap-0.5",
      "val": "2px"
    },
    {
      "name": "gap-1",
      "cssVarName": "--uedp-gap-1",
      "val": "4px"
    },
    {
      "name": "gap-1,5",
      "cssVarName": "--uedp-gap-gap-1-5",
      "val": "6px"
    },
    {
      "name": "gap-2",
      "cssVarName": "--uedp-gap-2",
      "val": "8px"
    },
    {
      "name": "gap-3",
      "cssVarName": "--uedp-gap-3",
      "val": "12px"
    },
    {
      "name": "gap-4",
      "cssVarName": "--uedp-gap-4",
      "val": "16px"
    },
    {
      "name": "gap-5",
      "cssVarName": "--uedp-gap-5",
      "val": "20px"
    },
    {
      "name": "gap-6",
      "cssVarName": "--uedp-gap-6",
      "val": "24px"
    },
    {
      "name": "gap-7",
      "cssVarName": "--uedp-gap-7",
      "val": "28px"
    },
    {
      "name": "gap-8",
      "cssVarName": "--uedp-gap-8",
      "val": "32px"
    },
    {
      "name": "gap-9",
      "cssVarName": "--uedp-gap-gap-9",
      "val": "36px"
    },
    {
      "name": "gap-10",
      "cssVarName": "--uedp-gap-10",
      "val": "40px"
    },
    {
      "name": "gap-11",
      "cssVarName": "--uedp-gap-11",
      "val": "44px"
    },
    {
      "name": "gap-12",
      "cssVarName": "--uedp-gap-12",
      "val": "48px"
    },
    {
      "name": "gap-14",
      "cssVarName": "--uedp-gap-14",
      "val": "56px"
    },
    {
      "name": "gap-16",
      "cssVarName": "--uedp-gap-16",
      "val": "64px"
    },
    {
      "name": "gap-18",
      "cssVarName": "--uedp-gap-18",
      "val": "72px"
    },
    {
      "name": "gap-20",
      "cssVarName": "--uedp-gap-20",
      "val": "80px"
    },
    {
      "name": "gap-24",
      "cssVarName": "--uedp-gap-24",
      "val": "96px"
    },
    {
      "name": "gap-28",
      "cssVarName": "--uedp-gap-28",
      "val": "112px"
    },
    {
      "name": "gap-32",
      "cssVarName": "--uedp-gap-32",
      "val": "128px"
    },
    {
      "name": "gap-64",
      "cssVarName": "--uedp-gap-64",
      "val": "256px"
    }
  ],
  "padding": [
    {
      "name": "p-0",
      "cssVarName": "--uedp-p-0",
      "val": "0"
    },
    {
      "name": "p-0,5",
      "cssVarName": "--uedp-padding-p-0-5",
      "val": "2px"
    },
    {
      "name": "p-1",
      "cssVarName": "--uedp-padding-p-1",
      "val": "4px"
    },
    {
      "name": "p-1,5",
      "cssVarName": "--uedp-padding-p-1-5",
      "val": "6px"
    },
    {
      "name": "p-2",
      "cssVarName": "--uedp-padding-p-2",
      "val": "8px"
    },
    {
      "name": "p-2,5",
      "cssVarName": "--uedp-padding-p-2-5",
      "val": "10px"
    },
    {
      "name": "p-3",
      "cssVarName": "--uedp-padding-p-3",
      "val": "12px"
    },
    {
      "name": "p-3,5",
      "cssVarName": "--uedp-padding-p-3-5",
      "val": "14px"
    },
    {
      "name": "p-4",
      "cssVarName": "--uedp-padding-p-4",
      "val": "16px"
    },
    {
      "name": "p-5",
      "cssVarName": "--uedp-padding-p-5",
      "val": "20px"
    },
    {
      "name": "p-6",
      "cssVarName": "--uedp-padding-p-6",
      "val": "24px"
    },
    {
      "name": "p-7",
      "cssVarName": "--uedp-padding-p-7",
      "val": "28px"
    },
    {
      "name": "p-8",
      "cssVarName": "--uedp-padding-p-8",
      "val": "32px"
    },
    {
      "name": "p-9",
      "cssVarName": "--uedp-padding-p-9",
      "val": "36px"
    },
    {
      "name": "p-10",
      "cssVarName": "--uedp-padding-p-10",
      "val": "40px"
    },
    {
      "name": "p-11",
      "cssVarName": "--uedp-padding-p-11",
      "val": "44px"
    },
    {
      "name": "p-12",
      "cssVarName": "--uedp-padding-p-12",
      "val": "48px"
    }
  ],
  "opacity": [
    {
      "name": "opacity-0",
      "cssVarName": "--uedp-opacity-0",
      "val": "0"
    },
    {
      "name": "opacity-5",
      "cssVarName": "--uedp-opacity-5",
      "val": "5px"
    },
    {
      "name": "opacity-10",
      "cssVarName": "--uedp-opacity-10",
      "val": "10px"
    },
    {
      "name": "opacity-20",
      "cssVarName": "--uedp-opacity-20",
      "val": "20px"
    },
    {
      "name": "opacity-25",
      "cssVarName": "--uedp-opacity-25",
      "val": "25px"
    },
    {
      "name": "opacity-30",
      "cssVarName": "--uedp-opacity-30",
      "val": "30px"
    },
    {
      "name": "opacity-40",
      "cssVarName": "--uedp-opacity-40",
      "val": "40px"
    },
    {
      "name": "opacity-50",
      "cssVarName": "--uedp-opacity-50",
      "val": "50px"
    },
    {
      "name": "opacity-60",
      "cssVarName": "--uedp-opacity-60",
      "val": "60px"
    },
    {
      "name": "opacity-70",
      "cssVarName": "--uedp-opacity-70",
      "val": "70px"
    },
    {
      "name": "opacity-80",
      "cssVarName": "--uedp-opacity-80",
      "val": "80px"
    },
    {
      "name": "opacity-90",
      "cssVarName": "--uedp-opacity-90",
      "val": "90px"
    },
    {
      "name": "opacity-95",
      "cssVarName": "--uedp-opacity-95",
      "val": "95px"
    },
    {
      "name": "opacity-100",
      "cssVarName": "--uedp-opacity-100",
      "val": "100px"
    }
  ],
  "maxWidth": [
    {
      "name": "max-w-xs",
      "cssVarName": "--uedp-max-w-max-w-xs",
      "val": "320px"
    },
    {
      "name": "max-w-sm",
      "cssVarName": "--uedp-max-w-sm",
      "val": "384px"
    },
    {
      "name": "max-w-md",
      "cssVarName": "--uedp-max-w-max-w-md",
      "val": "448px"
    },
    {
      "name": "max-w-lg",
      "cssVarName": "--uedp-max-w-max-w-lg",
      "val": "512px"
    },
    {
      "name": "max-w-xl",
      "cssVarName": "--uedp-max-w-max-w-xl",
      "val": "576px"
    },
    {
      "name": "max-w-2xl",
      "cssVarName": "--uedp-max-w-max-w-2xl",
      "val": "672px"
    },
    {
      "name": "max-w-3xl",
      "cssVarName": "--uedp-max-w-max-w-3xl",
      "val": "768px"
    },
    {
      "name": "max-w-4xl",
      "cssVarName": "--uedp-max-w-max-w-4xl",
      "val": "896px"
    },
    {
      "name": "max-w-5xl",
      "cssVarName": "--uedp-max-w-max-w-5xl",
      "val": "1024px"
    },
    {
      "name": "max-w-6xl",
      "cssVarName": "--uedp-max-w-max-w-6xl",
      "val": "1152px"
    },
    {
      "name": "max-w-7xl",
      "cssVarName": "--uedp-max-w-max-w-7xl",
      "val": "1280px"
    },
    {
      "name": "max-w-screen-sm",
      "cssVarName": "--uedp-max-w-max-w-screen-sm",
      "val": "640px"
    },
    {
      "name": "max-w-screen-md",
      "cssVarName": "--uedp-max-w-max-w-screen-md",
      "val": "768px"
    },
    {
      "name": "max-w-screen-lg",
      "cssVarName": "--uedp-max-w-max-w-screen-lg",
      "val": "1024px"
    },
    {
      "name": "max-w-screen-xl",
      "cssVarName": "--uedp-max-w-max-w-screen-xl",
      "val": "1280px"
    },
    {
      "name": "max-w-screen-2xl",
      "cssVarName": "--uedp-max-w-max-w-screen-2xl",
      "val": "1536px"
    }
  ]
};

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
