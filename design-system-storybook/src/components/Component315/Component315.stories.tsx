import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Component315 } from './Component315';
import { Component316 } from '../Component316/Component316';
import { Component317 } from '../Component317/Component317';
import { Component318 } from '../Component318/Component318';
import { Component319 } from '../Component319/Component319';
import { Component326 } from '../Component326/Component326';
import { Component327 } from '../Component327/Component327';
import { Component328 } from '../Component328/Component328';
import { Component329 } from '../Component329/Component329';
import { Component330 } from '../Component330/Component330';
import { Component331 } from '../Component331/Component331';
import { Component332 } from '../Component332/Component332';

const meta: Meta = {
  title: "charts/Energy Trends",
  parameters: {
    docs: {
      description: {
        component: "12-Month Energy Load Trends Bar Chart collection combining Figma Components 315–319 & 326–332.",
      },
    },
  },
};

export default meta;

export const EnergyTrendsOverview: StoryObj = {
  name: "12-Month Energy Trends Overview (All Bars)",
  render: () => (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', padding: '24px', background: '#0B132B', borderRadius: '12px', width: 'fit-content', overflowX: 'auto' }}>
      <Component315 />
      <Component316 />
      <Component317 />
      <Component318 />
      <Component319 />
      <Component326 />
      <Component327 />
      <Component328 />
      <Component329 />
      <Component330 />
      <Component331 />
      <Component332 />
    </div>
  ),
};

export const Bar315: StoryObj = {
  name: "Component 315 (February 2024)",
  render: () => <Component315 />,
};

export const Bar316: StoryObj = {
  name: "Component 316 (March 2024)",
  render: () => <Component316 />,
};

export const Bar317: StoryObj = {
  name: "Component 317 (April 2024)",
  render: () => <Component317 />,
};

export const Bar318: StoryObj = {
  name: "Component 318 (May 2024)",
  render: () => <Component318 />,
};

export const Bar319: StoryObj = {
  name: "Component 319 (June 2024)",
  render: () => <Component319 />,
};

export const Bar326: StoryObj = {
  name: "Component 326 (July 2024)",
  render: () => <Component326 />,
};

export const Bar327: StoryObj = {
  name: "Component 327 (August 2024)",
  render: () => <Component327 />,
};

export const Bar328: StoryObj = {
  name: "Component 328 (September 2024)",
  render: () => <Component328 />,
};

export const Bar329: StoryObj = {
  name: "Component 329 (October 2024)",
  render: () => <Component329 />,
};

export const Bar330: StoryObj = {
  name: "Component 330 (November 2024)",
  render: () => <Component330 />,
};

export const Bar331: StoryObj = {
  name: "Component 331 (December 2024)",
  render: () => <Component331 />,
};

export const Bar332: StoryObj = {
  name: "Component 332 (January 2025)",
  render: () => <Component332 />,
};
