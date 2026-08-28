import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: "components/radio",
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: radio | Page: components | Node ID: 23:2294 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
    "Left_Icon_80_2": {
      "control": "boolean",
      "description": "Figma property: Left Icon#80:2 (Show Checkbox Box)"
    },
    "State": {
      "control": {
        "type": "select"
      },
      "options": [
        "Default",
        "Hover",
        "Selected",
        "Disabled"
      ],
      "description": "Figma property: State"
    },
    "label": {
      "control": "text",
      "description": "Checkbox/Radio label text"
    },
    "Boolean_23_2297": {
      "control": "boolean",
      "description": "Figma property: Boolean_23_2297 (Show Label Text)"
    }
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    "Left_Icon_80_2": true,
    "State": "Default",
    "label": "This Week",
    "Boolean_23_2297": true
  },
};

export const Hover: Story = {
  args: {
    "Left_Icon_80_2": true,
    "State": "Hover",
    "label": "This Week",
    "Boolean_23_2297": true
  },
};

export const Selected: Story = {
  args: {
    "Left_Icon_80_2": true,
    "State": "Selected",
    "label": "This Week",
    "Boolean_23_2297": true
  },
};

export const Disabled: Story = {
  args: {
    "Left_Icon_80_2": true,
    "State": "Disabled",
    "label": "This Week",
    "Boolean_23_2297": true
  },
};
