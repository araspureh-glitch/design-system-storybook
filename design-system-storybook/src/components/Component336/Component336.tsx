import React, { useState } from 'react';
import './Component336.css';

export interface Component336Props {
  /** Figma variant property: 'Frame 601' (Default), 'Frame 602' (Non Renewable active), 'Frame 603' (Renewable active) */
  Property_1?: 'Frame 601' | 'Frame 602' | 'Frame 603';
  /** Title of the card */
  title?: string;
  /** Renewable Energy label */
  renewableLabel?: string;
  /** Renewable Energy kWh value text */
  renewableValue?: string;
  /** Renewable Energy percentage (0-100) */
  renewablePercent?: number;
  /** Non Renewable Energy label */
  nonRenewableLabel?: string;
  /** Non Renewable Energy kWh value text */
  nonRenewableValue?: string;
  /** Non Renewable Energy percentage (0-100) */
  nonRenewablePercent?: number;
  /** Center circle value text or number */
  centerValue?: string | number;
  /** Center circle month/period text */
  centerMonth?: string;
  /** Optional container class name */
  className?: string;
  /** Optional inline styles */
  style?: React.CSSProperties;
  /** Callback fired when a legend item is hovered */
  onItemHover?: (item: 'renewable' | 'non-renewable' | null) => void;
  /** Callback fired when a legend item is clicked */
  onItemClick?: (item: 'renewable' | 'non-renewable') => void;
}

/**
 * **Renewable vs Non Renewable Energy Card** (`Component 336`)
 * 
 * Page: `cards` | Node ID: `4:639` | Type: `COMPONENT_SET`
 * 
 * Features:
 * - Interactive Donut Chart with inner dotted ring & center metric badge
 * - Renewable vs Non-Renewable Energy metric rows with hover/active shadow elevations
 * - Figma variant compatibility (`Frame 601`, `Frame 602`, `Frame 603`)
 */
