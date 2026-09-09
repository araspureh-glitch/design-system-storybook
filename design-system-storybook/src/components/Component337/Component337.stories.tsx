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
        component: "System Usage Bar Chart collection combining Figma Components 337 to 343.",
      },
    },
  },
};

export default meta;

export const SystemUsageOverview: StoryObj = {
  name: "System Usage Overview (All Bars)",
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

export const Bar337: StoryObj = {
  name: "Component 337 (31MW)",
  render: () => <Component337 />,
};

export const Bar338: StoryObj = {
  name: "Component 338 (22MW)",
  render: () => <Component338 />,
};

export const Bar339: StoryObj = {
  name: "Component 339 (36MW)",
  render: () => <Component339 />,
};

export const Bar340: StoryObj = {
  name: "Component 340 (39MW)",
  render: () => <Component340 />,
};

export const Bar341: StoryObj = {
  name: "Component 341 (18MW)",
  render: () => <Component341 />,
};

export const Bar342: StoryObj = {
  name: "Component 342 (14MW)",
  render: () => <Component342 />,
};

export const Bar343: StoryObj = {
  name: "Component 343 (22MW)",
  render: () => <Component343 />,
};
