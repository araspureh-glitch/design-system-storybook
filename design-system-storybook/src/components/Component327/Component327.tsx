import React from 'react';
import { ChartBar } from '../ChartBar/ChartBar';
import './Component327.css';

export interface Component327Props {
  /** Figma variant property: 'Frame 601' (Active/Tooltip visible), 'Frame 602' (Inactive) */
  Property_1?: 'Frame 601' | 'Frame 602';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Component 327`
 * Page: `components`
 * ID: `4:481`
 */
export const Component327: React.FC<Component327Props> = ({
  Property_1 = "Frame 602",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`chart-component-wrapper ${className}`}
      style={style}
      data-figma-layer="Component 327"
      data-figma-page="components"
      {...props}
    >
      <ChartBar
        month="August 2024"
        energyLoad="4.5 MW"
        renewableShare={40}
        carbonEmissions="1.2 tons"
        status="Slight Rise"
        isActive={Property_1 === 'Frame 601'}
      />
    </div>
  );
};

export default Component327;
