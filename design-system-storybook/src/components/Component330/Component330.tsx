import React from 'react';
import { ChartBar } from '../ChartBar/ChartBar';
import './Component330.css';

export interface Component330Props {
  /** Figma variant property: 'Frame 601' (Active/Tooltip visible), 'Frame 602' (Inactive) */
  Property_1?: 'Frame 601' | 'Frame 602';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Component 330`
 * Page: `components`
 * ID: `4:517`
 */
export const Component330: React.FC<Component330Props> = ({
  Property_1 = "Frame 602",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`chart-component-wrapper ${className}`}
      style={style}
      data-figma-layer="Component 330"
      data-figma-page="components"
      {...props}
    >
      <ChartBar
        month="November 2024"
        energyLoad="6.5 MW"
        renewableShare={30}
        carbonEmissions="1.2 tons"
        status="Medium"
        isActive={Property_1 === 'Frame 601'}
      />
    </div>
  );
};

export default Component330;
