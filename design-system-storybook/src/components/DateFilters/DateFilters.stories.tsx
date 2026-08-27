import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DateFilters } from './DateFilters';

const meta: Meta<typeof DateFilters> = {
  title: 'date and time/DateFilters',
  component: DateFilters,
  parameters: {
    docs: {
      description: {
        component:
          'Compact triple-dot ellipsis filter trigger (33x33px) with a checklist dropdown popover (307x148px). Figma Node ID: 181:6006 | Page: date and time.',
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#13171f' },
        { name: 'light', value: '#f8fafc' },
      ],
    },
    layout: 'centered',
  },
  argTypes: {
    Property_1: {
      control: { type: 'select' },
      options: ['Frame 1171275911', 'Frame 1171275912'],
      description: 'Figma variant options (closed ellipsis or open checklist popover)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DateFilters>;

export const ClosedEllipsis: Story = {
  args: {
    Property_1: 'Frame 1171275911',
  },
};

export const OpenChecklistPopover: Story = {
  args: {
    Property_1: 'Frame 1171275912',
  },
};

export const InteractiveShowcase: Story = {
  name: 'Interactive Ellipsis Filter Showcase',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minHeight: '260px', padding: '40px', background: '#1c1c1e', borderRadius: '16px', width: '400px', alignItems: 'flex-end' }}>
      <div style={{ color: '#94a3b8', fontSize: '12px', width: '100%', textAlign: 'left' }}>Click the ellipsis to toggle popover:</div>
      <DateFilters Property_1="Frame 1171275911" />
    </div>
  ),
};
