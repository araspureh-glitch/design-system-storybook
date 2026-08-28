import type { Meta, StoryObj } from '@storybook/react';
import { Component337 } from './Component337';

const meta: Meta<typeof Component337> = {
  title: "components/Component 337",
  component: Component337,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 337 | ID: 4:720",
      },
    },
  },
  argTypes: {
    "Property_1": {
      "control": {
        "type": "select"
      },
      "options": [
        "Frame 1171275920",
        "Frame 1171275927"
      ],
      "description": "Figma variant state property"
    }
  },
};

export default meta;
type Story = StoryObj<typeof Component337>;

export const Active: Story = {
  args: {
    "Property_1": "Frame 1171275927"
  },
};

export const Inactive: Story = {
  args: {
    "Property_1": "Frame 1171275920"
  },
};
