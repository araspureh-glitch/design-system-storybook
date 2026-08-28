import React from 'react';
import './Icons.css';

export interface IconsProps {
  Property_1?: 'Dashboard' | 'Energy Grid' | 'Log Out' | 'Reports' | 'Settings' | 'Smart Systems' | 'Sustainability';
  className?: string;
  style?: React.CSSProperties;
}

interface SingleIconProps {
  type: 'Dashboard' | 'Energy Grid' | 'Log Out' | 'Reports' | 'Settings' | 'Smart Systems' | 'Sustainability';
}

export const SingleIcon: React.FC<SingleIconProps> = ({ type }) => {
  switch (type) {
    case 'Dashboard':
      return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#018793" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="icon-display-svg">
          <line x1="6" y1="28" x2="28" y2="28" />
          <line x1="6" y1="6" x2="6" y2="28" />
          <path d="M6 22L12 16L18 20L28 8" />
        </svg>
      );
    case 'Sustainability':
      return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#018793" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-display-svg">
          <path d="M17 2L20.5 7.5L27 6L25.5 12.5L31 16L25.5 19.5L27 26L20.5 24.5L17 30L13.5 24.5L7 26L8.5 19.5L3 16L8.5 12.5L7 6L13.5 7.5Z" fill="#018793" stroke="none" />
          <path d="M17 10C13 10 12 14 12 18C12 21 15 22 17 22C19 22 22 21 22 18C22 14 21 10 17 10Z" stroke="#ffffff" strokeWidth="1.5" />
          <path d="M18 12L15 17H18L16 20" stroke="#ffffff" strokeWidth="1.5" />
        </svg>
      );
    case 'Energy Grid':
      return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#018793" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="icon-display-svg">
          <circle cx="17" cy="17" r="5" fill="#018793" stroke="none" />
          <path d="M25 11C28 14 28 20 25 23C24.5 23.5 23.5 24.5 22 25" />
          <path d="M9 23C6 20 6 14 9 11C9.5 10.5 10.5 9.5 12 9" />
          <circle cx="22" cy="25" r="2.5" fill="#018793" stroke="none" />
          <circle cx="12" cy="9" r="2.5" fill="#018793" stroke="none" />
        </svg>
      );
    case 'Smart Systems':
      return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#018793" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="icon-display-svg">
          <path d="M4 8C4 6.9 4.9 6 6 6H13L16 10H28C29.1 10 30 10.9 30 12V24C30 25.1 29.1 26 28 26H6C4.9 26 4 25.1 4 24V8Z" fill="#018793" stroke="none" />
          <circle cx="25" cy="22" r="6" fill="#018793" stroke="#1e293b" strokeWidth="2.5" />
          <circle cx="25" cy="22" r="1.5" fill="#1e293b" />
          <path d="M25 18V20M25 24V26M21 22H23M27 22H29" stroke="#1e293b" strokeWidth="2" />
        </svg>
      );
    case 'Reports':
      return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#018793" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="icon-display-svg">
          <path d="M8 4H20L28 12V28C28 29.1 27.1 30 26 30H8C6.9 30 6 29.1 6 28V6C6 4.9 6.9 4 8 4Z" fill="#018793" stroke="none" />
          <path d="M20 4V12H28" stroke="#1e293b" strokeWidth="2" />
          <line x1="11" y1="26" x2="11" y2="18" stroke="#1e293b" strokeWidth="2.5" />
          <line x1="16" y1="26" x2="16" y2="15" stroke="#1e293b" strokeWidth="2.5" />
          <line x1="21" y1="26" x2="21" y2="21" stroke="#1e293b" strokeWidth="2.5" />
        </svg>
      );
    case 'Settings':
      return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#018793" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="icon-display-svg">
          <circle cx="17" cy="17" r="6" />
          <path d="M17 7V9M17 25V27M7 17H9M25 17H27" stroke="#018793" strokeWidth="2.5" />
          <path d="M10 10L11.5 11.5M22.5 22.5L24 24M10 24L11.5 22.5M22.5 11.5L24 10" stroke="#018793" strokeWidth="2.5" />
        </svg>
      );
    case 'Log Out':
      return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#018793" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="icon-display-svg">
          <path d="M16 6H26C27.1 6 28 6.9 28 8V26C28 27.1 27.1 28 26 28H16" />
          <path d="M17 17H6M6 17L12 11M6 17L12 23" />
        </svg>
      );
    default:
      return null;
  }
};

/**
 * **Preserved Figma Layer Name**: `icons`
 * Page: `components`
 * Type: `COMPONENT_SET`
 * ID: `180:4419`
 */
export const Icons: React.FC<IconsProps> = ({
  Property_1 = "Dashboard",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`icons-container ${className}`}
      style={style}
      data-figma-layer="icons"
      data-figma-page="components"
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          components / icons
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          180:4419
        </span>
      </div>

      {/* Section 1: Selected Active Icon Preview */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
        <div className="icons-variant-wrapper">
          <div className="icons-variant-label">Active Preview (Property_1 = {Property_1})</div>
          <div className="icon-display-box">
            <SingleIcon type={Property_1} />
          </div>
        </div>
      </div>

      {/* Section 2: All Icons Showcase */}
      <div style={{ borderTop: '1px dashed rgba(255,255,255,0.15)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          All Icons Combined Showcase
        </div>
        <div className="icons-grid">
          {(['Dashboard', 'Sustainability', 'Energy Grid', 'Smart Systems', 'Reports', 'Settings', 'Log Out'] as const).map((type) => (
            <div key={type} className="icons-variant-wrapper" style={{ margin: 0 }}>
              <div className="icons-variant-label">{type}</div>
              <div className="icon-display-box">
                <SingleIcon type={type} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '11px', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '8px' }}>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>Property_1: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(Property_1)}</span>
        </div>
      </div>
    </div>
  );
};

export default Icons;
