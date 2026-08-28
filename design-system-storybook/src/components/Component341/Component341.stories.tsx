import type { Meta, StoryObj } from '@storybook/react';
import { Component341 } from './Component341';

const meta: Meta<typeof Component341> = {
  title: "components/Component 341",
  component: Component341,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 341 | ID: 4:748",
      },
    },
  },
  argTypes: {
    "Property_1": {
      "control": {
        "type": "select"
      },
      "options": [
        "Frame 1171275924",
        "Frame 1171275931"
      ],
      "description": "Figma variant state property"
    }
  },
};

export default meta;
type Story = StoryObj<typeof Component341>;

export const Active: Story = {
  args: {
    "Property_1": "Frame 1171275931"
  },
};

export const Inactive: Story = {
  args: {
    "Property_1": "Frame 1171275924"
  },
};
