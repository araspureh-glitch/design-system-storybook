import React from 'react';
import './CircleChart.css';

export interface CircleChartProps {
  Property_1?: 'Add A' | 'Add B' | 'Add C' | 'Add D' | 'Add E' | 'Add F' | 'View A detail' | 'View B detail' | 'View C detail' | 'View D detail' | 'View E detail' | 'View F detail';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `circle chart`
 * Page: `charts`
 * Type: `COMPONENT_SET`
 * ID: `180:4469`
 */
export const CircleChart: React.FC<CircleChartProps> = ({
  Property_1 = "Add A",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`circlechart-container ${className}`}
      style={style}
      data-figma-layer="circle chart"
      data-figma-page="charts"
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          charts / circle chart
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          180:4469
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=Add A</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(61, 189, 202)', display: 'inline-block', flexShrink: 0 }} />
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(24, 74, 79)', display: 'inline-block', flexShrink: 0 }} />
<span style={{ fontSize: '19.243637084960938px', fontWeight: 700, color: 'rgba(255, 255, 255, 0)', display: 'inline-block' }}>B</span>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=Add B</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(61, 189, 202)', display: 'inline-block', flexShrink: 0 }} />
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(24, 74, 79)', display: 'inline-block', flexShrink: 0 }} />
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(13, 148, 136)', display: 'inline-block', flexShrink: 0 }} />
<span style={{ fontSize: '21.381818771362305px', fontWeight: 700, color: 'rgb(15, 118, 110)', display: 'inline-block' }}>C</span>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=Add C</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(61, 189, 202)', display: 'inline-block', flexShrink: 0 }} />
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(24, 74, 79)', display: 'inline-block', flexShrink: 0 }} />
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(13, 148, 136)', display: 'inline-block', flexShrink: 0 }} />
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(99, 156, 89)', display: 'inline-block', flexShrink: 0 }} />
<span style={{ fontSize: '34.21091079711914px', fontWeight: 700, color: 'rgb(15, 118, 110)', display: 'inline-block' }}>D</span>
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=Add D</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(61, 189, 202)', display: 'inline-block', flexShrink: 0 }} />
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(24, 74, 79)', display: 'inline-block', flexShrink: 0 }} />
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(13, 148, 136)', display: 'inline-block', flexShrink: 0 }} />
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(20, 184, 166)', display: 'inline-block', flexShrink: 0 }} />
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(99, 156, 89)', display: 'inline-block', flexShrink: 0 }} />
<span style={{ fontSize: '17.10545539855957px', fontWeight: 700, color: 'rgb(15, 118, 110)', display: 'inline-block' }}>E</span>
</div>
          </div>
      </div>

      <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '11px', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '8px' }}>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>
          <span style={{ color: 'var(--uedp-slate-400, #94a3b8)' }}>Property_1: </span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{String(Property_1)}</span>
        </div>
      </div>
    </div>
  );
};

export default CircleChart;
