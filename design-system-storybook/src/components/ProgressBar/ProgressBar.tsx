import React from 'react';
import './ProgressBar.css';

export interface ProgressBarProps {
  Procent_104_26?: boolean;
  Position?: 'Right';
  State?: 'Active' | 'Disabled';
  Procent?: '0%' | '20%' | '40%' | '60%' | '80%' | '100%';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Progress Bar`
 * Page: `nav bar`
 * Type: `COMPONENT_SET`
 * ID: `181:6689`
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({
  Procent_104_26 = true,
  Position = "Right",
  State = "Disabled",
  Procent = "0%",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`progressbar-container ${className}`}
      style={style}
      data-figma-layer="Progress Bar"
      data-figma-page="nav bar"
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          nav bar / Progress Bar
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          181:6689
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Position=Right, State=Active, Procent=0%</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(237, 239, 254)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 1</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(237, 239, 254)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 2</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(237, 239, 254)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 3</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(237, 239, 254)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 4</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(237, 239, 254)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 5</span>
</div>
</div>
<span style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(19, 25, 39)', display: 'inline-block' }}>0%</span>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Position=Right, State=Disabled, Procent=0%</div>
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
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Position=Right, State=Active, Procent=20%</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(17, 94, 89)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 1</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(237, 239, 254)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 2</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(237, 239, 254)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 3</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(237, 239, 254)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 4</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(237, 239, 254)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 5</span>
</div>
</div>
<span style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(19, 25, 39)', display: 'inline-block' }}>20%</span>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Position=Right, State=Active, Procent=40%</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(17, 94, 89)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 1</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(17, 94, 89)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 2</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(237, 239, 254)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 3</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(237, 239, 254)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 4</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(237, 239, 254)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 5</span>
</div>
</div>
<span style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(19, 25, 39)', display: 'inline-block' }}>40%</span>
</div>
          </div>
      </div>

      <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '11px', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '8px' }}>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>Procent_104_26: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(Procent_104_26)}</span>
        </div>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>Position: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(Position)}</span>
        </div>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>State: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(State)}</span>
        </div>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>Procent: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(Procent)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
