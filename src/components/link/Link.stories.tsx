import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Link } from './index';

const meta = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
  args: {},
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Link',
    href: '#',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Link',
    href: '#',
    className: 'secondary',
  },
};

export const Contrast: Story = {
  args: {
    children: 'Contrast Link',
    href: '#',
    className: 'contrast',
  },
};
