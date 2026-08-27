import type { Meta, StoryObj } from '@storybook/react';
import { NavCard } from './NavCard';

const meta: Meta<typeof NavCard> = {
  title: "nav bar/nav card ",
  component: NavCard,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: nav card  | Page: nav bar | Node ID: 181:4807 | Type: INSTANCE",
      },
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NavCard>;

export const Primary: Story = {
  args: {},
};
