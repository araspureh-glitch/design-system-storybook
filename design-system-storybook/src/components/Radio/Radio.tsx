import React from 'react';
import './Radio.css';

export interface RadioProps {
  Left_Icon_80_2?: boolean;
  State?: 'Default' | 'Hover' | 'Selected' | 'Disabled';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `radio`
 * Page: `components`
 * Type: `COMPONENT_SET`
 * ID: `23:2294`
 */
export const Radio: React.FC<RadioProps> = ({
  Left_Icon_80_2 = true,
  State = "Default",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`radio-container ${className}`}
      style={style}
      data-figma-layer="radio"
      data-figma-page="components"
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          components / radio
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          23:2294
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: State=Default</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(255, 255, 255)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Component 370</span>
</div>
<span style={{ fontSize: '16px', fontWeight: 400, color: 'rgb(19, 78, 74)', display: 'inline-block' }}>This Week</span>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: State=Hover</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(255, 255, 255)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '8px', background: 'rgb(237, 239, 254)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Component 370</span>
</div>
<span style={{ fontSize: '16px', fontWeight: 400, color: 'rgb(19, 78, 74)', display: 'inline-block' }}>This Week</span>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: State=Selected</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(255, 255, 255)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '8px', background: 'rgb(13, 148, 136)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'var(--uedp-slate-400, #94a3b8)', display: 'inline-block', flexShrink: 0 }} />
</div>
</div>
<span style={{ fontSize: '16px', fontWeight: 400, color: 'rgb(19, 78, 74)', display: 'inline-block' }}>This Week</span>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: State=Disabled</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(255, 255, 255)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Component 370</span>
</div>
<span style={{ fontSize: '16px', fontWeight: 400, color: 'rgb(113, 113, 122)', display: 'inline-block' }}>This Week</span>
</div>
          </div>
      </div>

      <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '11px', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '8px' }}>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>Left_Icon_80_2: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(Left_Icon_80_2)}</span>
        </div>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>State: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(State)}</span>
        </div>
      </div>
    </div>
  );
};

export default Radio;
