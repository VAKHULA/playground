import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Accordion } from './index';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
  args: {},
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Accordion',
    summary: 'summary',
    className: 'secondary'
  },
};

export const WithTitle: Story = {
  args: {
    children: 'Accordion',
    summary: 'summary',
    className: 'contrast'
  },
};
