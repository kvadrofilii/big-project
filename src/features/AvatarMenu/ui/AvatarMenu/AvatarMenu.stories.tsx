import { AvatarMenu } from './AvatarMenu';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'features/AvatarMenu',
  component: AvatarMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof AvatarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [],
};
