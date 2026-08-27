import React from 'react';
import './Condition.css';

export interface ConditionProps {
  Property_1?: 'good' | 'optimal' | 'excellent';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `condition `
 * Page: `nav bar`
 * Type: `COMPONENT_SET`
 * ID: `181:6753`
 */
export const Condition: React.FC<ConditionProps> = ({
  Property_1 = "good",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`condition-container ${className}`}
      style={style}
      data-figma-layer="condition "
      data-figma-page="nav bar"
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          nav bar / condition 
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          181:6753
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=good</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(1, 135, 147)', display: 'inline-block' }}>good</span>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=optimal</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(1, 135, 147)', display: 'inline-block' }}>optimal</span>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=excellent</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgb(255, 255, 255)', alignItems: 'center' }}>
<span style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(1, 135, 147)', display: 'inline-block' }}>excellent</span>
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

export default Condition;
