import React from 'react';
import './Lable.css';

export interface LableProps {
  Boolean_35_8?: boolean;
  Property_1?: 'Default' | 'hover';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `lable`
 * Page: `components`
 * Type: `COMPONENT_SET`
 * ID: `35:1599`
 */
export const Lable: React.FC<LableProps> = ({
  Boolean_35_8 = true,
  Property_1 = "Default",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`lable-container ${className}`}
      style={style}
      data-figma-layer="lable"
      data-figma-page="components"
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          components / lable
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          35:1599
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=Default</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(1, 135, 147)', display: 'inline-block', flexShrink: 0 }} />
<span style={{ fontSize: '20px', fontWeight: 600, color: 'rgb(255, 255, 255)', display: 'inline-block' }}>P</span>
</div>
<div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '16px', fontWeight: 700, color: 'rgb(39, 39, 42)', display: 'inline-block' }}>High Spike Detected</span>
<span style={{ fontSize: '16.85134506225586px', fontWeight: 400, color: 'rgb(19, 78, 74)', display: 'inline-block' }}>Zone 2 – Industrial Area</span>
</div>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=hover</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(1, 135, 147)', display: 'inline-block', flexShrink: 0 }} />
<span style={{ fontSize: '20px', fontWeight: 600, color: 'rgb(255, 255, 255)', display: 'inline-block' }}>P</span>
</div>
<div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '16px', fontWeight: 700, color: 'rgb(39, 39, 42)', display: 'inline-block' }}>High Spike Detected</span>
<span style={{ fontSize: '16.85134506225586px', fontWeight: 400, color: 'rgb(19, 78, 74)', display: 'inline-block' }}>Zone 2 – Industrial Area</span>
</div>
</div>
          </div>
      </div>

      <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '11px', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '8px' }}>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>Boolean_35_8: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(Boolean_35_8)}</span>
        </div>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>Property_1: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(Property_1)}</span>
        </div>
      </div>
    </div>
  );
};

export default Lable;
