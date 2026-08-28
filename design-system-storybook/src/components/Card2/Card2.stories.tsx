import type { Meta, StoryObj } from '@storybook/react';
import { Card2 } from './Card2';

const meta: Meta<typeof Card2> = {
  title: "cards/card 2 ",
  component: Card2,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: card 2  | Page: cards | Node ID: 180:4619 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
    "Property_1": {
      "control": {
        "type": "select"
      },
      "options": [
        "active",
        "hover",
        "selected"
      ],
      "description": "Figma property: Property 1"
    },
    "showIcon": {
      "control": "boolean",
      "description": "Show Alert Warning Icon"
    },
    "title": {
      "control": "text",
      "description": "Heading text"
    },
    "subHeading": {
      "control": "text",
      "description": "Sub-heading text"
    },
    "badgeVariant": {
      "control": "select",
      "options": ["safe", "alert", "warning", "b warning", "b alert", "b safe"],
      "description": "Badge design variant"
    },
    "badgeText": {
      "control": "text",
      "description": "Override text inside badge"
    }
  },
};

export default meta;
type Story = StoryObj<typeof Card2>;

export const Active: Story = {
  args: {
    "Property_1": "active",
    "showIcon": true,
    "title": "High Spike Detected",
    "subHeading": "Zone 2 – Industrial Area",
    "badgeVariant": "alert"
  },
};

export const Hover: Story = {
  args: {
    "Property_1": "hover",
    "showIcon": true,
    "title": "High Spike Detected",
    "subHeading": "Zone 2 – Industrial Area",
    "badgeVariant": "alert"
  },
};

export const Selected: Story = {
  args: {
    "Property_1": "selected",
    "showIcon": true,
    "title": "High Spike Detected",
    "subHeading": "Zone 2 – Industrial Area",
    "badgeVariant": "alert"
  },
};
