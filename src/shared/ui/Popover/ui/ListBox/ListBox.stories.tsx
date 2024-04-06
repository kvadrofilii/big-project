import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const meta = {
  title: 'shared/ListBox',
  component: ListBox,
  tags: ['autodocs'],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: '123',
    label: 'Specify the country',
    options: [
      { value: '123', content: 'Первый пункт' },
      { value: '1234', content: 'Второй пункт' },
    ],
    onChange: () => {},
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
};
