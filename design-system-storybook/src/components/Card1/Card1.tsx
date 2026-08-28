import React from 'react';
import './Card1.css';

export interface Card1Props {
  Boolean_18_13?: boolean;
  Property_1?: 'active' | 'hover' | 'selected' | 'default';
  className?: string;
  style?: React.CSSProperties;
}

const AlertIcon: React.FC = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    <path 
      d="M10 3.3L2.5 16.5H17.5L10 3.3Z" 
      stroke="#c92a2a" 
      strokeWidth="1.73" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M10 7.5V11.5" 
      stroke="#c92a2a" 
      strokeWidth="1.73" 
      strokeLinecap="round"
    />
    <circle cx="10" cy="14" r="0.87" fill="#c92a2a" />
  </svg>
);

interface CardContentProps {
  variant: 'active' | 'hover' | 'selected' | 'default';
  showIcon?: boolean;
}

const CardContent: React.FC<CardContentProps> = ({ variant, showIcon = true }) => {
  return (
    <div className={`card1-card ${variant}`}>
      {/* Header Row */}
      <div className="card1-header">
        <h3 className="card1-title">Air Quality Index</h3>
        {showIcon && (
          <div className="card1-alert-icon">
            <AlertIcon />
          </div>
        )}
      </div>
      
      {/* Content Group */}
      <div className="card1-content-group">
        <div className="card1-aqi-row">
          <span className="card1-aqi-value">43.50</span>
          <span className="card1-aqi-label">AQI</span>
        </div>
        <p className="card1-energy">Renewable Energy: 54.86%</p>
        <div className="card1-badge-row">
          <div className="card1-badge">
            <span className="card1-badge-text">-8.4%</span>
          </div>
          <span className="card1-vs-text">vs Last Month</span>
        </div>
      </div>
    </div>
  );
};

/**
 * **Preserved Figma Layer Name**: `card 1`
 * Page: `cards`
 * Type: `COMPONENT_SET`
 * ID: `180:4576`
 */
export const Card1: React.FC<Card1Props> = ({
  Boolean_18_13 = true,
  Property_1 = "active",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`card1-container ${className}`}
      style={style}
      data-figma-layer="card 1"
      data-figma-page="cards"
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          cards / card 1
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          180:4576
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div className="card1-variant-wrapper">
          <div className="card1-variant-label">Variant: Property 1=active</div>
          <CardContent variant="active" showIcon={Boolean_18_13} />
        </div>
        
        <div className="card1-variant-wrapper">
          <div className="card1-variant-label">Variant: Property 1=hover</div>
          <CardContent variant="hover" showIcon={Boolean_18_13} />
        </div>
        
        <div className="card1-variant-wrapper">
          <div className="card1-variant-label">Variant: Property 1=selected</div>
          <CardContent variant="selected" showIcon={Boolean_18_13} />
        </div>
        
        <div className="card1-variant-wrapper">
          <div className="card1-variant-label">Variant: Property 1=default</div>
          <CardContent variant="default" showIcon={Boolean_18_13} />
        </div>
      </div>

      <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '11px', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '8px' }}>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>Boolean_18_13: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(Boolean_18_13)}</span>
        </div>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>Property_1: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(Property_1)}</span>
        </div>
      </div>
    </div>
  );
};

export default Card1;
