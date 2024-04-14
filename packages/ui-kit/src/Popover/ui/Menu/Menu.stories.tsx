import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../../Button/Button';
import { Menu } from './Menu';

const meta = {
  title: 'shared/Menu',
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
