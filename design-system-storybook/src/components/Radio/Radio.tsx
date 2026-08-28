import React from 'react';
import './Radio.css';

export interface RadioProps {
  Left_Icon_80_2?: boolean;
  State?: 'Default' | 'Hover' | 'Selected' | 'Disabled';
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  showText?: boolean;
  Boolean_23_2297?: boolean;
}

const CheckIcon: React.FC = () => (
  <svg 
    width="12" 
    height="12" 
    viewBox="0 0 12 12" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    <path 
      d="M2.5 6L5 8.5L9.5 3.5" 
      stroke="#ffffff" 
      strokeWidth="1.75" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

interface RadioContentProps {
  state: 'Default' | 'Hover' | 'Selected' | 'Disabled';
  label: string;
  showIcon?: boolean;
  showText?: boolean;
}

const RadioContent: React.FC<RadioContentProps> = ({ state, label, showIcon = true, showText = true }) => {
  return (
    <div className={`radio-row ${state === 'Disabled' ? 'disabled' : ''}`}>
      {showIcon && (
        <div className={`radio-box ${state}`}>
          {state === 'Selected' && <CheckIcon />}
        </div>
      )}
      {showText && <span className={`radio-label ${state}`}>{label}</span>}
    </div>
  );
};

/**
 * **Preserved Figma Layer Name**: `radio`
 * Page: `components`
 * Type: `COMPONENT_SET`
 * ID: `23:2294`
 */
export const Radio: React.FC<RadioProps> = ({
  Left_Icon_80_2 = true,
  State = "Default",
  className = '',
  style = {},
  label = "This Week",
  showText = true,
  Boolean_23_2297 = true,
  ...props
}) => {
  return (
    <div 
      className={`radio-container ${className}`}
      style={style}
      data-figma-layer="radio"
      data-figma-page="components"
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          components / radio
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          23:2294
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div className="radio-variant-wrapper">
          <div className="radio-variant-label">Variant: State={State}</div>
          <RadioContent 
            state={State} 
            label={label} 
            showIcon={Left_Icon_80_2} 
            showText={showText && Boolean_23_2297} 
          />
        </div>
      </div>

      <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '11px', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '8px' }}>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>Left_Icon_80_2: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(Left_Icon_80_2)}</span>
        </div>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>Boolean_23_2297: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(Boolean_23_2297)}</span>
        </div>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>State: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(State)}</span>
        </div>
      </div>
    </div>
  );
};

export default Radio;
