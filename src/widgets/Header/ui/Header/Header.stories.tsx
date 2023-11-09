import { StoreDecorator } from '@/shared/config/testing';

import { Header } from './Header';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'widgets/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};
