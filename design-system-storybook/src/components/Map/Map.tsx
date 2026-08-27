import React from 'react';
import './Map.css';

export interface MapProps {
  Property_1?: 'Frame 601' | 'Frame 602';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `map`
 * Page: `components`
 * Type: `COMPONENT_SET`
 * ID: `4:617`
 */
export const Map: React.FC<MapProps> = ({
  Property_1 = "Frame 601",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`map-container ${className}`}
      style={style}
      data-figma-layer="map"
      data-figma-page="components"
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          components / map
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          4:617
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=Frame 601</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>image 1</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 61</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 712</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 713</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 714</span>
</div>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255, 255, 255, 0)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 723</span>
</div>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=Frame 602</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>image 1</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 61</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 712</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 713</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 714</span>
</div>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.8999999761581421)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 724</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '53.84061813354492px', background: 'rgb(251, 214, 214)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Frame 6</span>
</div>
<span style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(0, 0, 0)', display: 'inline-block' }}>Current Load: 68,200 MW\n Peak Load Today: 8:00PM\n Renewable Share: 22% (vs 28% last month)\n️ Status: High Load    Risk of Overload</span>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '16px', fontWeight: 500, color: 'rgb(0, 60, 66)', display: 'inline-block' }}>Industrial</span>
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

export default Map;
