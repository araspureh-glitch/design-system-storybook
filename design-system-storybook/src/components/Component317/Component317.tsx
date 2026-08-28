import React from 'react';
import { ChartBar } from '../ChartBar/ChartBar';
import './Component317.css';

export interface Component317Props {
  /** Figma variant property: 'Frame 601' (Active/Tooltip visible), 'Frame 602' (Inactive) */
  Property_1?: 'Frame 601' | 'Frame 602';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Component 317`
 * Page: `components`
 * ID: `4:553`
 */
export const Component317: React.FC<Component317Props> = ({
  Property_1 = "Frame 602",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`chart-component-wrapper ${className}`}
      style={style}
      data-figma-layer="Component 317"
      data-figma-page="components"
      {...props}
    >
      <ChartBar
        month="April 2024"
        energyLoad="9.5 MW"
        renewableShare={67}
        carbonEmissions="1.2 tons"
        status="Peak Load"
        isActive={Property_1 === 'Frame 601'}
      />
    </div>
  );
};

export default Component317;
