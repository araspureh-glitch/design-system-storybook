import React from 'react';
import './Card1.css';

export interface Card1Props {
  Boolean_18_13?: boolean;
  Property_1?: 'active' | 'hover' | 'selected' | 'default';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `card 1`
 * Page: `cards`
 * Type: `COMPONENT_SET`
 * ID: `180:4576`
 */
export const Card1: React.FC<Card1Props> = ({
  Boolean_18_13 = true,
  Property_1 = "active",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`card1-container ${className}`}
      style={style}
      data-figma-layer="card 1"
      data-figma-page="cards"
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          cards / card 1
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          180:4576
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=active</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '43px', padding: '34px 10px 28px 20px', borderRadius: '27.848594665527344px', background: 'rgb(255, 255, 255)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '26px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '18px', fontWeight: 600, color: 'rgb(4, 47, 46)', display: 'inline-block' }}>Air Quality Index</span>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(255, 255, 255)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgba(0, 0, 0, 0)', display: 'inline-block', flexShrink: 0 }} />
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgba(0, 0, 0, 0)', display: 'inline-block', flexShrink: 0 }} />
</div>
</div>
</div>
<div style={{ display: 'flex', flexDirection: 'column', gap: '9px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '27.34333038330078px', fontWeight: 700, color: 'rgb(19, 25, 39)', display: 'inline-block' }}>43.50 AQI</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '10px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '14.102218627929688px', fontWeight: 400, color: 'rgb(156, 163, 175)', display: 'inline-block' }}>Renewable Energy: 54.86%</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '53.84061813354492px', background: 'rgb(187, 247, 208)', alignItems: 'center' }}>

</div>
</div>
<span style={{ fontSize: '11.458052635192871px', fontWeight: 400, color: 'rgb(113, 113, 122)', display: 'inline-block' }}>vs Last Month</span>
</div>
</div>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=hover</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '43px', padding: '34px 10px 28px 20px', borderRadius: '27.848594665527344px', background: 'rgb(226, 232, 240)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '26px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '18px', fontWeight: 600, color: 'rgb(4, 47, 46)', display: 'inline-block' }}>Air Quality Index</span>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(255, 255, 255)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgba(0, 0, 0, 0)', display: 'inline-block', flexShrink: 0 }} />
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgba(0, 0, 0, 0)', display: 'inline-block', flexShrink: 0 }} />
</div>
</div>
</div>
<div style={{ display: 'flex', flexDirection: 'column', gap: '9px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '27.34333038330078px', fontWeight: 700, color: 'rgb(19, 25, 39)', display: 'inline-block' }}>43.50 AQI</span>
<span style={{ fontSize: '14.102218627929688px', fontWeight: 400, color: 'rgb(156, 163, 175)', display: 'inline-block' }}>Renewable Energy: 54.86%</span>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '53.84061813354492px', background: 'rgb(187, 247, 208)', alignItems: 'center' }}>

</div>
</div>
<span style={{ fontSize: '11.458052635192871px', fontWeight: 400, color: 'rgb(113, 113, 122)', display: 'inline-block' }}>vs Last Month</span>
</div>
</div>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=selected</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '43px', padding: '34px 10px 28px 20px', borderRadius: '27.848594665527344px', background: 'rgb(255, 255, 255)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '26px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '18px', fontWeight: 600, color: 'rgb(4, 47, 46)', display: 'inline-block' }}>Air Quality Index</span>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(255, 255, 255)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgba(0, 0, 0, 0)', display: 'inline-block', flexShrink: 0 }} />
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgba(0, 0, 0, 0)', display: 'inline-block', flexShrink: 0 }} />
</div>
</div>
</div>
<div style={{ display: 'flex', flexDirection: 'column', gap: '9px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '27.34333038330078px', fontWeight: 700, color: 'rgb(19, 25, 39)', display: 'inline-block' }}>43.50 AQI</span>
<span style={{ fontSize: '14.102218627929688px', fontWeight: 400, color: 'rgb(156, 163, 175)', display: 'inline-block' }}>Renewable Energy: 54.86%</span>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '53.84061813354492px', background: 'rgb(187, 247, 208)', alignItems: 'center' }}>

</div>
</div>
<span style={{ fontSize: '11.458052635192871px', fontWeight: 400, color: 'rgb(113, 113, 122)', display: 'inline-block' }}>vs Last Month</span>
</div>
</div>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=default</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '43px', padding: '34px 10px 28px 20px', borderRadius: '27.848594665527344px', background: 'rgb(255, 255, 255)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '26px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '18px', fontWeight: 600, color: 'rgb(4, 47, 46)', display: 'inline-block' }}>Air Quality Index</span>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(255, 255, 255)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgba(0, 0, 0, 0)', display: 'inline-block', flexShrink: 0 }} />
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgba(0, 0, 0, 0)', display: 'inline-block', flexShrink: 0 }} />
</div>
</div>
</div>
<div style={{ display: 'flex', flexDirection: 'column', gap: '9px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '27.34333038330078px', fontWeight: 700, color: 'rgb(19, 25, 39)', display: 'inline-block' }}>43.50 AQI</span>
<span style={{ fontSize: '14.102218627929688px', fontWeight: 400, color: 'rgb(156, 163, 175)', display: 'inline-block' }}>Renewable Energy: 54.86%</span>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '53.84061813354492px', background: 'rgb(187, 247, 208)', alignItems: 'center' }}>

</div>
</div>
<span style={{ fontSize: '11.458052635192871px', fontWeight: 400, color: 'rgb(113, 113, 122)', display: 'inline-block' }}>vs Last Month</span>
</div>
</div>
</div>
          </div>
      </div>

      <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '11px', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '8px' }}>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>Boolean_18_13: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(Boolean_18_13)}</span>
        </div>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>Property_1: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(Property_1)}</span>
        </div>
      </div>
    </div>
  );
};

export default Card1;
