import React, { useState } from 'react';
import './EfficiencyTrends.css';

export interface EfficiencyTrendsDataPoint {
  month: string;
  value2025: number;
  value2024: number;
}

export interface EfficiencyTrendsProps {
  /** Figma variant: Default or hover */
  Property_1?: 'Default' | 'hover';
  /** Chart title */
  title?: string;
  /** Data for each month */
  data?: EfficiencyTrendsDataPoint[];
  /** Y-axis min value */
  yMin?: number;
  /** Y-axis max value */
  yMax?: number;
  /** Y-axis step */
  yStep?: number;
  /** Label for 2025 series */
  label2025?: string;
  /** Label for 2024 series */
  label2024?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DEFAULT_DATA: EfficiencyTrendsDataPoint[] = [
  { month: 'Jan', value2025: 95, value2024: 84 },
  { month: 'Feb', value2025: 93, value2024: 80 },
  { month: 'Mar', value2025: 94, value2024: 82 },
  { month: 'Apr', value2025: 93, value2024: 81 },
  { month: 'May', value2025: 93, value2024: 81 },
  { month: 'Jun', value2025: 93, value2024: 80 },
  { month: 'Jul', value2025: 93, value2024: 80 },
];

/**
 * **Efficiency Trends** grouped bar chart card
 * Figma Node ID: 180:4420
 * Page: charts
 * Type: COMPONENT_SET
 */
export const EfficiencyTrends: React.FC<EfficiencyTrendsProps> = ({
  Property_1 = 'Default',
  title = 'Efficiency trends',
  data = DEFAULT_DATA,
  yMin = 75,
  yMax = 95,
  yStep = 5,
  label2025 = '2025',
  label2024 = '2024',
  className = '',
  style = {},
}) => {
  const [hoveredBar, setHoveredBar] = useState<{ month: string; series: '2025' | '2024' } | null>(null);

  // Chart layout constants
  const chartWidth = 560;
  const chartHeight = 240;
  const paddingLeft = 32;
  const paddingRight = 16;
  const paddingTop = 8;
  const paddingBottom = 32;

  const plotWidth = chartWidth - paddingLeft - paddingRight;
  const plotHeight = chartHeight - paddingTop - paddingBottom;

  // Y axis ticks
  const yTicks: number[] = [];
  for (let v = yMin; v <= yMax; v += yStep) yTicks.push(v);

  // Helpers
  const yToPixel = (val: number) =>
    paddingTop + plotHeight - ((val - yMin) / (yMax - yMin)) * plotHeight;

  const groupCount = data.length;
  const groupWidth = plotWidth / groupCount;
  const barGap = 4;
  const barWidth = (groupWidth - barGap * 3) / 2;

  return (
    <div
      className={`et-card ${Property_1 === 'hover' ? 'et-card--hover' : ''} ${className}`}
      style={style}
      data-figma-node="180:4420"
      data-figma-layer="Efficiency trends"
    >
      {/* Header */}
      <div className="et-header">
        <h3 className="et-title">{title}</h3>
        <div className="et-legend">
          <span className="et-legend-item">
            <span className="et-legend-dot et-legend-dot--2025" />
            {label2025}
          </span>
          <span className="et-legend-item">
            <span className="et-legend-dot et-legend-dot--2024" />
            {label2024}
          </span>
        </div>
      </div>

      {/* SVG Chart */}
      <svg
        viewBox={`0 0 ${chartWidth} ${chartHeight + paddingBottom}`}
        width="100%"
        className="et-svg"
        aria-label="Efficiency trends bar chart"
      >
        {/* Dashed horizontal gridlines + Y labels */}
        {yTicks.map((tick) => {
          const y = yToPixel(tick);
          return (
            <g key={tick}>
              {/* Gridline */}
              <line
                x1={paddingLeft}
                y1={y}
                x2={chartWidth - paddingRight}
                y2={y}
                className="et-gridline"
              />
              {/* Y label */}
              <text
                x={paddingLeft - 6}
                y={y}
                className="et-axis-label"
                textAnchor="end"
                dominantBaseline="middle"
              >
                {tick}
              </text>
            </g>
          );
        })}

        {/* Bars */}
        {data.map((d, i) => {
          const groupX = paddingLeft + i * groupWidth + barGap;

          // 2025 bar (light teal) — left
          const x2025 = groupX;
          const h2025 = ((d.value2025 - yMin) / (yMax - yMin)) * plotHeight;
          const y2025 = yToPixel(d.value2025);

          // 2024 bar (dark teal) — right
          const x2024 = groupX + barWidth + barGap;
          const h2024 = ((d.value2024 - yMin) / (yMax - yMin)) * plotHeight;
          const y2024 = yToPixel(d.value2024);

          const isHovered2025 = hoveredBar?.month === d.month && hoveredBar.series === '2025';
          const isHovered2024 = hoveredBar?.month === d.month && hoveredBar.series === '2024';
          const rx = 6;

          return (
            <g key={d.month}>
              {/* 2025 bar */}
              <rect
                x={x2025}
                y={y2025}
                width={barWidth}
                height={h2025}
                rx={rx}
                ry={rx}
                className={`et-bar et-bar--2025 ${isHovered2025 ? 'et-bar--hovered' : ''}`}
                onMouseEnter={() => setHoveredBar({ month: d.month, series: '2025' })}
                onMouseLeave={() => setHoveredBar(null)}
              />

              {/* 2024 bar */}
              <rect
                x={x2024}
                y={y2024}
                width={barWidth}
                height={h2024}
                rx={rx}
                ry={rx}
                className={`et-bar et-bar--2024 ${isHovered2024 ? 'et-bar--hovered' : ''}`}
                onMouseEnter={() => setHoveredBar({ month: d.month, series: '2024' })}
                onMouseLeave={() => setHoveredBar(null)}
              />

              {/* Tooltip on hover */}
              {(isHovered2025 || isHovered2024) && (
                <g>
                  <rect
                    x={isHovered2025 ? x2025 - 4 : x2024 - 4}
                    y={(isHovered2025 ? y2025 : y2024) - 28}
                    width={48}
                    height={22}
                    rx={5}
                    fill="#1a2332"
                    opacity={0.9}
                  />
                  <text
                    x={(isHovered2025 ? x2025 : x2024) + barWidth / 2 - 4}
                    y={(isHovered2025 ? y2025 : y2024) - 14}
                    textAnchor="middle"
                    className="et-tooltip-text"
                  >
                    {isHovered2025 ? d.value2025 : d.value2024}
                  </text>
                </g>
              )}

              {/* X axis label */}
              <text
                x={groupX + barWidth + barGap / 2}
                y={chartHeight + 16}
                className="et-axis-label et-axis-label--x"
                textAnchor="middle"
              >
                {d.month}
              </text>
            </g>
          );
        })}

        {/* X axis baseline */}
        <line
          x1={paddingLeft}
          y1={yToPixel(yMin)}
          x2={chartWidth - paddingRight}
          y2={yToPixel(yMin)}
          className="et-axis-line"
        />
      </svg>
    </div>
  );
};

export default EfficiencyTrends;
