import React from 'react';
import './Card3.css';
import { BadgeContent } from '../AlertsState/AlertsState';

export interface Card3Props {
  Property_1?: 'Default' | 'hover';
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  subHeading?: string;
  description?: string;
  valueText?: string;
  leftBadgeVariant?: 'safe' | 'alert' | 'warning' | 'b warning' | 'b alert' | 'b safe';
  leftBadgeText?: string;
  rightBadgeVariant?: 'safe' | 'alert' | 'warning' | 'b warning' | 'b alert' | 'b safe';
  rightBadgeText?: string;
}

interface CardContentProps {
  variant: 'Default' | 'hover';
  title?: string;
  subHeading?: string;
  description?: string;
  valueText?: string;
  leftBadgeVariant?: 'safe' | 'alert' | 'warning' | 'b warning' | 'b alert' | 'b safe';
  leftBadgeText?: string;
  rightBadgeVariant?: 'safe' | 'alert' | 'warning' | 'b warning' | 'b alert' | 'b safe';
  rightBadgeText?: string;
}

const CardContent: React.FC<CardContentProps> = ({ 
  variant, 
  title = "Westpark-West (Green & Recreational District)",
  subHeading = "Green & Recreational District",
  description = "Mix of university campuses, museums, and cafes moderate daytime peaks.",
  valueText = "~1050MW",
  leftBadgeVariant = "alert",
  leftBadgeText,
  rightBadgeVariant,
  rightBadgeText
}) => {
  // Determine default right badge variant based on component state if not explicitly passed
  const activeRightBadgeVariant = rightBadgeVariant || (variant === 'hover' ? 'b warning' : 'b alert');

  return (
    <div className={`card3-card ${variant}`}>
      {/* Title and Subheading */}
      <div className="card3-title-group">
        <h3 className="card3-title">{title}</h3>
        <p className="card3-subheading">{subHeading}</p>
      </div>

      {/* Description */}
      <p className="card3-description">{description}</p>

      {/* Bottom Row */}
      <div className="card3-bottom-row">
        <div className="card3-value-group">
          <span className="card3-value">{valueText}</span>
          <BadgeContent variant={leftBadgeVariant} labelText={leftBadgeText} />
        </div>
        <BadgeContent variant={activeRightBadgeVariant} labelText={rightBadgeText} />
      </div>
    </div>
  );
};

/**
 * **Preserved Figma Layer Name**: `card 3 `
 * Page: `cards`
 * Type: `COMPONENT_SET`
 * ID: `181:4698`
 */
export const Card3: React.FC<Card3Props> = ({
  Property_1 = "Default",
  className = '',
  style = {},
  title,
  subHeading,
  description,
  valueText,
  leftBadgeVariant,
  leftBadgeText,
  rightBadgeVariant,
  rightBadgeText,
  ...props
}) => {
  return (
    <div 
      className={`card3-container ${className}`}
      style={style}
      data-figma-layer="card 3 "
      data-figma-page="cards"
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          cards / card 3 
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          181:4698
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div className="card3-variant-wrapper">
          <div className="card3-variant-label">Variant: Property 1={Property_1}</div>
          <CardContent 
            variant={Property_1} 
            title={title}
            subHeading={subHeading}
            description={description}
            valueText={valueText}
            leftBadgeVariant={leftBadgeVariant}
            leftBadgeText={leftBadgeText}
            rightBadgeVariant={rightBadgeVariant}
            rightBadgeText={rightBadgeText}
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

export default Card3;
