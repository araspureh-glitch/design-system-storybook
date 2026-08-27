import type { Meta, StoryObj } from '@storybook/react';
import { NavLine } from './NavLine';

const meta: Meta<typeof NavLine> = {
  title: "nav bar/nav line ",
  component: NavLine,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: nav line  | Page: nav bar | Node ID: 181:4808 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "Property_1": {
    "control": {
      "type": "select"
    },
    "options": [
      "Default",
      "Variant2",
      "Variant3"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof NavLine>;

export const Primary: Story = {
  args: {
  "Property_1": "Default"
},
};
