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
        component: "12-Month Energy Load Trends Bar Chart collection.",
      },
    },
  },
};

export default meta;

export const EnergyTrendsOverview: StoryObj = {
  name: "Overview (All Bars)",
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

export const Feb2024: StoryObj = {
  name: "February 2024",
  render: () => <Component315 />,
};

export const Mar2024: StoryObj = {
  name: "March 2024",
  render: () => <Component316 />,
};

export const Apr2024: StoryObj = {
  name: "April 2024",
  render: () => <Component317 />,
};

export const May2024: StoryObj = {
  name: "May 2024",
  render: () => <Component318 />,
};

export const Jun2024: StoryObj = {
  name: "June 2024",
  render: () => <Component319 />,
};

export const Jul2024: StoryObj = {
  name: "July 2024",
  render: () => <Component326 />,
};

export const Aug2024: StoryObj = {
  name: "August 2024",
  render: () => <Component327 />,
};

export const Sep2024: StoryObj = {
  name: "September 2024",
  render: () => <Component328 />,
};

export const Oct2024: StoryObj = {
  name: "October 2024",
  render: () => <Component329 />,
};

export const Nov2024: StoryObj = {
  name: "November 2024",
  render: () => <Component330 />,
};

export const Dec2024: StoryObj = {
  name: "December 2024",
  render: () => <Component331 />,
};

export const Jan2025: StoryObj = {
  name: "January 2025",
  render: () => <Component332 />,
};
