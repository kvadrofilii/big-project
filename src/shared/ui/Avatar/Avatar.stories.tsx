import { Avatar } from '@/shared/ui/Avatar/Avatar';
import AvatarImg from '../../assets/test/storybook.png';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 150,
    src: AvatarImg,
  },
};

export const Small: Story = {
  args: {
    size: 50,
    src: AvatarImg,
  },
};
