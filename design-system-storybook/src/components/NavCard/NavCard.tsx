import React from 'react';
import './NavCard.css';
import { NavLine } from '../NavLine/NavLine';

export interface NavCardProps {
  /** Title text */
  title?: string;
  /** Subtitle context suffix */
  timeframe?: string;
  /** Detailed subtitle description */
  description?: string;
  /** Label for total measurement value */
  totalLabel?: string;
  /** Total value representation */
  totalValue?: string;
  /** Default active tab: 'Overview' | 'Efficiency' | 'Peak Analysis' | 'Trends' */
  defaultActiveTab?: 'Overview' | 'Efficiency' | 'Peak Analysis' | 'Trends';
  className?: string;
  style?: React.CSSProperties;
  onTabChange?: (tab: 'Overview' | 'Efficiency' | 'Peak Analysis' | 'Trends') => void;
}

/**
 * **Nav Card** component (Figma Node: 181:4807)
 * 
 * A premium white card displaying system usage analysis stats
 * combined with an interactive horizontal segment tab selector.
 */
export const NavCard: React.FC<NavCardProps> = ({
  title = 'System Usage Analysis',
  timeframe = '(Month)',
  description = 'Detailed breakdown of energy consumption across city system',
  totalLabel = 'Total Consumption',
  totalValue = '4,990 MW',
  defaultActiveTab = 'Efficiency',
  className = '',
  style = {},
  onTabChange,
}) => {
  // Map defaultActiveTab to Property_1 of NavLine
  // defaultActiveTab === 'Efficiency' -> Default (hover) or Variant3 (selected)
  // Let's use Variant3 to indicate Selected state
  const getNavLineVariant = () => {
    if (defaultActiveTab === 'Efficiency') return 'Variant3';
    return 'Variant2';
  };

  return (
    <div
      className={`nav-card-box ${className}`}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '28px',
        padding: '24px 32px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        fontFamily: 'Inter, sans-serif',
        width: '100%',
        maxWidth: '1504px',
        boxSizing: 'border-box',
        ...style
      }}
      data-figma-node="181:4807"
    >
      {/* Top Header Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
        {/* Left Side */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
            <h2
              style={{
                fontSize: '22px',
                fontWeight: '700',
                color: '#105e68', // Dark teal color
                margin: 0,
              }}
            >
              {title}
            </h2>
            <span
              style={{
                fontSize: '13px',
                fontWeight: '600',
                color: '#64748b',
              }}
            >
              {timeframe}
            </span>
          </div>
          <p
            style={{
              fontSize: '14px',
              color: '#475569',
              margin: '6px 0 0 0',
              lineHeight: '1.4',
            }}
          >
            {description}
          </p>
        </div>

        {/* Right Side */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', minWidth: '150px' }}>
          <span
            style={{
              fontSize: '13px',
              fontWeight: '500',
              color: '#64748b',
              marginBottom: '4px',
            }}
          >
            {totalLabel}
          </span>
          <span
            style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#0f766e', // Medium dark teal
            }}
          >
            {totalValue}
          </span>
        </div>
      </div>

      {/* Bottom Segment Control Tabs */}
      <NavLine
        Property_1={getNavLineVariant()}
        onTabChange={onTabChange}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default NavCard;
