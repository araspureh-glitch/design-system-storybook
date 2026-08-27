import React, { useState, useEffect } from 'react';
import './Filters.css';

export interface FiltersProps {
  /** Figma variant selection: 
   * 'Frame 1171275911' (closed/default)
   * 'Frame 1171275912' (open/checklist)
   * 'Frame 1171275913' (open/date-range-calendar)
   */
  Property_1?: 'Frame 1171275911' | 'Frame 1171275912' | 'Frame 1171275913';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Filters** component (Figma Node: 181:5885)
 * 
 * A premium interactive filter popover dropdown:
 * - Handles button states (closed/active).
 * - Checklist selection with automatic height transition.
 * - Calendar range picker (From/To) highlighting range selections.
 */
export const Filters: React.FC<FiltersProps> = ({
  Property_1 = 'Frame 1171275911',
  className = '',
  style = {},
}) => {
  const [isOpen, setIsOpen] = useState(Property_1 !== 'Frame 1171275911');
  const [showCalendar, setShowCalendar] = useState(Property_1 === 'Frame 1171275913');
  const [selectedOption, setSelectedOption] = useState<string>(Property_1 === 'Frame 1171275913' ? 'Date Range' : 'This Week');
  const [activeDateTab, setActiveDateTab] = useState<'From' | 'To'>('From');

  // Calendar state for range (Sept 2024 starts on Sunday (1st) in our mock grid, 30 days)
  const [fromDate, setFromDate] = useState<number>(17);
  const [toDate, setToDate] = useState<number>(26);

  // Sync state if variant prop changes in Storybook controls
  useEffect(() => {
    setIsOpen(Property_1 !== 'Frame 1171275911');
    setShowCalendar(Property_1 === 'Frame 1171275913');
    setSelectedOption(Property_1 === 'Frame 1171275913' ? 'Date Range' : 'This Week');
  }, [Property_1]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    if (option === 'Date Range') {
      setShowCalendar(true);
    } else {
      setShowCalendar(false);
    }
  };

  const handleDateClick = (day: number) => {
    if (activeDateTab === 'From') {
      setFromDate(day);
      setActiveDateTab('To'); // auto switch
    } else {
      if (day >= fromDate) {
        setToDate(day);
      } else {
        setFromDate(day);
      }
      setActiveDateTab('From');
    }
  };

  const options = ['This Week', 'Last Week', 'This Month', 'Last Month', 'This Year', 'Last Year'];
  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);

