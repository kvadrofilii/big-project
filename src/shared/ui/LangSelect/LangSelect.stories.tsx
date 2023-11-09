import { LangSelect } from './LangSelect';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'shared/LangSelect',
  component: LangSelect,
  tags: ['autodocs'],
} satisfies Meta<typeof LangSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
