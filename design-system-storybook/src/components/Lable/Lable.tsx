import React from 'react';
import './Lable.css';

export interface LableProps {
  Boolean_35_8?: boolean;
  Property_1?: 'Default' | 'hover';
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  subtitle?: string;
  avatarLetter?: string;
}

interface LableContentProps {
  state: 'Default' | 'hover';
  title: string;
  subtitle: string;
  avatarLetter: string;
  showSubtitle?: boolean;
}

const LableContent: React.FC<LableContentProps> = ({ 
  state, 
  title, 
  subtitle, 
  avatarLetter, 
  showSubtitle = true 
}) => {
  return (
    <div className="lable-row">
      <div className={`lable-avatar ${state}`}>
        <span className="lable-avatar-text">{avatarLetter}</span>
      </div>
      <div className="lable-details">
        <h4 className="lable-title">{title}</h4>
        {showSubtitle && <p className="lable-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

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
  title = "High Spike Detected",
  subtitle = "Zone 2 – Industrial Area",
  avatarLetter = "P",
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
      {/* Header Info */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          components / lable
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          35:1599
        </span>
      </div>

      {/* Section 1: Single Selected State Preview */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
        <div className="lable-variant-wrapper" style={{ margin: 0 }}>
          <div className="lable-variant-label">Active State Preview (Property_1 = {Property_1})</div>
          <LableContent 
            state={Property_1} 
            title={title} 
            subtitle={subtitle} 
            avatarLetter={avatarLetter} 
            showSubtitle={Boolean_35_8}
          />
        </div>
      </div>

      {/* Section 2: All States Combined View */}
      <div style={{ borderTop: '1px dashed rgba(255,255,255,0.15)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          All States Combined Showcase
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {(['Default', 'hover'] as const).map((state) => (
            <div key={state} className="lable-variant-wrapper" style={{ margin: 0 }}>
              <div className="lable-variant-label">State: {state}</div>
              <LableContent 
                state={state} 
                title={title} 
                subtitle={subtitle} 
                avatarLetter={avatarLetter} 
                showSubtitle={Boolean_35_8}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Debug Properties Footer */}
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
