import React from 'react';
import './AlertsState.css';

export interface AlertsStateProps {
  Boolean_53_0?: boolean;
  Property_1?: 'safe' | 'alert' | 'warning' | 'b warning' | 'b alert' | 'b safe';
  className?: string;
  style?: React.CSSProperties;
}

interface BadgeContentProps {
  variant: 'safe' | 'alert' | 'warning' | 'b warning' | 'b alert' | 'b safe';
}

export const BadgeContent: React.FC<BadgeContentProps> = ({ variant }) => {
  const cssClass = variant.replace(' ', '_');
  
  let labelText = '';
  switch (variant) {
    case 'safe':
      labelText = '-8.4%';
      break;
    case 'b safe':
      labelText = 'Low';
      break;
    case 'alert':
      labelText = '+2.11%';
      break;
    case 'b alert':
      labelText = 'High';
      break;
    case 'warning':
      labelText = '+0.11%';
      break;
    case 'b warning':
      labelText = 'Medium';
      break;
  }

  return (
    <div className={`alertsstate-badge ${cssClass}`}>
      <span className={`alertsstate-text ${cssClass}`}>{labelText}</span>
    </div>
  );
};

/**
 * **Preserved Figma Layer Name**: `alerts state `
 * Page: `cards`
 * Type: `COMPONENT_SET`
 * ID: `180:4677`
 */
export const AlertsState: React.FC<AlertsStateProps> = ({
  Boolean_53_0 = true,
  Property_1 = "safe",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`alertsstate-container ${className}`}
      style={style}
      data-figma-layer="alerts state "
      data-figma-page="cards"
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          cards / alerts state 
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          180:4677
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div className="alertsstate-variant-wrapper">
          <div className="alertsstate-variant-label">Variant: Property 1={Property_1}</div>
          <BadgeContent variant={Property_1} />
        </div>
      </div>

      <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '11px', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '8px' }}>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>Boolean_53_0: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(Boolean_53_0)}</span>
        </div>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>Property_1: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(Property_1)}</span>
        </div>
      </div>
    </div>
  );
};

export default AlertsState;
