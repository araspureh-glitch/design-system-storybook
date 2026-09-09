import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Component337 } from './Component337';
import { Component338 } from '../Component338/Component338';
import { Component339 } from '../Component339/Component339';
import { Component340 } from '../Component340/Component340';
import { Component341 } from '../Component341/Component341';
import { Component342 } from '../Component342/Component342';
import { Component343 } from '../Component343/Component343';

const meta: Meta<typeof Component337> = {
  title: "system usage sections/Component 337",
  component: Component337,
  parameters: {
    docs: {
      description: {
        component: "System Usage Pill Bars: Contains Component 337 through Component 343 representing MW usage bars.",
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#13171f' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Component337>;

export const Component_337: Story = {
  render: () => <Component337 Property_1="Frame 1171275927" />,
};

export const Component_338: Story = {
  render: () => <Component338 Property_1="Frame 1171275928" />,
};

export const Component_339: Story = {
  render: () => <Component339 Property_1="Frame 1171275929" />,
};

export const Component_340: Story = {
  render: () => <Component340 Property_1="Frame 1171275930" />,
};

export const Component_341: Story = {
  render: () => <Component341 Property_1="Frame 1171275931" />,
};

export const Component_342: Story = {
  render: () => <Component342 Property_1="Frame 1171275932" />,
};

export const Component_343: Story = {
  render: () => <Component343 Property_1="Frame 1171275933" />,
};

export const AllBarsCombined: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-end', background: '#13171f', padding: '24px', borderRadius: '12px' }}>
      <Component337 Property_1="Frame 1171275927" />
      <Component338 Property_1="Frame 1171275921" />
      <Component339 Property_1="Frame 1171275922" />
      <Component340 Property_1="Frame 1171275923" />
      <Component341 Property_1="Frame 1171275924" />
      <Component342 Property_1="Frame 1171275925" />
      <Component343 Property_1="Frame 1171275926" />
    </div>
  ),
};
