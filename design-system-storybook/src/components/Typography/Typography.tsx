import React from 'react';
import './Typography.css';

export interface TypographyProps {
  darkMode?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Typography: React.FC<TypographyProps> = ({
  darkMode = false,
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`typography-container ${darkMode ? 'dark' : ''} ${className}`}
      style={style}
      {...props}
    >
      {/* Headlines Section */}
      <section className="typo-section">
        <div className="typo-category-header">
          <h4 className="typo-category-title">Headlines</h4>
        </div>

        <div className="typo-item">
          <h1 className="typo-display-1">Display 1</h1>
          <p className="typo-meta">Bold, 72px</p>
        </div>

        <div className="typo-item">
          <h2 className="typo-heading-1">Heading 1</h2>
          <p className="typo-meta">Bold, 56px</p>
        </div>

        <div className="typo-item">
          <h3 className="typo-heading-2">Heading 2</h3>
          <p className="typo-meta">Bold, 48px</p>
        </div>

        <div className="typo-item">
          <h4 className="typo-heading-3">Heading 3</h4>
          <p className="typo-meta">Bold, 32px</p>
        </div>

        <div className="typo-item">
          <div className="typo-item-row">
            <div>
              <h5 className="typo-heading-4">Heading 4</h5>
              <p className="typo-meta">Bold, 24px</p>
            </div>
            <div>
              <h5 className="typo-heading-4-upper">HEADING 4 UPPERCASE</h5>
              <p className="typo-meta">Bold, 24px</p>
            </div>
          </div>
        </div>
      </section>

      {/* Paragraph Section */}
      <section className="typo-section">
        <div className="typo-category-header">
          <h4 className="typo-category-title">Paragraph</h4>
        </div>

        <div className="typo-item">
          <p className="typo-paragraph-1">Paragraph 1</p>
          <p className="typo-meta">Regular, 18px</p>
        </div>

        <div className="typo-item">
          <p className="typo-paragraph-2">Paragraph 2</p>
          <p className="typo-meta">Regular, 16px</p>
        </div>
      </section>

      {/* Button / Link Section */}
      <section className="typo-section">
        <div className="typo-category-header">
          <h4 className="typo-category-title">Button / Link</h4>
        </div>

        <div className="typo-item">
          <span className="typo-button-link">Button / Link</span>
          <p className="typo-meta">SemiBold, 16px</p>
        </div>
      </section>
    </div>
  );
};

export default Typography;
