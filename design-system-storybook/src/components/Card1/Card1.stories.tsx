import type { Meta, StoryObj } from '@storybook/react';
import { Card1 } from './Card1';

const meta: Meta<typeof Card1> = {
  title: "cards/card 1",
  component: Card1,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: card 1 | Page: cards | Node ID: 180:4576 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
    "Boolean_18_13": {
      "control": "boolean",
      "description": "Figma property: Boolean#18:13"
    },
    "Property_1": {
      "control": {
        "type": "select"
      },
      "options": [
        "active",
        "hover",
        "selected",
        "default"
      ],
      "description": "Figma property: Property 1"
    },
    "title": {
      "control": "text",
      "description": "Main Title (Heading 1)"
    },
    "aqiValue": {
      "control": "text",
      "description": "AQI Value"
    },
    "aqiLabel": {
      "control": "text",
      "description": "AQI Unit Label"
    },
    "subHeading": {
      "control": "text",
      "description": "Sub-heading text"
    },
    "badgeVariant": {
      "control": "select",
      "options": ["safe", "alert", "warning", "b warning", "b alert", "b safe"],
      "description": "Badge design state"
    },
    "badgeText": {
      "control": "text",
      "description": "Override text inside badge"
    },
    "vsText": {
      "control": "text",
      "description": "Comparison label text"
    }
  },
};

export default meta;
type Story = StoryObj<typeof Card1>;

export const Active: Story = {
  args: {
    "Boolean_18_13": true,
    "Property_1": "active",
    "title": "Air Quality Index",
    "aqiValue": "43.50",
    "aqiLabel": "AQI",
    "subHeading": "Renewable Energy: 54.86%",
    "badgeVariant": "safe",
    "vsText": "vs Last Month"
  },
};

export const Hover: Story = {
  args: {
    "Boolean_18_13": true,
    "Property_1": "hover",
    "title": "Air Quality Index",
    "aqiValue": "43.50",
    "aqiLabel": "AQI",
    "subHeading": "Renewable Energy: 54.86%",
    "badgeVariant": "safe",
    "vsText": "vs Last Month"
  },
};

export const Selected: Story = {
  args: {
    "Boolean_18_13": true,
    "Property_1": "selected",
    "title": "Air Quality Index",
    "aqiValue": "43.50",
    "aqiLabel": "AQI",
    "subHeading": "Renewable Energy: 54.86%",
    "badgeVariant": "safe",
    "vsText": "vs Last Month"
  },
};

export const Default: Story = {
  args: {
    "Boolean_18_13": true,
    "Property_1": "default",
    "title": "Air Quality Index",
    "aqiValue": "43.50",
    "aqiLabel": "AQI",
    "subHeading": "Renewable Energy: 54.86%",
    "badgeVariant": "safe",
    "vsText": "vs Last Month"
  },
};
