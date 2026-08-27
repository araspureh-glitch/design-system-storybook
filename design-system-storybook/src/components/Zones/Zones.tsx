import React from 'react';
import './Zones.css';

export interface ZonesProps {
  Property_1?: 'Frame 601' | 'Frame 602' | 'Frame 604';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `zones`
 * Page: `components`
 * Type: `COMPONENT_SET`
 * ID: `4:590`
 */
export const Zones: React.FC<ZonesProps> = ({
  Property_1 = "Frame 601",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`zones-container ${className}`}
      style={style}
      data-figma-layer="zones"
      data-figma-page="components"
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          components / zones
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          4:590
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=Frame 601</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '31.596271514892578px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '31.596271514892578px', background: 'rgb(223, 240, 243)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 16</span>
</div>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '14.744926452636719px', fontWeight: 600, color: 'rgb(0, 0, 0)', display: 'inline-block' }}>Zone</span>
</div>
</div>
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(1, 135, 147)', display: 'inline-block', flexShrink: 0 }} />
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=Frame 602</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '31.596271514892578px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '31.596271514892578px', background: 'rgb(1, 135, 147)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 16</span>
</div>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '14.744926452636719px', fontWeight: 600, color: 'rgb(255, 255, 255)', display: 'inline-block' }}>Zone</span>
</div>
</div>
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(255, 255, 255)', display: 'inline-block', flexShrink: 0 }} />
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=Frame 604</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '15px', background: 'rgb(255, 255, 255)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 16</span>
</div>
<span style={{ fontSize: '16px', fontWeight: 400, color: 'rgb(0, 0, 0)', display: 'inline-block' }}>Public</span>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '31.596271514892578px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '31.596271514892578px', background: 'rgb(1, 135, 147)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 16</span>
</div>
</div>
<span style={{ fontSize: '16px', fontWeight: 400, color: 'rgb(0, 0, 0)', display: 'inline-block' }}>City Center</span>
<span style={{ fontSize: '16px', fontWeight: 400, color: 'rgb(0, 0, 0)', display: 'inline-block' }}>Industrial</span>
<span style={{ fontSize: '16px', fontWeight: 400, color: 'rgb(0, 0, 0)', display: 'inline-block' }}>Residental</span>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '14.744926452636719px', fontWeight: 600, color: 'rgb(255, 255, 255)', display: 'inline-block' }}>Zone</span>
</div>
</div>
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(255, 255, 255)', display: 'inline-block', flexShrink: 0 }} />
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

export default Zones;
