import React from 'react';
import './Component318.css';

export interface Component318Props {
  Property_1?: 'Frame 601' | 'Frame 602';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Component 318`
 * Page: `components`
 * Type: `COMPONENT_SET`
 * ID: `4:565`
 */
export const Component318: React.FC<Component318Props> = ({
  Property_1 = "Frame 602",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`component318-container ${className}`}
      style={style}
      data-figma-layer="Component 318"
      data-figma-page="components"
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          components / Component 318
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          4:565
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=Frame 602</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '11.439759254455566px', background: 'rgba(188, 224, 228, 0.10000000149011612)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 1</span>
</div>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=Frame 601</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '12px', background: 'rgb(255, 255, 255)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 702</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(188, 223, 227)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 703</span>
</div>
<span style={{ fontSize: '12px', fontWeight: 400, color: 'rgb(0, 60, 66)', display: 'inline-block' }}>Energy Load: 5.5 MW\r\nRenewable Share: 35%\r\nCarbon Emissions: 1.2 tons\r\nStatus: Still High</span>
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(52, 159, 169)', display: 'inline-block', flexShrink: 0 }} />
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '12px', fontWeight: 500, color: 'rgb(0, 60, 66)', display: 'inline-block' }}>May 2024</span>
</div>
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(188, 223, 227)', display: 'inline-block', flexShrink: 0 }} />
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '11.439759254455566px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 23</span>
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

export default Component318;
