import React from 'react';
import './Card3.css';

export interface Card3Props {
  Property_1?: 'Default' | 'hover';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `card 3 `
 * Page: `cards`
 * Type: `COMPONENT_SET`
 * ID: `181:4698`
 */
export const Card3: React.FC<Card3Props> = ({
  Property_1 = "Default",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`card3-container ${className}`}
      style={style}
      data-figma-layer="card 3 "
      data-figma-page="cards"
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          cards / card 3 
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          181:4698
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=Default</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', padding: '14px 10px 14px 13px', borderRadius: '11px', background: 'rgb(255, 255, 255)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '16.689512252807617px', fontWeight: 500, color: 'rgb(0, 0, 0)', display: 'inline-block' }}>Westpark-West (Green & Recreational District)</span>
<span style={{ fontSize: '14px', fontWeight: 500, color: 'rgb(40, 40, 40)', display: 'inline-block' }}>Green & Recreational District</span>
</div>
<span style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(119, 119, 119)', display: 'inline-block' }}>Mix of university campuses, museums, and cafes moderate daytime peaks.</span>
<div style={{ display: 'flex', flexDirection: 'row', gap: '84px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '10px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '24px', fontWeight: 500, color: 'rgb(0, 0, 0)', display: 'inline-block' }}>~1050MW</span>
<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '53.84061813354492px', background: 'rgb(254, 202, 202)', alignItems: 'center' }}>

</div>
</div>
</div>
<div style={{ display: 'flex', flexDirection: 'column', gap: '37px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '53.84061813354492px', background: 'rgb(254, 202, 202)', alignItems: 'center' }}>
<span style={{ fontSize: '16px', fontWeight: 500, color: 'rgb(220, 38, 38)', display: 'inline-block' }}>High</span>
</div>
</div>
</div>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=hover</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', padding: '14px 10px 14px 13px', borderRadius: '11px', background: 'rgb(226, 232, 240)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '16.689512252807617px', fontWeight: 500, color: 'rgb(0, 0, 0)', display: 'inline-block' }}>Westpark-West (Green & Recreational District)</span>
<span style={{ fontSize: '14px', fontWeight: 500, color: 'rgb(40, 40, 40)', display: 'inline-block' }}>Green & Recreational District</span>
</div>
<span style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(119, 119, 119)', display: 'inline-block' }}>Mix of university campuses, museums, and cafes moderate daytime peaks.</span>
<div style={{ display: 'flex', flexDirection: 'row', gap: '84px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '10px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '24px', fontWeight: 500, color: 'rgb(0, 0, 0)', display: 'inline-block' }}>~1050MW</span>
<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '53.84061813354492px', background: 'rgb(254, 202, 202)', alignItems: 'center' }}>

</div>
</div>
</div>
<div style={{ display: 'flex', flexDirection: 'column', gap: '37px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '53.84061813354492px', background: 'rgb(254, 243, 199)', alignItems: 'center' }}>
<span style={{ fontSize: '16px', fontWeight: 500, color: 'rgb(249, 115, 22)', display: 'inline-block' }}>Medium</span>
</div>
</div>
</div>
</div>
          </div>
      </div>

      <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '11px', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '8px' }}>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>Property_1: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(Property_1)}</span>
        </div>
      </div>
    </div>
  );
};

export default Card3;
