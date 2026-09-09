import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Component337 } from './Component337';
import { Component338 } from '../Component338/Component338';
import { Component339 } from '../Component339/Component339';
import { Component340 } from '../Component340/Component340';
import { Component341 } from '../Component341/Component341';
import { Component342 } from '../Component342/Component342';
import { Component343 } from '../Component343/Component343';

const meta: Meta = {
  title: "charts/System Usage",
  parameters: {
    docs: {
      description: {
        component: "System Usage Bar Chart collection.",
      },
    },
  },
};

export default meta;

export const SystemUsageOverview: StoryObj = {
  name: "Overview (All Bars)",
  render: () => (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', padding: '24px', background: '#0B132B', borderRadius: '12px', width: 'fit-content' }}>
      <Component337 />
      <Component338 />
      <Component339 />
      <Component340 />
      <Component341 />
      <Component342 />
      <Component343 />
    </div>
  ),
};

export const Bar31MW: StoryObj = {
  name: "31MW Bar",
  render: () => <Component337 />,
};

export const Bar22MW1: StoryObj = {
  name: "22MW Bar 1",
  render: () => <Component338 />,
};

export const Bar36MW: StoryObj = {
  name: "36MW Bar",
  render: () => <Component339 />,
};

export const Bar39MW: StoryObj = {
  name: "39MW Bar",
  render: () => <Component340 />,
};

export const Bar18MW: StoryObj = {
  name: "18MW Bar",
  render: () => <Component341 />,
};

export const Bar14MW: StoryObj = {
  name: "14MW Bar",
  render: () => <Component342 />,
};

export const Bar22MW2: StoryObj = {
  name: "22MW Bar 2",
  render: () => <Component343 />,
};
