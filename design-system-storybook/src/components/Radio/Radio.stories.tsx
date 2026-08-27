import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: "components/radio",
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: radio | Page: components | Node ID: 23:2294 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "Left_Icon_80_2": {
    "control": "boolean",
    "description": "Figma property: Left Icon#80:2"
  },
  "State": {
    "control": {
      "type": "select"
    },
    "options": [
      "Default",
      "Hover",
      "Selected",
      "Disabled"
    ],
    "description": "Figma property: State"
  }
},
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Primary: Story = {
  args: {
  "Left_Icon_80_2": true,
  "State": "Default"
},
};
