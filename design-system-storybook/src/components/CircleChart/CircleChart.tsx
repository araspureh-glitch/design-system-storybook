import React from 'react';
import './CircleChart.css';

export interface CircleChartProps {
  /** Variant size of the card */
  variant?: 'small' | 'medium' | 'large';
  /** Title text */
  title?: string;
  /** Renewable energy value in kWh */
  renewableKwh?: string;
  /** Renewable energy percentage (0–100) */
  renewablePercent?: number;
  /** Non-renewable energy value in kWh */
  nonRenewableKwh?: string;
  /** Non-renewable energy percentage (0–100) */
  nonRenewablePercent?: number;
  /** Center label (e.g. month name) */
  centerLabel?: string;
  /** Center value */
  centerValue?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Renewable vs Non Renewable Energy** donut chart card.
 * Figma Node ID: 4-639
 * Page: charts
 * Type: COMPONENT_SET
 */
export const CircleChart: React.FC<CircleChartProps> = ({
  variant = 'small',
  title = 'Renewable vs Non Renewable Energy',
  renewableKwh = '3,120 kWh',
  renewablePercent = 25,
  nonRenewableKwh = '9,330 kWh',
  nonRenewablePercent = 75,
  centerLabel = 'November',
  centerValue = 100,
  className = '',
  style = {},
}) => {
  // SVG donut chart geometry
  const sizeMap = {
    small:  { card: 280, donut: 70, stroke: 14, cx: 35, r: 26 },
    medium: { card: 320, donut: 80, stroke: 15, cx: 40, r: 30 },
    large:  { card: 360, donut: 90, stroke: 16, cx: 45, r: 34 },
  };
  const { card, donut, stroke, cx, r } = sizeMap[variant];
  const circumference = 2 * Math.PI * r;
  const renewableDash   = (renewablePercent / 100) * circumference;
  const nonRenewableDash = (nonRenewablePercent / 100) * circumference;
  const gap = 2; // small gap between segments

  // renewable starts at top (−90°), non-renewable follows
  const renewableOffset   = circumference * 0.25; // start at top
  const nonRenewableOffset = -(nonRenewableDash - circumference * 0.25) + gap;

  return (
    <div
      className={`cc-card cc-card--${variant} ${className}`}
      style={{ width: card, ...style }}
      data-figma-node="4-639"
    >
      {/* Title */}
      <h3 className="cc-title">{title}</h3>

      <div className="cc-body">
        {/* Legend */}
        <div className="cc-legend">
          <div className="cc-legend-item">
            <span className="cc-dot cc-dot--renewable" />
            <div className="cc-legend-text">
              <span className="cc-legend-label">Renewable Energy</span>
              <span className="cc-legend-kwh">{renewableKwh}</span>
            </div>
            <span className="cc-legend-pct cc-legend-pct--renewable">
              {renewablePercent}%
            </span>
          </div>

          <div className="cc-legend-item">
            <span className="cc-dot cc-dot--nonrenewable" />
            <div className="cc-legend-text">
              <span className="cc-legend-label">Non Renewable Energy</span>
              <span className="cc-legend-kwh">{nonRenewableKwh}</span>
            </div>
            <span className="cc-legend-pct cc-legend-pct--nonrenewable">
              {nonRenewablePercent}%
            </span>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="cc-donut-wrap">
          <svg
            width={donut}
            height={donut}
            viewBox={`0 0 ${cx * 2} ${cx * 2}`}
            className="cc-donut-svg"
          >
            {/* Background track */}
            <circle
              cx={cx}
              cy={cx}
              r={r}
              fill="none"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth={stroke}
            />
            {/* Non-renewable segment (dark teal) — bottom 75% */}
            <circle
              cx={cx}
              cy={cx}
              r={r}
              fill="none"
              stroke="#1a4a50"
              strokeWidth={stroke}
              strokeDasharray={`${nonRenewableDash - gap} ${circumference - nonRenewableDash + gap}`}
              strokeDashoffset={-(renewableDash) + circumference * 0.25 - gap / 2}
              strokeLinecap="round"
              style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
            />
            {/* Renewable segment (bright teal) — top 25% */}
            <circle
              cx={cx}
              cy={cx}
              r={r}
              fill="none"
              stroke="#3dbdca"
              strokeWidth={stroke}
              strokeDasharray={`${renewableDash - gap} ${circumference - renewableDash + gap}`}
              strokeDashoffset={circumference * 0.25}
              strokeLinecap="round"
              style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
            />
            {/* Center text */}
            <text
              x={cx}
              y={cx - 5}
              textAnchor="middle"
              dominantBaseline="middle"
              className="cc-center-value"
            >
              {centerValue}
            </text>
            <text
              x={cx}
              y={cx + 8}
              textAnchor="middle"
              dominantBaseline="middle"
              className="cc-center-label"
            >
              {centerLabel}
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CircleChart;
