import { Meta, StoryObj } from '@storybook/react';

import { CardAction } from './CardAction';

const meta = {
  title: 'shared/CardAction',
  component: CardAction,
  tags: ['autodocs'],
  args: {
    to: '/',
  },
} satisfies Meta<typeof CardAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Link',
  },
};
