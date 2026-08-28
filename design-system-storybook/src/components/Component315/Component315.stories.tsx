import type { Meta, StoryObj } from '@storybook/react';
import { Component315 } from './Component315';

const meta: Meta<typeof Component315> = {
  title: "components/Component 315",
  component: Component315,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 315 | ID: 4:445",
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
type Story = StoryObj<typeof Component315>;

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
