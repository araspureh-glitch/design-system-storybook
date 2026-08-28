import type { Meta, StoryObj } from '@storybook/react';
import { Component330 } from './Component330';

const meta: Meta<typeof Component330> = {
  title: "components/Component 330",
  component: Component330,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 330 | ID: 4:517",
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
type Story = StoryObj<typeof Component330>;

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
