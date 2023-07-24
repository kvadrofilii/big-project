import { Meta, StoryObj } from '@storybook/react';

import { Code } from './Code';

const meta = {
  title: 'shared/Code',
  component: Code,
  tags: ['autodocs'],
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: `
    const meta = {
        title: 'shared/Code',
        component: Code,
      } satisfies Meta<typeof Code>;
    `,
  },
};
