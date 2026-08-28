import React from 'react';
import { ChartBar } from '../ChartBar/ChartBar';
import './Component326.css';

export interface Component326Props {
  /** Figma variant property: 'Frame 601' (Active/Tooltip visible), 'Frame 602' (Inactive) */
  Property_1?: 'Frame 601' | 'Frame 602';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Component 326`
 * Page: `components`
 * ID: `4:469`
 */
export const Component326: React.FC<Component326Props> = ({
  Property_1 = "Frame 602",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`chart-component-wrapper ${className}`}
      style={style}
      data-figma-layer="Component 326"
      data-figma-page="components"
      {...props}
    >
      <ChartBar
        month="July 2024"
        energyLoad="7.9 MW"
        renewableShare={48}
        carbonEmissions="1.4 tons"
        status="Stable Medium"
        isActive={Property_1 === 'Frame 601'}
      />
    </div>
  );
};

export default Component326;
