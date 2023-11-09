import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContainedSmall: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
    size: 'small',
  },
};

export const ContainedMedium: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
  },
};

export const ContainedLarge: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
    size: 'large',
  },
};

export const ContainedPrimary: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
    color: 'primary',
  },
};

export const ContainedSecondary: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
    color: 'secondary',
  },
};

export const TextPrimary: Story = {
  args: {
    children: 'Button',
    color: 'primary',
  },
};

export const TextSecondary: Story = {
  args: {
    children: 'Button',
    color: 'secondary',
  },
};

export const OutlinedPrimary: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
    color: 'primary',
  },
};

export const OutlinedSecondary: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
    color: 'secondary',
  },
};

export const ContainedFullWidth: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
    fullWidth: true,
  },
};

export const ContainedDisabled: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
    color: 'primary',
    disabled: true,
  },
};

export const TextDisabled: Story = {
  args: {
    children: 'Button',
    variant: 'text',
    color: 'primary',
    disabled: true,
  },
};

export const OutlinedDisabled: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
    color: 'primary',
    disabled: true,
  },
};
