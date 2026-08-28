import React from 'react';
import './Notification.css';

export interface NotificationProps {
  Property_1?: 'NORMAL' | 'selected' | 'hover' | 'disable' | 'input';
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const BellIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill={color} 
    xmlns="http://www.w3.org/2000/svg"
    className="notification-icon-svg"
  >
    <path 
      d="M12 2C10.3 2 9 3.3 9 5V5.2C6.2 6 4 8.5 4 11.5V17L2 19V20H22V19L20 17V11.5C20 8.5 17.8 6 15 5.2V5C15 3.3 13.7 2 12 2ZM12 22C13.7 22 15 20.7 15 19H9C9 20.7 10.3 22 12 22Z"
    />
  </svg>
);

interface NotificationButtonProps {
  state: 'NORMAL' | 'selected' | 'hover' | 'disable' | 'input';
  onClick?: () => void;
}

const NotificationButton: React.FC<NotificationButtonProps> = ({ state, onClick }) => {
  const getBellColor = () => {
    switch (state) {
      case 'selected':
        return '#ffffff';
      case 'hover':
        return '#0d9488';
      case 'disable':
        return '#a1a1aa';
      case 'NORMAL':
      case 'input':
      default:
        return '#0f766e';
    }
  };

  return (
    <button 
      className={`notification-btn ${state}`} 
      onClick={state === 'disable' ? undefined : onClick}
      disabled={state === 'disable'}
      type="button"
      aria-label="Notification Bell"
    >
      <BellIcon color={getBellColor()} />
      {state === 'input' && <div className="notification-badge-dot" />}
    </button>
  );
};

/**
 * **Preserved Figma Layer Name**: `Notification`
 * Page: `components`
 * Type: `COMPONENT_SET`
 * ID: `25:1215`
 */
export const Notification: React.FC<NotificationProps> = ({
  Property_1 = "NORMAL",
  className = '',
  style = {},
  onClick,
  ...props
}) => {
  return (
    <div 
      className={`notification-container ${className}`}
      style={style}
      data-figma-layer="Notification"
      data-figma-page="components"
      {...props}
    >
      {/* Header Info */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          components / Notification
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          25:1215
        </span>
      </div>

      {/* Button Render */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div className="notification-variant-wrapper">
          <div className="notification-variant-label">Variant: Property 1={Property_1}</div>
          <NotificationButton state={Property_1} onClick={onClick} />
        </div>
      </div>

      {/* Debug Properties Footer */}
      <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '11px', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '8px' }}>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>Property_1: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(Property_1)}</span>
        </div>
      </div>
    </div>
  );
};

export default Notification;
