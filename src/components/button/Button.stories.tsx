import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';

import { Button } from './index';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
  args: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: true,
    onClick: fn(),
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    onClick: fn(),
    className: 'secondary',
  },
};

export const Contrast: Story = {
  args: {
    children: 'Button',
    onClick: fn(),
    className: 'contrast',
  },
};
