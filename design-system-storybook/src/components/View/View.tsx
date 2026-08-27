import React, { useState, useEffect } from 'react';
import './View.css';

export interface ViewProps {
  /** Figma variant selection:
   * 'Frame 601' (closed/light pill)
   * 'Frame 602' (closed/dark pill)
   * 'Frame 604' (open/dark pill with dropdown card)
   */
  Property_1?: 'Frame 601' | 'Frame 602' | 'Frame 604';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **View Dropdown** component (Figma Node: 181:6775)
 * 
 * Displays a clean rounded selection dropdown for choosing view types:
 * - 'Frame 601': Closed light pill (light background, black text, teal chevron down).
 * - 'Frame 602': Closed dark pill (teal background, white text, white chevron down).
 * - 'Frame 604': Open dark pill (teal background, white text, white chevron up) with dropdown card showing Yearly and Monthly.
 */
export const View: React.FC<ViewProps> = ({
  Property_1 = 'Frame 601',
  className = '',
  style = {},
}) => {
  const [isOpen, setIsOpen] = useState(Property_1 === 'Frame 604');
  const [selectedView, setSelectedView] = useState<string>('Monthly');
  const [isDarkTheme, setIsDarkTheme] = useState(Property_1 !== 'Frame 601');

  // Sync state if variant prop changes in Storybook controls
  useEffect(() => {
    setIsOpen(Property_1 === 'Frame 604');
    setIsDarkTheme(Property_1 !== 'Frame 601');
  }, [Property_1]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: string) => {
    setSelectedView(option);
    setIsOpen(false);
  };

  // Chevron Icon
  const ChevronIcon = ({ direction, color }: { direction: 'up' | 'down'; color: string }) => (
    <svg
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginLeft: '10px', transition: 'transform 0.2s ease' }}
    >
      {direction === 'up' ? (
        <polyline points="13 8 7 2 1 8" />
      ) : (
        <polyline points="1 1 7 7 13 1" />
      )}
    </svg>
  );

  return (
    <div
      className={`view-dropdown-wrapper ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        fontFamily: 'Inter, sans-serif',
        ...style
      }}
      data-figma-node="181:6775"
      data-property1={Property_1}
    >
      {/* Trigger Button (131x51px) */}
      <button
        onClick={toggleDropdown}
        className="view-trigger-btn"
        style={{
          width: '131px',
          height: '51px',
          borderRadius: '26px',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '15px',
          fontWeight: '700',
          transition: 'all 0.25s ease',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
          outline: 'none',
          userSelect: 'none',
          ...(isDarkTheme
            ? {
                backgroundColor: '#0d9488', // Dark Teal Background
                color: '#ffffff',
              }
            : {
                backgroundColor: '#e5f2f5', // Light Mint Background
                color: '#000000',
              }),
        }}
      >
        <span>View</span>
        <ChevronIcon
          direction={isOpen ? 'up' : 'down'}
          color={isDarkTheme ? '#ffffff' : '#105e68'}
        />
      </button>

      {/* Dropdown Card (141x99px) */}
      {isOpen && (
        <div
          className="view-dropdown-card"
          style={{
            position: 'absolute',
            top: '56px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '141px',
            height: '99px',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            zIndex: 99,
            boxSizing: 'border-box',
            animation: 'viewDropdownFade 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Yearly option */}
          <button
            onClick={() => handleSelectOption('Yearly')}
            style={{
              border: 'none',
              background: 'none',
              fontSize: '15px',
              fontWeight: selectedView === 'Yearly' ? '700' : '600',
              color: selectedView === 'Yearly' ? '#0d9488' : '#1e293b',
              cursor: 'pointer',
              outline: 'none',
              padding: '4px 12px',
              width: '100%',
              textAlign: 'center',
              transition: 'color 0.2s ease',
            }}
          >
            Yearly
          </button>

          {/* Monthly option */}
          <button
            onClick={() => handleSelectOption('Monthly')}
            style={{
              border: 'none',
              background: 'none',
              fontSize: '15px',
              fontWeight: selectedView === 'Monthly' ? '700' : '600',
              color: selectedView === 'Monthly' ? '#0d9488' : '#1e293b',
              cursor: 'pointer',
              outline: 'none',
              padding: '4px 12px',
              width: '100%',
              textAlign: 'center',
              transition: 'color 0.2s ease',
            }}
          >
            Monthly
          </button>
        </div>
      )}
    </div>
  );
};

export default View;
