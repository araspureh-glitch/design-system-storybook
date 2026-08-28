import type { Meta, StoryObj } from '@storybook/react';
import { Lable } from './Lable';

const meta: Meta<typeof Lable> = {
  title: "components/lable",
  component: Lable,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: lable | Page: components | Node ID: 35:1599 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
    "Boolean_35_8": {
      "control": "boolean",
      "description": "Figma property: Boolean#35:8 (Show Subtitle)"
    },
    "Property_1": {
      "control": {
        "type": "select"
      },
      "options": [
        "Default",
        "hover"
      ],
      "description": "Figma variant state property for the Active State Preview"
    },
    "title": {
      "control": "text",
      "description": "Alert Row main title"
    },
    "subtitle": {
      "control": "text",
      "description": "Alert Row sub heading details"
    },
    "avatarLetter": {
      "control": "text",
      "description": "Single letter displayed inside circular avatar"
    }
  },
};

export default meta;
type Story = StoryObj<typeof Lable>;

export const Default: Story = {
  args: {
    "Boolean_35_8": true,
    "Property_1": "Default",
    "title": "High Spike Detected",
    "subtitle": "Zone 2 – Industrial Area",
    "avatarLetter": "P"
  },
};

export const Hover: Story = {
  args: {
    "Boolean_35_8": true,
    "Property_1": "hover",
    "title": "High Spike Detected",
    "subtitle": "Zone 2 – Industrial Area",
    "avatarLetter": "P"
  },
};
