import React from 'react';
import { ChartBar } from '../ChartBar/ChartBar';
import './Component332.css';

export interface Component332Props {
  /** Figma variant property: 'Frame 601' (Active/Tooltip visible), 'Frame 602' (Inactive) */
  Property_1?: 'Frame 601' | 'Frame 602';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Component 332`
 * Page: `components`
 * ID: `4:478`
 */
export const Component332: React.FC<Component332Props> = ({
  Property_1 = "Frame 602",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`chart-component-wrapper ${className}`}
      style={style}
      data-figma-layer="Component 332"
      data-figma-page="components"
      {...props}
    >
      <ChartBar
        month="January 2024"
        energyLoad="3.8 MW"
        renewableShare={20}
        carbonEmissions="1.3 tons"
        status="Low Load"
        isActive={Property_1 === 'Frame 601'}
      />
    </div>
  );
};

export default Component332;
