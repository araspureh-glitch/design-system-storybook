import React, { useState, useEffect } from 'react';
import './Date.css';

export interface DateProps {
  /** Figma variant selection: 'Frame 1171275911' (active/opened) | 'Frame 1171275912' (default/closed) */
  Property_1?: 'Frame 1171275911' | 'Frame 1171275912';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Date Picker Button & Dropdown** component (Figma Node: 181:5913)
 * 
 * Displays a calendar selection pill:
 * - 'Frame 1171275912': Closed pill (white background, teal icon, dark text).
 * - 'Frame 1171275911': Active pill (teal background, white text/icon) with absolute calendar dropdown.
 * Clicking the pill toggles the calendar dropdown open and closed.
 */
export const Date: React.FC<DateProps> = ({
  Property_1 = 'Frame 1171275912',
  className = '',
  style = {},
}) => {
  const [isOpen, setIsOpen] = useState(Property_1 === 'Frame 1171275911');
  const [selectedDay, setSelectedDay] = useState<number>(9);

  // Sync state if variant prop changes in Storybook controls
  useEffect(() => {
    setIsOpen(Property_1 === 'Frame 1171275911');
  }, [Property_1]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  
  // Generating grid: Sept 2025 starts on Monday (1st), has 30 days
  const daysInMonth = 30;
  const calendarDays: (number | null)[] = [];
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  // Calendar Icon SVG
  const CalendarIcon = ({ color }: { color: string }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transition: 'stroke 0.2s ease', marginRight: '10px' }}
    >
      <rect x="3" y="4" width="18" height="18" rx="4" ry="4" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );

  // Chevron Down SVG
  const ChevronDown = ({ color }: { color: string }) => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginLeft: '6px' }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );

  return (
    <div
      className={`date-picker-wrapper ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        fontFamily: 'Inter, sans-serif',
        ...style
      }}
      data-figma-node="181:5913"
      data-property1={Property_1}
    >
      {/* Selection Pill Button */}
      <button
        onClick={toggleDropdown}
        className="date-pill-btn"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '46px',
          padding: '0 24px',
          borderRadius: '23px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '15px',
          fontWeight: '700',
          transition: 'all 0.25s ease',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
          outline: 'none',
          userSelect: 'none',
          ...(isOpen
            ? {
                backgroundColor: '#0d9488', // Active Teal Background
                color: '#ffffff',
              }
            : {
                backgroundColor: '#ffffff', // Default White Background
                color: '#000000',
              }),
        }}
      >
        <CalendarIcon color={isOpen ? '#ffffff' : '#0d9488'} />
        <span>9 Sept 25</span>
      </button>

      {/* Calendar Card Dropdown */}
      {isOpen && (
        <div
          className="calendar-dropdown-card"
          style={{
            position: 'absolute',
            top: '56px',
            right: 0,
            width: '380px',
            backgroundColor: '#ffffff',
            borderRadius: '28px',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.08)',
            padding: '24px',
            boxSizing: 'border-box',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {/* Calendar Header: Year & Month */}
          <div style={{ display: 'flex', gap: '16px', paddingLeft: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>
              <span>2025</span>
              <ChevronDown color="#64748b" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>
              <span>September</span>
              <ChevronDown color="#64748b" />
            </div>
          </div>

          {/* Days of Week Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              backgroundColor: '#e5f2f5',
              borderRadius: '12px',
              padding: '6px 0',
              textAlign: 'center',
            }}
          >
            {daysOfWeek.map((day, idx) => (
              <span key={idx} style={{ fontSize: '12px', fontWeight: '600', color: '#105e68' }}>
                {day}
              </span>
            ))}
          </div>

          {/* Days Calendar Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              rowGap: '12px',
              columnGap: '4px',
              textAlign: 'center',
              padding: '8px 0',
            }}
          >
            {calendarDays.map((day, idx) => {
              if (day === null) {
                return <div key={idx} />;
              }

              const isSelected = selectedDay === day;

              return (
                <div
                  key={idx}
                  onClick={() => setSelectedDay(day)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '38px',
                    width: '38px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: isSelected ? '700' : '500',
                    margin: '0 auto',
                    transition: 'all 0.2s ease',
                    ...(isSelected
                      ? {
                          backgroundColor: '#0d9488', // Solid Teal Selection Circle
                          color: '#ffffff',
                        }
                      : {
                          backgroundColor: 'transparent',
                          color: '#1e293b',
                        }),
                  }}
                  className={isSelected ? '' : 'calendar-day-hover'}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Date;
