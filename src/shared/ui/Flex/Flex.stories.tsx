import { Flex } from './Flex';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'shared/Flex',
  component: Flex,
  tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div>Welcome to the Hell!</div>
        <div>Welcome to the Hell!</div>
        <div>Welcome to the Hell!</div>
      </>
    ),
  },
};
