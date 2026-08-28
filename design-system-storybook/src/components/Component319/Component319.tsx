import React from 'react';
import { ChartBar } from '../ChartBar/ChartBar';
import './Component319.css';

export interface Component319Props {
  /** Figma variant property: 'Frame 601' (Active/Tooltip visible), 'Frame 602' (Inactive) */
  Property_1?: 'Frame 601' | 'Frame 602';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Component 319`
 * Page: `components`
 * ID: `4:577`
 */
export const Component319: React.FC<Component319Props> = ({
  Property_1 = "Frame 602",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`chart-component-wrapper ${className}`}
      style={style}
      data-figma-layer="Component 319"
      data-figma-page="components"
      {...props}
    >
      <ChartBar
        month="June 2024"
        energyLoad="6.5 MW"
        renewableShare={45}
        carbonEmissions="1.2 tons"
        status="Drop"
        isActive={Property_1 === 'Frame 601'}
      />
    </div>
  );
};

export default Component319;
