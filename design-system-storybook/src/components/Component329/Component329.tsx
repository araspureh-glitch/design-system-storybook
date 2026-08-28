import React from 'react';
import { ChartBar } from '../ChartBar/ChartBar';
import './Component329.css';

export interface Component329Props {
  /** Figma variant property: 'Frame 601' (Active/Tooltip visible), 'Frame 602' (Inactive) */
  Property_1?: 'Frame 601' | 'Frame 602';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Component 329`
 * Page: `components`
 * ID: `4:505`
 */
export const Component329: React.FC<Component329Props> = ({
  Property_1 = "Frame 602",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`chart-component-wrapper ${className}`}
      style={style}
      data-figma-layer="Component 329"
      data-figma-page="components"
      {...props}
    >
      <ChartBar
        month="October 2024"
        energyLoad="3 MW"
        renewableShare={40}
        carbonEmissions="1.2 tons"
        status="Medium - High"
        isActive={Property_1 === 'Frame 601'}
      />
    </div>
  );
};

export default Component329;