  // Filter Icon SVG
  const FilterIcon = ({ color }: { color: string }) => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginRight: '8px' }}
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="6" y1="12" x2="18" y2="12" />
      <line x1="9" y1="18" x2="15" y2="18" />
    </svg>
  );

  const ChevronDown = ({ color }: { color: string }) => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginLeft: '4px' }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );

  return (
    <div
      className={`filters-wrapper ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        fontFamily: 'Inter, sans-serif',
        ...style
      }}
      data-figma-node="181:5885"
      data-property1={Property_1}
    >
      {/* Trigger Button */}
      <button
        onClick={toggleDropdown}
        className="filters-trigger-btn"
        style={{
          width: '132px',
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
        <FilterIcon color={isOpen ? '#ffffff' : '#0d9488'} />
        <span>Filters</span>
      </button>

      {/* Dropdown Card */}
      {isOpen && (
        <div
          className="filters-dropdown-card"
          style={{
            position: 'absolute',
            top: '60px',
            right: 0,
            width: '402px',
            height: showCalendar ? '736px' : '289px',
            backgroundColor: '#ffffff',
            borderRadius: '30px',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.08)',
            padding: '24px',
            boxSizing: 'border-box',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <span style={{ fontSize: '16px', fontWeight: '700', color: '#105e68', paddingLeft: '4px' }}>
            By Date
          </span>

          {/* Option Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px 24px', padding: '0 4px' }}>
            {options.map((opt) => {
              const isChecked = selectedOption === opt;
              return (
                <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '14px', color: isChecked ? '#105e68' : '#64748b', fontWeight: isChecked ? '600' : '500' }}>
                  <input
                    type="radio"
                    name="filter-date-opt"
                    checked={isChecked}
                    onChange={() => handleOptionChange(opt)}
                    style={{ display: 'none' }}
                  />
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '6px',
                      border: isChecked ? '2px solid #0d9488' : '2px solid #cbd5e1',
                      backgroundColor: isChecked ? '#0d9488' : '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {isChecked && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                  <span>{opt}</span>
                </label>
              );
            })}
          </div>

          {/* Date Range Option Row */}
          <div style={{ padding: '0 4px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '14px', color: selectedOption === 'Date Range' ? '#105e68' : '#64748b', fontWeight: selectedOption === 'Date Range' ? '600' : '500' }}>
              <input
                type="radio"
                name="filter-date-opt"
                checked={selectedOption === 'Date Range'}
                onChange={() => handleOptionChange('Date Range')}
                style={{ display: 'none' }}
              />
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '6px',
                  border: selectedOption === 'Date Range' ? '2px solid #0d9488' : '2px solid #cbd5e1',
                  backgroundColor: selectedOption === 'Date Range' ? '#0d9488' : '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                }}
              >
                {selectedOption === 'Date Range' && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <span>Date Range</span>
            </label>
          </div>

          {/* Render Calendar Block if showCalendar */}
          {showCalendar && (
            <div className="filter-calendar-block" style={{ display: 'flex', flexDirection: 'column', gap: '14px', borderTop: '1px solid #f1f5f9', paddingTop: '16px', animation: 'filtersFadeIn 0.3s ease' }}>
              {/* Range Tabs */}
              <div style={{ display: 'flex', backgroundColor: '#e2f0f2', borderRadius: '12px', padding: '4px', height: '40px', alignItems: 'center' }}>
                <button
                  onClick={() => setActiveDateTab('From')}
                  style={{
                    flex: 1,
                    height: '100%',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    backgroundColor: activeDateTab === 'From' ? '#0d9488' : 'transparent',
                    color: activeDateTab === 'From' ? '#ffffff' : '#105e68',
                    transition: 'all 0.2s ease',
                  }}
                >
                  From
                </button>
                <button
                  onClick={() => setActiveDateTab('To')}
                  style={{
                    flex: 1,
                    height: '100%',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    backgroundColor: activeDateTab === 'To' ? '#0d9488' : 'transparent',
                    color: activeDateTab === 'To' ? '#ffffff' : '#105e68',
                    transition: 'all 0.2s ease',
                  }}
                >
                  To
                </button>
              </div>

              {/* Month/Year selector */}
              <div style={{ display: 'flex', gap: '16px', paddingLeft: '4px', fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>
                <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <span>2024</span>
                  <ChevronDown color="#64748b" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <span>September</span>
                  <ChevronDown color="#64748b" />
                </div>
              </div>

              {/* Day headers */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', backgroundColor: '#e5f2f5', borderRadius: '8px', padding: '4px 0', textAlign: 'center' }}>
                {daysOfWeek.map((day, idx) => (
                  <span key={idx} style={{ fontSize: '11px', fontWeight: '600', color: '#105e68' }}>{day}</span>
                ))}
              </div>

              {/* Days grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', rowGap: '8px', textAlign: 'center' }}>
                {calendarDays.map((day) => {
                  const isFrom = day === fromDate;
                  const isTo = day === toDate;
                  const isWithinRange = day > fromDate && day < toDate;

                  return (
                    <div
                      key={day}
                      onClick={() => handleDateClick(day)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '34px',
                        cursor: 'pointer',
                        fontSize: '13px',
                        fontWeight: (isFrom || isTo) ? '700' : '500',
                        transition: 'all 0.2s ease',
                        position: 'relative',
                        color: (isFrom || isTo) ? '#ffffff' : '#1e293b',
                        ...(isWithinRange && {
                          backgroundColor: '#e5f2f5', // highlighted range background
                          color: '#105e68',
                        }),
                        ...(isFrom && {
                          backgroundColor: '#0d9488',
                          borderRadius: '50%',
                        }),
                        ...(isTo && {
                          backgroundColor: '#0d9488',
                          borderRadius: '50%',
                        })
                      }}
                      className={(isFrom || isTo) ? '' : 'calendar-day-hover'}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action Filter Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="filter-submit-btn"
            style={{
              marginTop: 'auto',
              width: '100%',
              height: '48px',
              borderRadius: '24px',
              backgroundColor: '#0d9488',
              color: '#ffffff',
              border: 'none',
              fontSize: '15px',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(13, 148, 136, 0.15)',
              transition: 'all 0.2s ease',
              outline: 'none',
            }}
          >
            Filter
          </button>
        </div>
      )}
    </div>
  );
};

export default Filters;
