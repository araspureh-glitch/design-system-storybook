import type { Meta, StoryObj } from '@storybook/react';
import { CircleChart } from './CircleChart';

const meta: Meta<typeof CircleChart> = {
  title: 'charts/CircleChart',
  component: CircleChart,
  parameters: {
    docs: {
      description: {
        component:
          'Renewable vs Non Renewable Energy donut chart card. Figma Node ID: 4-639 | Page: charts | Type: COMPONENT_SET',
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#13171f' },
        { name: 'light', value: '#f1f5f9' },
      ],
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Card size variant',
    },
    renewablePercent: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    nonRenewablePercent: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CircleChart>;

export const Small: Story = {
  args: {
    variant: 'small',
    title: 'Renewable vs Non Renewable Energy',
    renewableKwh: '3,120 kWh',
    renewablePercent: 25,
    nonRenewableKwh: '9,330 kWh',
    nonRenewablePercent: 75,
    centerValue: 100,
    centerLabel: 'November',
  },
};

export const Medium: Story = {
  args: {
    variant: 'medium',
    title: 'Renewable vs Non Renewable Energy',
    renewableKwh: '3,120 kWh',
    renewablePercent: 25,
    nonRenewableKwh: '9,330 kWh',
    nonRenewablePercent: 75,
    centerValue: 100,
    centerLabel: 'November',
  },
};

export const Large: Story = {
  args: {
    variant: 'large',
    title: 'Renewable vs Non Renewable Energy',
    renewableKwh: '3,120 kWh',
    renewablePercent: 25,
    nonRenewableKwh: '9,330 kWh',
    nonRenewablePercent: 75,
    centerValue: 100,
    centerLabel: 'November',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-start', padding: '20px', background: '#13171f' }}>
      <CircleChart variant="small" />
      <CircleChart variant="medium" />
      <CircleChart variant="large" />
    </div>
  ),
};
