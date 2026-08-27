import React from 'react';
import './DateFilters.css';

export interface DateFiltersProps {
  Property_1?: 'Frame 1171275911' | 'Frame 1171275912';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Date filters`
 * Page: `date and time`
 * Type: `COMPONENT_SET`
 * ID: `181:6006`
 */
export const DateFilters: React.FC<DateFiltersProps> = ({
  Property_1 = "Frame 1171275911",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`datefilters-container ${className}`}
      style={style}
      data-figma-layer="Date filters"
      data-figma-page="date and time"
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-400, #94a3b8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          date and time / Date filters
        </span>
        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
          181:6006
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=Frame 1171275911</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '11px', background: 'rgba(223, 240, 243, 0.75)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 727</span>
</div>
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(1, 135, 147)', display: 'inline-block', flexShrink: 0 }} />
</div>
          </div>
<div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '8px', background: 'rgba(15,23,42,0.4)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>Variant: Property 1=Frame 1171275912</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '11px', background: 'rgba(223, 240, 243, 0.75)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 724</span>
</div>
<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgb(1, 135, 147)', display: 'inline-block', flexShrink: 0 }} />
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '16px', background: 'rgb(255, 255, 255)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Rectangle 739</span>
</div>
<span style={{ fontSize: '14.208954811096191px', fontWeight: 500, color: 'rgb(0, 60, 66)', display: 'inline-block' }}>By Date</span>
<div style={{ display: 'flex', flexDirection: 'row', gap: '10.656716346740723px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '17.761194229125977px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '7.104477405548096px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>

</div>
<span style={{ fontSize: '12px', fontWeight: 500, color: 'rgb(0, 60, 66)', display: 'inline-block' }}>This Week</span>
</div>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '17.761194229125977px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '7.104477405548096px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Checkbox & Radio</span>
</div>
<span style={{ fontSize: '12px', fontWeight: 500, color: 'rgb(131, 137, 140)', display: 'inline-block' }}>Last Week</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '10.656716346740723px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '17.761194229125977px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '7.104477405548096px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Checkbox & Radio</span>
</div>
<span style={{ fontSize: '12px', fontWeight: 500, color: 'rgb(131, 137, 140)', display: 'inline-block' }}>This Month</span>
</div>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '17.761194229125977px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '7.104477405548096px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Checkbox & Radio</span>
</div>
<span style={{ fontSize: '12px', fontWeight: 500, color: 'rgb(131, 137, 140)', display: 'inline-block' }}>Last Month</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '17.761194229125977px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '7.104477405548096px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Checkbox & Radio</span>
</div>
<span style={{ fontSize: '12px', fontWeight: 500, color: 'rgb(131, 137, 140)', display: 'inline-block' }}>This Year</span>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '17.761194229125977px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '4px 8px', borderRadius: '7.104477405548096px', background: 'rgba(255,255,255,0.03)', alignItems: 'center' }}>
<span style={{ fontSize: '11px', color: 'var(--uedp-slate-400, #94a3b8)' }}>Checkbox & Radio</span>
</div>
<span style={{ fontSize: '12px', fontWeight: 500, color: 'rgb(131, 137, 140)', display: 'inline-block' }}>Last Year</span>
</div>
</div>
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

export default DateFilters;
