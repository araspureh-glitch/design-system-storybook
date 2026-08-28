import type { Meta, StoryObj } from '@storybook/react';
import { Card3 } from './Card3';

const meta: Meta<typeof Card3> = {
  title: "cards/card 3 ",
  component: Card3,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: card 3  | Page: cards | Node ID: 181:4698 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
    "Property_1": {
      "control": {
        "type": "select"
      },
      "options": [
        "Default",
        "hover"
      ],
      "description": "Figma property: Property 1"
    },
    "title": {
      "control": "text",
      "description": "Main Title (District Name)"
    },
    "subHeading": {
      "control": "text",
      "description": "District Type Sub-heading"
    },
    "description": {
      "control": "text",
      "description": "Description paragraph"
    },
    "valueText": {
      "control": "text",
      "description": "Power capacity value text"
    },
    "leftBadgeVariant": {
      "control": "select",
      "options": ["safe", "alert", "warning", "b warning", "b alert", "b safe"],
      "description": "Left badge design state"
    },
    "leftBadgeText": {
      "control": "text",
      "description": "Left badge text override"
    },
    "rightBadgeVariant": {
      "control": "select",
      "options": ["safe", "alert", "warning", "b warning", "b alert", "b safe"],
      "description": "Right badge design state"
    },
    "rightBadgeText": {
      "control": "text",
      "description": "Right badge text override"
    }
  },
};

export default meta;
type Story = StoryObj<typeof Card3>;

export const Default: Story = {
  args: {
    "Property_1": "Default",
    "title": "Westpark-West (Green & Recreational District)",
    "subHeading": "Green & Recreational District",
    "description": "Mix of university campuses, museums, and cafes moderate daytime peaks.",
    "valueText": "~1050MW",
    "leftBadgeVariant": "alert"
  },
};

export const Hover: Story = {
  args: {
    "Property_1": "hover",
    "title": "Westpark-West (Green & Recreational District)",
    "subHeading": "Green & Recreational District",
    "description": "Mix of university campuses, museums, and cafes moderate daytime peaks.",
    "valueText": "~1050MW",
    "leftBadgeVariant": "alert"
  },
};
