import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { NavComponent } from './NavComponent';

const meta: Meta<typeof NavComponent> = {
  title: 'nav bar/NavComponent',
  component: NavComponent,
  parameters: {
    docs: {
      description: {
        component:
          'Nav Component sidebar item supporting filled (active/selected) and blank (inactive) states. Figma Node ID: 181:4854 | Page: nav bar.',
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
      options: ['filled', 'blank'],
      description: 'Figma variant options',
    },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof NavComponent>;

export const Active: Story = {
  args: {
    Property_1: 'filled',
    label: 'Dashboard',
  },
};

export const Inactive: Story = {
  args: {
    Property_1: 'blank',
    label: 'Dashboard',
  },
};

export const AllVariants: Story = {
  name: 'All Variants (Like Figma Canvas)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '40px', background: '#13171f', borderRadius: '16px' }}>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '11px', marginBottom: '8px' }}>filled</div>
        <NavComponent Property_1="filled" label="Dashboard" />
      </div>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '11px', marginBottom: '8px' }}>blank</div>
        <NavComponent Property_1="blank" label="Dashboard" />
      </div>
    </div>
  ),
};
