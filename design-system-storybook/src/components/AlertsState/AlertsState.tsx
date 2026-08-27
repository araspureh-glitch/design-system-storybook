import React from 'react';
import './AlertsState.css';

export interface AlertsStateProps {
  Boolean_53_0?: boolean;
  Property_1?: 'safe' | 'alert' | 'warning' | 'b warning' | 'b alert' | 'b safe';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `alerts state `
 * Page: `cards`
 * Type: `COMPONENT_SET`
 * ID: `180:4677`
 */
export const AlertsState: React.FC<AlertsStateProps> = ({
  Boolean_53_0 = true,
  Property_1 = "safe",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`alertsstate-container ${className}`}
      style={style}
      data-figma-layer="alerts state "
      data-figma-page="cards"
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          cards / alerts state 
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          180:4677
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=safe</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '53.84061813354492px', background: 'rgb(187, 247, 208)', alignItems: 'center' }}>
<span style={{ fontSize: '11.458052635192871px', fontWeight: 600, color: 'rgb(34, 197, 94)', display: 'inline-block' }}>-8.4%</span>
</div>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=b safe</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '37px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '53.84061813354492px', background: 'rgb(187, 247, 208)', alignItems: 'center' }}>
<span style={{ fontSize: '16px', fontWeight: 500, color: 'rgb(34, 197, 94)', display: 'inline-block' }}>Low</span>
</div>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=alert</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '53.84061813354492px', background: 'rgb(254, 202, 202)', alignItems: 'center' }}>
<span style={{ fontSize: '11.458052635192871px', fontWeight: 600, color: 'rgb(220, 38, 38)', display: 'inline-block' }}>+2.11%</span>
</div>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=b alert</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '37px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '53.84061813354492px', background: 'rgb(254, 202, 202)', alignItems: 'center' }}>
<span style={{ fontSize: '16px', fontWeight: 500, color: 'rgb(220, 38, 38)', display: 'inline-block' }}>High</span>
</div>
</div>
          </div>
      </div>

      <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '11px', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '8px' }}>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>Boolean_53_0: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(Boolean_53_0)}</span>
        </div>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>Property_1: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(Property_1)}</span>
        </div>
      </div>
    </div>
  );
};

export default AlertsState;
