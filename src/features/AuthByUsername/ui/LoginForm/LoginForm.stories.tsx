import { StoreDecorator } from '@/shared/config/testing';

import LoginForm from './LoginForm';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};

export const WithError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { error: 'ERROR' },
    }),
  ],
};

export const Loading: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { isLoading: true },
    }),
  ],
};
