import React, { useState, useEffect } from 'react';
import './DateFilters.css';

export interface DateFiltersProps {
  /** Figma variant selection:
   * 'Frame 1171275911' (closed/default)
   * 'Frame 1171275912' (open/checklist)
   */
  Property_1?: 'Frame 1171275911' | 'Frame 1171275912';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **DateFilters** component set (Figma Node: 181:6006)
 * 
 * Displays a small triple-dot icon button (33x33px) that opens a 
 * compact checklist popover (307x148px) listing date options.
 */
export const DateFilters: React.FC<DateFiltersProps> = ({
  Property_1 = 'Frame 1171275911',
  className = '',
  style = {},
}) => {
  const [isOpen, setIsOpen] = useState(Property_1 === 'Frame 1171275912');
  const [selectedOption, setSelectedOption] = useState<string>('This Week');

  // Sync state if variant prop changes in Storybook controls
  useEffect(() => {
    setIsOpen(Property_1 === 'Frame 1171275912');
  }, [Property_1]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const options = ['This Week', 'Last Week', 'This Month', 'Last Month', 'This Year', 'Last Year'];

  return (
    <div
      className={`date-filters-wrapper ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        fontFamily: 'Inter, sans-serif',
        ...style
      }}
      data-figma-node="181:6006"
      data-property1={Property_1}
    >
      {/* Small Ellipsis Trigger Button (33x33px) */}
      <button
        onClick={toggleDropdown}
        className="date-filters-trigger-btn"
        style={{
          width: '33px',
          height: '33px',
          borderRadius: '10px',
          border: 'none',
          backgroundColor: '#e5f2f5', // light mint/grey background track
          color: '#105e68', // Teal ellipsis color
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          outline: 'none',
          boxSizing: 'border-box',
          padding: 0,
        }}
        title="Toggle Date Filters"
      >
        {/* Three dots ellipsis icon */}
        <svg width="14" height="4" viewBox="0 0 14 4" fill="none">
          <circle cx="2" cy="2" r="1.5" fill="#105e68" />
          <circle cx="7" cy="2" r="1.5" fill="#105e68" />
          <circle cx="12" cy="2" r="1.5" fill="#105e68" />
        </svg>
      </button>

      {/* Popover Checklist Card (307x148px) */}
      {isOpen && (
        <div
          className="date-filters-popover-card"
          style={{
            position: 'absolute',
            top: '38px',
            right: 0,
            width: '307px',
            height: '148px',
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            padding: '16px 20px',
            boxSizing: 'border-box',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            animation: 'dateFiltersFade 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Header Title */}
          <span style={{ fontSize: '14px', fontWeight: '700', color: '#105e68' }}>
            By Date
          </span>

          {/* Option Grid (2 Columns, 3 Rows) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              rowGap: '10px',
              columnGap: '16px',
            }}
          >
            {options.map((opt) => {
              const isChecked = selectedOption === opt;
              return (
                <label
                  key={opt}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    color: isChecked ? '#105e68' : '#8e9aa0',
                    fontWeight: isChecked ? '600' : '500',
                    userSelect: 'none',
                  }}
                >
                  <input
                    type="radio"
                    name="date-filter-radio"
                    checked={isChecked}
                    onChange={() => handleOptionChange(opt)}
                    style={{ display: 'none' }}
                  />
                  <div
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '5px',
                      border: isChecked ? '2px solid #0d9488' : '2px solid #cbd5e1',
                      backgroundColor: isChecked ? '#0d9488' : '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.15s ease',
                      flexShrink: 0,
                    }}
                  >
                    {isChecked && (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                  <span>{opt}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DateFilters;
