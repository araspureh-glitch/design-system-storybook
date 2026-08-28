import type { Meta, StoryObj } from '@storybook/react';
import { Component327 } from './Component327';

const meta: Meta<typeof Component327> = {
  title: "components/Component 327",
  component: Component327,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 327 | ID: 4:481",
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
type Story = StoryObj<typeof Component327>;

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
