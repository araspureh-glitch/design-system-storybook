import React from 'react';
import './ProgressBarState.css';

export interface ProgressBarStateProps {
  Property_1?: 'normal' | 'hover';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Progress Bar state `
 * Page: `nav bar`
 * Type: `COMPONENT_SET`
 * ID: `181:6746`
 */
export const ProgressBarState: React.FC<ProgressBarStateProps> = ({
  Property_1 = "normal",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`progressbarstate-container ${className}`}
      style={style}
      data-figma-layer="Progress Bar state "
      data-figma-page="nav bar"
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          nav bar / Progress Bar state 
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          181:6746
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=normal</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '20px', fontWeight: 500, color: 'rgb(0, 0, 0)', display: 'inline-block' }}>HVAC</span>
<div style={{ display: 'flex', flexDirection: 'row', gap: '16px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(243, 244, 246)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 1</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(243, 244, 246)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 2</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(243, 244, 246)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 3</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(243, 244, 246)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 4</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(243, 244, 246)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 5</span>
</div>
</div>
<span style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(158, 162, 174)', display: 'inline-block' }}>0%</span>
</div>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=hover</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '20px', fontWeight: 500, color: 'rgb(15, 118, 110)', display: 'inline-block' }}>HVAC</span>
<div style={{ display: 'flex', flexDirection: 'row', gap: '16px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(243, 244, 246)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 1</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(243, 244, 246)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 2</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(243, 244, 246)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 3</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(243, 244, 246)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 4</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(243, 244, 246)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 5</span>
</div>
</div>
<span style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(158, 162, 174)', display: 'inline-block' }}>0%</span>
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

export default ProgressBarState;
