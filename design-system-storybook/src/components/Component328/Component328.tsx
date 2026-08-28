import React from 'react';
import { ChartBar } from '../ChartBar/ChartBar';
import './Component328.css';

export interface Component328Props {
  /** Figma variant property: 'Frame 601' (Active/Tooltip visible), 'Frame 602' (Inactive) */
  Property_1?: 'Frame 601' | 'Frame 602';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Component 328`
 * Page: `components`
 * ID: `4:493`
 */
export const Component328: React.FC<Component328Props> = ({
  Property_1 = "Frame 602",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`chart-component-wrapper ${className}`}
      style={style}
      data-figma-layer="Component 328"
      data-figma-page="components"
      {...props}
    >
      <ChartBar
        month="September 2024"
        energyLoad="2.3 MW"
        renewableShare={54}
        carbonEmissions="1.2 tons"
        status="Stable Medium"
        isActive={Property_1 === 'Frame 601'}
      />
    </div>
  );
};

export default Component328;
