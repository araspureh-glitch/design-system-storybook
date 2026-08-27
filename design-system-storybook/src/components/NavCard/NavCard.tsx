import React from 'react';
import './NavCard.css';

export interface NavCardProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `nav card `
 * Page: `nav bar`
 * Type: `INSTANCE`
 * ID: `181:4807`
 */
export const NavCard: React.FC<NavCardProps> = ({

  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`navcard-container ${className}`}
      style={style}
      data-figma-layer="nav card "
      data-figma-page="nav bar"
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          nav bar / nav card 
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          181:4807
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '7px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '24px', fontWeight: 600, color: 'rgb(0, 60, 66)', display: 'inline-block' }}>System Usage Analysis</span>
<span style={{ fontSize: '16px', fontWeight: 500, color: 'rgb(0, 60, 66)', display: 'inline-block' }}>(Mounth)</span>
</div>
<span style={{ fontSize: '18px', fontWeight: 400, color: 'rgb(0, 60, 66)', display: 'inline-block' }}>Detailed breakdown of energy consumption across city system</span>
</div>
<div style={{ display: 'flex', flexDirection: 'column', gap: '11px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '20px', fontWeight: 600, color: 'rgb(0, 60, 66)', display: 'inline-block' }}>Total Consumption</span>
<span style={{ fontSize: '32px', fontWeight: 500, color: 'rgb(0, 60, 66)', display: 'inline-block' }}>4,990 MW</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '69px', padding: '6px 0px 6px 0px', borderRadius: '13px', background: 'rgb(222, 239, 241)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '10px', padding: '5px 106px 5px 106px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '20px', fontWeight: 600, color: 'rgb(0, 60, 66)', display: 'inline-block' }}>Overview</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '10px', padding: '5px 115px 6px 106px', borderRadius: '13px', background: 'rgb(255, 255, 255)', alignItems: 'center' }}>
<span style={{ fontSize: '20px', fontWeight: 600, color: 'rgb(0, 60, 66)', display: 'inline-block' }}>Efficiency</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '10px', padding: '5px 106px 5px 106px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '20px', fontWeight: 600, color: 'rgb(0, 60, 66)', display: 'inline-block' }}>Peak Analysis</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '10px', padding: '5px 106px 5px 106px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '20px', fontWeight: 600, color: 'rgb(0, 60, 66)', display: 'inline-block' }}>Trends</span>
</div>
</div>
      </div>


    </div>
  );
};

export default NavCard;
