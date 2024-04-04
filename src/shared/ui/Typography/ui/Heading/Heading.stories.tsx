import { Heading } from './Heading';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'shared/Heading',
  component: Heading,
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Welcome to the Hell!',
  },
};
