import React from 'react';
import './Nav.css';

export interface NavProps {
  Property_1?: 'hover' | 'blank' | 'selected';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `nav `
 * Page: `nav bar`
 * Type: `COMPONENT_SET`
 * ID: `181:4800`
 */
export const Nav: React.FC<NavProps> = ({
  Property_1 = "hover",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`nav-container ${className}`}
      style={style}
      data-figma-layer="nav "
      data-figma-page="nav bar"
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          nav bar / nav 
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          181:4800
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=hover</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', padding: '5px 115px 6px 106px', borderRadius: '13px', background: 'rgb(255, 255, 255)', alignItems: 'center' }}>
<span style={{ fontSize: '20px', fontWeight: 600, color: 'rgb(0, 60, 66)', display: 'inline-block' }}>Overview</span>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=blank</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', padding: '5px 106px 5px 106px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '20px', fontWeight: 600, color: 'rgb(0, 60, 66)', display: 'inline-block' }}>Overview</span>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=selected</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', padding: '5px 106px 5px 106px', borderRadius: '13px', background: 'rgb(19, 78, 74)', alignItems: 'center' }}>
<span style={{ fontSize: '20px', fontWeight: 600, color: 'rgb(245, 250, 251)', display: 'inline-block' }}>Overview</span>
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

export default Nav;
