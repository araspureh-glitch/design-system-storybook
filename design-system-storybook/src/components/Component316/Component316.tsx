import React from 'react';
import { ChartBar } from '../ChartBar/ChartBar';
import './Component316.css';

export interface Component316Props {
  /** Figma variant property: 'Frame 601' (Active/Tooltip visible), 'Frame 602' (Inactive) */
  Property_1?: 'Frame 601' | 'Frame 602';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Component 316`
 * Page: `components`
 * ID: `4:541`
 */
export const Component316: React.FC<Component316Props> = ({
  Property_1 = "Frame 602",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`chart-component-wrapper ${className}`}
      style={style}
      data-figma-layer="Component 316"
      data-figma-page="components"
      {...props}
    >
      <ChartBar
        month="March 2024"
        energyLoad="4.1 MW"
        renewableShare={65}
        carbonEmissions="1.2 tons"
        status="Moderate Increase"
        isActive={Property_1 === 'Frame 601'}
      />
    </div>
  );
};

export default Component316;
