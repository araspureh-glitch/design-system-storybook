import React from 'react';
import './Card2.css';
import { BadgeContent } from '../AlertsState/AlertsState';

export interface Card2Props {
  Property_1?: 'active' | 'hover' | 'selected';
  className?: string;
  style?: React.CSSProperties;
  showIcon?: boolean;
  title?: string;
  subHeading?: string;
  badgeVariant?: 'safe' | 'alert' | 'warning' | 'b warning' | 'b alert' | 'b safe';
  badgeText?: string;
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
  variant: 'active' | 'hover' | 'selected';
  showIcon?: boolean;
  title?: string;
  subHeading?: string;
  badgeVariant?: 'safe' | 'alert' | 'warning' | 'b warning' | 'b alert' | 'b safe';
  badgeText?: string;
}

const CardContent: React.FC<CardContentProps> = ({ 
  variant, 
  showIcon = true,
  title = "High Spike Detected",
  subHeading = "Zone 2 – Industrial Area",
  badgeVariant = "alert",
  badgeText
}) => {
  return (
    <div className={`card2-card ${variant}`}>
      {/* Top Row */}
      <div className="card2-header">
        <div className="card2-alert-icon">
          {showIcon && <AlertIcon />}
        </div>
        <BadgeContent variant={badgeVariant} labelText={badgeText} />
      </div>
      
      {/* Content Group */}
      <div className="card2-content-group">
        <h3 className="card2-title">{title}</h3>
        <p className="card2-subheading">{subHeading}</p>
      </div>
    </div>
  );
};

/**
 * **Preserved Figma Layer Name**: `card 2 `
 * Page: `cards`
 * Type: `COMPONENT_SET`
 * ID: `180:4619`
 */
export const Card2: React.FC<Card2Props> = ({
  Property_1 = "active",
  className = '',
  style = {},
  showIcon = true,
  title,
  subHeading,
  badgeVariant,
  badgeText,
  ...props
}) => {
  return (
    <div 
      className={`card2-container ${className}`}
      style={style}
      data-figma-layer="card 2 "
      data-figma-page="cards"
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          cards / card 2 
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          180:4619
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div className="card2-variant-wrapper">
          <div className="card2-variant-label">Variant: Property 1={Property_1}</div>
          <CardContent 
            variant={Property_1} 
            showIcon={showIcon}
            title={title}
            subHeading={subHeading}
            badgeVariant={badgeVariant}
            badgeText={badgeText}
          />
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

export default Card2;
