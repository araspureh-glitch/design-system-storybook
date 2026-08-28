import React from 'react';
import { ChartBar } from '../ChartBar/ChartBar';
import './Component315.css';

export interface Component315Props {
  /** Figma variant property: 'Frame 601' (Active/Tooltip visible), 'Frame 602' (Inactive) */
  Property_1?: 'Frame 601' | 'Frame 602';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Component 315`
 * Page: `components`
 * ID: `4:445`
 */
export const Component315: React.FC<Component315Props> = ({
  Property_1 = "Frame 602",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`chart-component-wrapper ${className}`}
      style={style}
      data-figma-layer="Component 315"
      data-figma-page="components"
      {...props}
    >
      <ChartBar
        month="February 2024"
        energyLoad="6.5 MW"
        renewableShare={32}
        carbonEmissions="1.2 tons"
        status="Slight Rise"
        isActive={Property_1 === 'Frame 601'}
      />
    </div>
  );
};

export default Component315;
