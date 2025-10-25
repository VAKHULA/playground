import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Abbreviation } from './index';

const meta = {
  title: 'Components/Abbreviation',
  component: Abbreviation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
  args: {},
} satisfies Meta<typeof Abbreviation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Abbreviation',
  },
};

export const WithTitle: Story = {
  args: {
    children: 'Abbreviation',
    title: 'title',
  },
};
