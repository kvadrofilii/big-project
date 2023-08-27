import { Meta, StoryObj } from '@storybook/react';

import { Menu } from './Menu';
import { Button } from '../Button/Button';

const meta = {
  title: '/Menu',
  component: Menu,
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Button>Button</Button>,
    items: [
      {
        id: 1,
        content: 'link 1',
      },
      {
        id: 2,
        content: 'link 2',
      },
    ],
  },
  decorators: [],
};
