import type { Meta, StoryObj } from '@storybook/react';
import { LangSelect } from './LangSelect';

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
