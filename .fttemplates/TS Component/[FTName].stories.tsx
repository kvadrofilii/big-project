import { Meta, StoryObj } from '@storybook/react';

import { [FTName] } from './[FTName]';

const meta = {
  title: '/[FTName]',
  component: [FTName],
  tags: ['autodocs'],
} satisfies Meta<typeof [FTName]>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [],
};
