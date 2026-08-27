import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Date as DatePicker } from './Date';

const meta: Meta<typeof DatePicker> = {
  title: 'date and time/DatePicker',
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component:
          'Interactive Date Selection Pill and Calendar Dropdown. Figma Node ID: 181:5913 | Page: date and time.',
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
      description: 'Figma variant options (open dropdown or closed)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const ClosedPill: Story = {
  args: {
    Property_1: 'Frame 1171275912',
  },
};

export const OpenCalendarDropdown: Story = {
  args: {
    Property_1: 'Frame 1171275911',
  },
};

export const InteractiveShowcase: Story = {
  name: 'Interactive Calendar Picker Showcase',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minHeight: '420px', padding: '40px', background: '#1c1c1e', borderRadius: '16px', width: '500px', alignItems: 'flex-start' }}>
      <div style={{ color: '#94a3b8', fontSize: '12px' }}>Click to open/close or select a date:</div>
      <DatePicker Property_1="Frame 1171275912" />
    </div>
  ),
};
