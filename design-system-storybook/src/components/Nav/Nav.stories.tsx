import type { Meta, StoryObj } from '@storybook/react';
import { Nav } from './Nav';

const meta: Meta<typeof Nav> = {
  title: "nav bar/nav ",
  component: Nav,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: nav  | Page: nav bar | Node ID: 181:4800 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "Property_1": {
    "control": {
      "type": "select"
    },
    "options": [
      "hover",
      "blank",
      "selected"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const Primary: Story = {
  args: {
  "Property_1": "hover"
},
};
