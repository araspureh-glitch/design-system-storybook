import type { Meta, StoryObj } from '@storybook/react';
import { Component316 } from './Component316';

const meta: Meta<typeof Component316> = {
  title: "components/Component 316",
  component: Component316,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 316 | ID: 4:541",
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
type Story = StoryObj<typeof Component316>;

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
