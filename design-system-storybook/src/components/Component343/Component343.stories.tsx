import type { Meta, StoryObj } from '@storybook/react';
import { Component343 } from './Component343';

const meta: Meta<typeof Component343> = {
  title: "charts/Component 343",
  component: Component343,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 343 | Page: charts | Node ID: 4:762 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "Property_1": {
    "control": {
      "type": "select"
    },
    "options": [
      "Frame 1171275926",
      "Frame 1171275933"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof Component343>;

export const Primary: Story = {
  args: {
  "Property_1": "Frame 1171275926"
},
};
