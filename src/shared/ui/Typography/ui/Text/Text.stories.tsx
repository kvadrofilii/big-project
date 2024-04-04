import { Text } from './Text';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Welcome to the Hell!',
  },
};
