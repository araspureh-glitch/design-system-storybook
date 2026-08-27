import React, { useState } from 'react';
import './NavCard.css';

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
  const [activeTab, setActiveTab] = useState<'Overview' | 'Efficiency' | 'Peak Analysis' | 'Trends'>(defaultActiveTab);

  const tabs: ('Overview' | 'Efficiency' | 'Peak Analysis' | 'Trends')[] = [
    'Overview',
    'Efficiency',
    'Peak Analysis',
    'Trends',
  ];

  const handleTabClick = (tab: 'Overview' | 'Efficiency' | 'Peak Analysis' | 'Trends') => {
    setActiveTab(tab);
    onTabChange?.(tab);
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
        maxWidth: '860px',
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
      <div
        className="nav-card-tabs-track"
        style={{
          display: 'flex',
          backgroundColor: '#e5f2f5', // light mint/cyan background track
          borderRadius: '9999px',
          padding: '4px',
          height: '48px',
          alignItems: 'center',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`nav-card-tab-btn ${isActive ? 'nav-card-tab-btn--active' : ''}`}
              style={{
                flex: 1,
                border: 'none',
                height: '100%',
                backgroundColor: isActive ? '#ffffff' : 'transparent',
                borderRadius: '9999px',
                color: isActive ? '#105e68' : '#275259',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: isActive ? '0 2px 8px rgba(16, 94, 104, 0.08)' : 'none',
                outline: 'none',
                userSelect: 'none',
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default NavCard;