export const Component336: React.FC<Component336Props> = ({
  Property_1 = 'Frame 601',
  title = 'Renewable vs Non Renewable Energy',
  renewableLabel = 'Renewable Energy',
  renewableValue = '3,120 kWh',
  renewablePercent = 25,
  nonRenewableLabel = 'Non Renewable Energy',
  nonRenewableValue = '9,330 kWh',
  nonRenewablePercent = 75,
  centerValue = '100',
  centerMonth = 'November',
  className = '',
  style = {},
  onItemHover,
  onItemClick,
  ...props
}) => {
  const [hoveredItem, setHoveredItem] = useState<'renewable' | 'non-renewable' | null>(null);

  // Determine active elevated item based on Figma variant or local hover
  const activeItem = hoveredItem || (
    Property_1 === 'Frame 603' ? 'renewable' : 
    Property_1 === 'Frame 602' ? 'non-renewable' : 
    null
  );

  const isCardElevated = activeItem !== null || Property_1 !== 'Frame 601';

  // SVG Donut Calculations — matching Figma arcData precisely
  // Figma: Ellipse 49 (non-renewable): endingAngle=-1.5707 (~90° = 25% of circle — this is the RENEWABLE slice)
  // Figma: Ellipse 48 (renewable): endingAngle=-4.71238 (~270° = 75% of circle — this is the NON-RENEWABLE slice)
  // The donut track sits between r≈56 (inner) and r≈83 (outer)
  const cx = 82.5;
  const cy = 82.5;
  const outerRadius = 82;
  const strokeWidth = 26;
  const radius = outerRadius - strokeWidth / 2; // ≈ 69
  const circumference = 2 * Math.PI * radius;

  // Gap between segments in px (visually separates slices)
  const GAP = 2;

  const clampedRenewablePercent = Math.min(100, Math.max(0, renewablePercent));
  const clampedNonRenewablePercent = Math.min(100 - clampedRenewablePercent, Math.max(0, nonRenewablePercent));

  const renewableDash = Math.max(0, (clampedRenewablePercent / 100) * circumference - GAP);
  const nonRenewableDash = Math.max(0, (clampedNonRenewablePercent / 100) * circumference - GAP);
  // Non-renewable starts at top (offset 0), renewable offset = nonRenewableDash + GAP
  const renewableOffset = -(nonRenewableDash + GAP);

  // Inner circle radius: from Figma innerRadius = 0.68 × (outerRadius) ≈ 56px
  const innerCircleRadius = Math.round(outerRadius * 0.68);

  const handleMouseEnter = (item: 'renewable' | 'non-renewable') => {
    setHoveredItem(item);
    onItemHover?.(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    onItemHover?.(null);
  };

  const handleClick = (item: 'renewable' | 'non-renewable') => {
    onItemClick?.(item);
  };

  return (
    <div
      className={`c336-card ${isCardElevated ? 'c336-card-elevated' : ''} ${className}`}
      style={style}
      data-figma-layer="Component 336"
      data-figma-page="cards"
      data-figma-node-id="4:639"
      {...props}
    >
      {/* Left Column: Title & Legend Items */}
      <div className="c336-left-section">
        <h3 className="c336-title">{title}</h3>

        <div className="c336-legend-list">
          {/* Renewable Energy Item */}
          <div
            className={`c336-legend-item ${activeItem === 'renewable' ? 'c336-item-active' : ''}`}
            onMouseEnter={() => handleMouseEnter('renewable')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('renewable')}
            role="button"
            tabIndex={0}
            aria-label={`${renewableLabel}: ${renewableValue}, ${clampedRenewablePercent}%`}
          >
            <div className="c336-item-left">
              <span className="c336-indicator-pill c336-indicator-renewable" />
              <div className="c336-item-details">
                <span className="c336-item-label">{renewableLabel}</span>
                <span className="c336-item-value">{renewableValue}</span>
              </div>
            </div>
            <div className="c336-item-right">
              <span className="c336-item-percent">{clampedRenewablePercent}%</span>
            </div>
          </div>

          {/* Non Renewable Energy Item */}
          <div
            className={`c336-legend-item ${activeItem === 'non-renewable' ? 'c336-item-active' : ''}`}
            onMouseEnter={() => handleMouseEnter('non-renewable')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('non-renewable')}
            role="button"
            tabIndex={0}
            aria-label={`${nonRenewableLabel}: ${nonRenewableValue}, ${clampedNonRenewablePercent}%`}
          >
            <div className="c336-item-left">
              <span className="c336-indicator-pill c336-indicator-non-renewable" />
              <div className="c336-item-details">
                <span className="c336-item-label">{nonRenewableLabel}</span>
                <span className="c336-item-value">{nonRenewableValue}</span>
              </div>
            </div>
            <div className="c336-item-right">
              <span className="c336-item-percent">{clampedNonRenewablePercent}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Donut Chart */}
      <div className="c336-right-section">
        <svg
          width="165"
          height="165"
          viewBox="0 0 165 165"
          className="c336-donut-svg"
          aria-label={`Donut chart: ${clampedRenewablePercent}% renewable, ${clampedNonRenewablePercent}% non-renewable`}
        >
          <defs>
            {/* Non-renewable gradient — dark teal gradient like Figma */}
            <linearGradient id="c336-non-renewable-grad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E5C64" />
              <stop offset="83%" stopColor="#30848D" />
            </linearGradient>

            <filter id="c336-center-badge-shadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#92E3BD" floodOpacity="0.20" />
            </filter>
          </defs>

          {/* Background track circle — light grey base ring (Ellipse 24 equivalent) */}
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="transparent"
            stroke="#E8F5F7"
            strokeWidth={strokeWidth}
          />

          {/* Donut Segment: Non-Renewable (75%) — starts at top, goes clockwise */}
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="transparent"
            stroke="url(#c336-non-renewable-grad)"
            strokeWidth={strokeWidth}
            strokeDasharray={`${nonRenewableDash} ${circumference}`}
            strokeDashoffset="0"
            strokeLinecap="butt"
            transform={`rotate(-90 ${cx} ${cy})`}
            className="c336-donut-segment"
          />

          {/* Donut Segment: Renewable (25%) — follows after non-renewable */}
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="transparent"
            stroke="#67B7BE"
            strokeWidth={strokeWidth}
            strokeDasharray={`${renewableDash} ${circumference}`}
            strokeDashoffset={`${renewableOffset}`}
            strokeLinecap="butt"
            transform={`rotate(-90 ${cx} ${cy})`}
            className="c336-donut-segment"
          />

          {/* Inner Dotted Ring — between donut and center badge */}
          <circle
            cx={cx}
            cy={cy}
            r={innerCircleRadius}
            fill="transparent"
            stroke="#C2E8EB"
            strokeWidth="1.5"
            strokeDasharray="2.5 3.5"
            className="c336-dotted-ring"
          />

          {/* Center White Badge Circle — Ellipse 23 equivalent */}
          <circle
            cx={cx}
            cy={cy}
            r="33"
            fill="#FFFFFF"
            filter="url(#c336-center-badge-shadow)"
          />

          {/* Center Metric Text: Value */}
          <text
            x={cx}
            y={cy - 7}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#292D30"
            className="c336-center-value"
          >
            {centerValue}
          </text>

          {/* Center Metric Text: Month */}
          <text
            x={cx}
            y={cy + 9}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#111111"
            className="c336-center-month"
          >
            {centerMonth}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Component336;
