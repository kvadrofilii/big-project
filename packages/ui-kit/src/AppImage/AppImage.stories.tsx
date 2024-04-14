import type { Meta, StoryObj } from '@storybook/react';
import AvatarImg from '../../assets/test/storybook.png';
import { AppImage } from './AppImage';

const meta = {
  title: 'shared/AppImage',
  component: AppImage,
  tags: ['autodocs'],
  args: {
    src: AvatarImg,
  },
} satisfies Meta<typeof AppImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
