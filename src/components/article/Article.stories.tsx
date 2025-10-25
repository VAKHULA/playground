import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Article } from './index';

const meta = {
  title: 'Components/Article',
  component: Article,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
  args: {},
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'true',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    className: 'secondary',
  },
};

export const Contrast: Story = {
  args: {
    children: 'Button',
    className: 'contrast',
  },
};
