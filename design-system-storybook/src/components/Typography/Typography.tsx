import React, { useState } from 'react';
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
  const [customText, setCustomText] = useState<string>('');

  const headlineItems = [
    {
      id: 'display-1',
      className: 'typo-display-1',
      defaultText: 'Display 1',
      spec: 'Bold, 72px / 4.5rem',
      lineHeight: '1.1',
      tracking: '-0.02em',
      cssVar: '--font-display-1',
    },
    {
      id: 'heading-1',
      className: 'typo-heading-1',
      defaultText: 'Heading 1',
      spec: 'Bold, 56px / 3.5rem',
      lineHeight: '1.15',
      tracking: '-0.015em',
      cssVar: '--font-heading-1',
    },
    {
      id: 'heading-2',
      className: 'typo-heading-2',
      defaultText: 'Heading 2',
      spec: 'Bold, 48px / 3.0rem',
      lineHeight: '1.2',
      tracking: '-0.01em',
      cssVar: '--font-heading-2',
    },
    {
      id: 'heading-3',
      className: 'typo-heading-3',
      defaultText: 'Heading 3',
      spec: 'Bold, 32px / 2.0rem',
      lineHeight: '1.25',
      tracking: 'normal',
      cssVar: '--font-heading-3',
    },
    {
      id: 'heading-4',
      className: 'typo-heading-4',
      defaultText: 'Heading 4',
      spec: 'Bold, 24px / 1.5rem',
      lineHeight: '1.3',
      tracking: 'normal',
      cssVar: '--font-heading-4',
    },
    {
      id: 'heading-4-upper',
      className: 'typo-heading-4-upper',
      defaultText: 'HEADING 4 UPPERCASE',
      spec: 'Bold, 24px / 1.5rem',
      lineHeight: '1.3',
      tracking: '0.05em',
      cssVar: '--font-heading-4-uppercase',
    },
  ];

  const paragraphItems = [
    {
      id: 'paragraph-1',
      className: 'typo-paragraph-1',
      defaultText: 'Paragraph 1',
      spec: 'Regular, 18px / 1.125rem',
      lineHeight: '1.5',
      cssVar: '--font-paragraph-1',
    },
    {
      id: 'paragraph-2',
      className: 'typo-paragraph-2',
      defaultText: 'Paragraph 2',
      spec: 'Regular, 16px / 1.0rem',
      lineHeight: '1.5',
      cssVar: '--font-paragraph-2',
    },
    {
      id: 'body-sm',
      className: 'typo-body-sm',
      defaultText: 'Body Small / Secondary Text',
      spec: 'Regular, 14px / 0.875rem',
      lineHeight: '1.4',
      cssVar: '--font-body-sm',
    },
    {
      id: 'caption',
      className: 'typo-caption',
      defaultText: 'Caption & Helper Text',
      spec: 'Regular, 12px / 0.75rem',
      lineHeight: '1.35',
      cssVar: '--font-caption',
    },
  ];

  const uiItems = [
    {
      id: 'button-link',
      className: 'typo-button-link',
      defaultText: 'Button / Link',
      spec: 'SemiBold, 16px / 1.0rem',
      lineHeight: '1.4',
      cssVar: '--font-button-link',
    },
  ];

  return (
    <div 
      className={`typography-root ${darkMode ? 'dark' : ''} ${className}`}
      style={style}
      {...props}
    >
      {/* Main Header */}
      <header className="typo-header">
        <div>
          <span className="typo-header-badge">Design System Specimen</span>
          <h1 className="typo-main-title">Typography Hierarchy</h1>
          <p className="typo-main-desc">
            Complete type scale specification for headlines, paragraph text, UI controls, and code elements. Built with <strong>Inter</strong> and <strong>JetBrains Mono</strong>.
          </p>
        </div>
      </header>

      {/* Font Specimen Card */}
      <div className="typo-font-specimen-card">
        <div className="typo-specimen-header">
          <span className="typo-specimen-family">Inter &amp; JetBrains Mono</span>
          <span className="typo-specimen-meta">Weights: 400 Regular · 500 Medium · 600 SemiBold · 700 Bold</span>
        </div>
        <div className="typo-alphabet-grid">
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz<br />
          0123456789 !@#$%^&amp;*()_+-=[]&#123;&#125;;&apos;:&quot;,&lt;.&gt;/?
        </div>
      </div>

      {/* Live Text Tester */}
      <div className="typo-tester-bar">
        <span className="typo-tester-label">Live Preview Tester:</span>
        <input 
          type="text"
          className="typo-tester-input"
          placeholder="Type custom text to preview across all typography levels..."
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
        />
        {customText && (
          <button 
            style={{ padding: '6px 12px', borderRadius: '6px', border: 'none', background: '#cbd5e1', cursor: 'pointer', fontSize: '12px', fontWeight: 600 }}
            onClick={() => setCustomText('')}
          >
            Reset
          </button>
        )}
      </div>

      {/* Headlines Section */}
      <section className="typo-category-section">
        <div className="typo-category-header">
          <h2 className="typo-category-title">Headlines</h2>
        </div>

        {headlineItems.map((item) => (
          <div key={item.id} className="typo-specimen-item">
            <div className={`typo-item-text ${item.className}`}>
              {customText || item.defaultText}
            </div>
            <div className="typo-spec-badges">
              <span className="typo-chip">{item.spec}</span>
              <span className="typo-chip">Line Height: {item.lineHeight}</span>
              {item.tracking && <span className="typo-chip">Tracking: {item.tracking}</span>}
              <span className="typo-chip typo-chip-code">{item.cssVar}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Paragraph Section */}
      <section className="typo-category-section">
        <div className="typo-category-header">
          <h2 className="typo-category-title">Paragraph</h2>
        </div>

        {paragraphItems.map((item) => (
          <div key={item.id} className="typo-specimen-item">
            <div className={`typo-item-text ${item.className}`}>
              {customText || item.defaultText}
            </div>
            <div className="typo-spec-badges">
              <span className="typo-chip">{item.spec}</span>
              <span className="typo-chip">Line Height: {item.lineHeight}</span>
              <span className="typo-chip typo-chip-code">{item.cssVar}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Button / Link Section */}
      <section className="typo-category-section">
        <div className="typo-category-header">
          <h2 className="typo-category-title">Button / Link</h2>
        </div>

        {uiItems.map((item) => (
          <div key={item.id} className="typo-specimen-item">
            <div>
              <span className={`typo-item-text ${item.className}`}>
                {customText || item.defaultText}
              </span>
            </div>
            <div className="typo-spec-badges">
              <span className="typo-chip">{item.spec}</span>
              <span className="typo-chip">Line Height: {item.lineHeight}</span>
              <span className="typo-chip typo-chip-code">{item.cssVar}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Monospace Code Section */}
      <section className="typo-category-section">
        <div className="typo-category-header">
          <h2 className="typo-category-title">Monospace &amp; Data</h2>
        </div>

        <div className="typo-specimen-item">
          <div className="typo-mono">
            {customText || 'const gridEnergyLoad = "45.8 MW"; // Industrial Zone 2 Output'}
          </div>
          <div className="typo-spec-badges">
            <span className="typo-chip">Medium, 14px / Monospace</span>
            <span className="typo-chip typo-chip-code">--font-mono</span>
          </div>
        </div>
      </section>

      {/* Summary Matrix Table */}
      <section className="typo-category-section">
        <div className="typo-category-header">
          <h2 className="typo-category-title">Type Scale Token Matrix</h2>
        </div>

        <div className="typo-table-wrapper">
          <table className="typo-table">
            <thead>
              <tr>
                <th>Token</th>
                <th>Font Size</th>
                <th>Weight</th>
                <th>Line Height</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="typo-table-token">--font-display-1</td>
                <td>72px (4.5rem)</td>
                <td>700 Bold</td>
                <td>1.1</td>
                <td>Hero headlines &amp; impact numbers</td>
              </tr>
              <tr>
                <td className="typo-table-token">--font-heading-1</td>
                <td>56px (3.5rem)</td>
                <td>700 Bold</td>
                <td>1.15</td>
                <td>Page primary title</td>
              </tr>
              <tr>
                <td className="typo-table-token">--font-heading-2</td>
                <td>48px (3.0rem)</td>
                <td>700 Bold</td>
                <td>1.2</td>
                <td>Section header</td>
              </tr>
              <tr>
                <td className="typo-table-token">--font-heading-3</td>
                <td>32px (2.0rem)</td>
                <td>700 Bold</td>
                <td>1.25</td>
                <td>Card &amp; widget title</td>
              </tr>
              <tr>
                <td className="typo-table-token">--font-heading-4</td>
                <td>24px (1.5rem)</td>
                <td>700 Bold</td>
                <td>1.3</td>
                <td>Sub-card &amp; list header</td>
              </tr>
              <tr>
                <td className="typo-table-token">--font-heading-4-uppercase</td>
                <td>24px (1.5rem)</td>
                <td>700 Bold (Uppercase)</td>
                <td>1.3</td>
                <td>Category section badge</td>
              </tr>
              <tr>
                <td className="typo-table-token">--font-paragraph-1</td>
                <td>18px (1.125rem)</td>
                <td>400 Regular</td>
                <td>1.5</td>
                <td>Lead paragraph / intro text</td>
              </tr>
              <tr>
                <td className="typo-table-token">--font-paragraph-2</td>
                <td>16px (1.0rem)</td>
                <td>400 Regular</td>
                <td>1.5</td>
                <td>Standard body text</td>
              </tr>
              <tr>
                <td className="typo-table-token">--font-button-link</td>
                <td>16px (1.0rem)</td>
                <td>600 SemiBold</td>
                <td>1.4</td>
                <td>Interactive buttons &amp; links</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Typography;
