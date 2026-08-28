import type { Meta, StoryObj } from '@storybook/react';
import { Component332 } from './Component332';

const meta: Meta<typeof Component332> = {
  title: "components/Component 332",
  component: Component332,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 332 | ID: 4:478",
      },
    },
  },
  argTypes: {
    "Property_1": {
      "control": {
        "type": "select"
      },
      "options": [
        "Frame 601",
        "Frame 602"
      ],
      "description": "Figma variant state property"
    }
  },
};

export default meta;
type Story = StoryObj<typeof Component332>;

export const Active: Story = {
  args: {
    "Property_1": "Frame 601"
  },
};

export const Inactive: Story = {
  args: {
    "Property_1": "Frame 602"
  },
};
