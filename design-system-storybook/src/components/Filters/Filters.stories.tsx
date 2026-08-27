import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Filters } from './Filters';

const meta: Meta<typeof Filters> = {
  title: 'date and time/Filters',
  component: Filters,
  parameters: {
    docs: {
      description: {
        component:
          'Interactive Filters Selection Pill, Checkbox Popover, and Date Range Calendar Picker. Figma Node ID: 181:5885 | Page: date and time.',
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
      options: ['Frame 1171275911', 'Frame 1171275912', 'Frame 1171275913'],
      description: 'Figma variant options (closed, open checklist, or open calendar)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Filters>;

export const ClosedButton: Story = {
  args: {
    Property_1: 'Frame 1171275911',
  },
};

export const OpenChecklist: Story = {
  args: {
    Property_1: 'Frame 1171275912',
  },
};

export const OpenCalendarRange: Story = {
  args: {
    Property_1: 'Frame 1171275913',
  },
};

export const InteractiveShowcase: Story = {
  name: 'Interactive Filter Picker Showcase',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minHeight: '800px', padding: '40px', background: '#1c1c1e', borderRadius: '16px', width: '500px', alignItems: 'flex-start' }}>
      <div style={{ color: '#94a3b8', fontSize: '12px' }}>Click to open/close or toggle filter values:</div>
      <Filters Property_1="Frame 1171275911" />
    </div>
  ),
};
