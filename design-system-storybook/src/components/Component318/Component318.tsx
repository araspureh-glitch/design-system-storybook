import React from 'react';
import { ChartBar } from '../ChartBar/ChartBar';
import './Component318.css';

export interface Component318Props {
  /** Figma variant property: 'Frame 601' (Active/Tooltip visible), 'Frame 602' (Inactive) */
  Property_1?: 'Frame 601' | 'Frame 602';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Component 318`
 * Page: `components`
 * ID: `4:565`
 */
export const Component318: React.FC<Component318Props> = ({
  Property_1 = "Frame 602",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`chart-component-wrapper ${className}`}
      style={style}
      data-figma-layer="Component 318"
      data-figma-page="components"
      {...props}
    >
      <ChartBar
        month="May 2024"
        energyLoad="5.5 MW"
        renewableShare={35}
        carbonEmissions="1.2 tons"
        status="Still High"
        isActive={Property_1 === 'Frame 601'}
      />
    </div>
  );
};

export default Component318;
