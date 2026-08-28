import React from 'react';
import { ChartBar } from '../ChartBar/ChartBar';
import './Component331.css';

export interface Component331Props {
  /** Figma variant property: 'Frame 601' (Active/Tooltip visible), 'Frame 602' (Inactive) */
  Property_1?: 'Frame 601' | 'Frame 602';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Component 331`
 * Page: `components`
 * ID: `4:529`
 */
export const Component331: React.FC<Component331Props> = ({
  Property_1 = "Frame 602",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`chart-component-wrapper ${className}`}
      style={style}
      data-figma-layer="Component 331"
      data-figma-page="components"
      {...props}
    >
      <ChartBar
        month="December 2024"
        energyLoad="8.7 MW"
        renewableShare={20}
        carbonEmissions="1.2 tons"
        status="Low-Moderate"
        isActive={Property_1 === 'Frame 601'}
      />
    </div>
  );
};

export default Component331;
