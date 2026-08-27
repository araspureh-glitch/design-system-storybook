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
    "description": "Figma property: Boolean#35:8"
  },
  "Property_1": {
    "control": {
      "type": "select"
    },
    "options": [
      "Default",
      "hover"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof Lable>;

export const Primary: Story = {
  args: {
  "Boolean_35_8": true,
  "Property_1": "Default"
},
};
