import { AppImage } from './AppImage';
import AvatarImg from '../../assets/test/storybook.png';

import type { Meta, StoryObj } from '@storybook/react';

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
