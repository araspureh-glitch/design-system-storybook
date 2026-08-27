import type { Meta, StoryObj } from '@storybook/react';
import { NavComponent } from './NavComponent';

const meta: Meta<typeof NavComponent> = {
  title: "nav bar/nav component ",
  component: NavComponent,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: nav component  | Page: nav bar | Node ID: 181:4854 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "Instance_11_7": {
    "control": "text",
    "description": "Figma property: Instance#11:7"
  },
  "Property_1": {
    "control": {
      "type": "select"
    },
    "options": [
      "filled",
      "blank"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof NavComponent>;

export const Primary: Story = {
  args: {
  "Instance_11_7": "9:1329",
  "Property_1": "filled"
},
};
