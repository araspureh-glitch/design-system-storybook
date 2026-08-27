import React, { useState, useEffect } from 'react';
import './Zones.css';

export interface ZonesProps {
  /** Figma variant property: 'Frame 601' (light collapsed), 'Frame 602' (dark collapsed), 'Frame 604' (dark open) */
  Property_1?: 'Frame 601' | 'Frame 602' | 'Frame 604';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Zones Dropdown Component** (Figma Node: 4:590)
 * 
 * Renders a premium zone-selection dropdown component supporting collapsed (light/dark)
 * and open states, matching the exact spacing, colors, and layout from the design.
 */
export const Zones: React.FC<ZonesProps> = ({
  Property_1 = 'Frame 601',
  className = '',
  style = {},
}) => {
  const [isOpen, setIsOpen] = useState(Property_1 === 'Frame 604');
  const [selectedZone, setSelectedZone] = useState('City Center');

  // Sync state with prop updates in Storybook
  useEffect(() => {
    setIsOpen(Property_1 === 'Frame 604');
  }, [Property_1]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectZone = (zone: string) => {
    setSelectedZone(zone);
    setIsOpen(false);
  };

  const isLight = Property_1 === 'Frame 601';
  const buttonBgColor = isLight ? '#dfedf0' : '#018793';
  const textColor = isLight ? '#000000' : '#ffffff';
  const arrowColor = isLight ? '#018793' : '#ffffff';

  const zonesList = ['City Center', 'Industrial', 'Residental', 'Public'];

  return (
    <div
      className={`zones-wrapper ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        fontFamily: 'Inter, sans-serif',
        userSelect: 'none',
        ...style
      }}
      data-figma-node="4:590"
      data-property-1={Property_1}
    >
      {/* Dropdown Trigger Button */}
      <div
        className={`zones-btn ${isLight ? 'zones-btn--light' : 'zones-btn--dark'}`}
        onClick={toggleDropdown}
        style={{
          width: '130px',
          height: '44px',
          backgroundColor: buttonBgColor,
          color: textColor,
          borderRadius: '22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          cursor: 'pointer',
          fontSize: '15px',
          fontWeight: '600',
          boxSizing: 'border-box',
          boxShadow: isLight ? 'none' : '0 4px 10px rgba(1, 135, 147, 0.2)',
          transition: 'background-color 0.2s ease, transform 0.1s ease',
        }}
      >
        <span>Zone</span>
        
        {/* SVG Arrow Icon */}
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke={arrowColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="zones-dropdown-menu"
          style={{
            position: 'absolute',
            top: '52px',
            left: '0',
            width: '180px',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
            padding: '12px 0',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            boxSizing: 'border-box',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            animation: 'fadeInUp 0.15s ease-out',
          }}
        >
          {zonesList.map((zone) => (
            <div
              key={zone}
              className="zones-dropdown-item"
              onClick={() => selectZone(zone)}
              style={{
                padding: '10px 20px',
                fontSize: '15px',
                fontWeight: '500',
                color: '#000000',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease, color 0.2s ease',
              }}
            >
              {zone}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Zones;
