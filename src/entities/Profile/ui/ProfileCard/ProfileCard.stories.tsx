import type { Meta, StoryObj } from '@storybook/react';
import { Country } from '@/entities/Country/testing';
import { Currency } from '@/entities/Currency/testing';
import AvatarImg from '@/shared/assets/test/storybook.png';
import { ProfileCard } from './ProfileCard';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      username: 'admin',
      age: 22,
      country: Country.America,
      lastName: 'Lain',
      firstName: 'Chaisy',
      city: 'Moscow',
      currency: Currency.RUB,
      avatar: AvatarImg,
    },
  },
};

export const WithError: Story = {
  args: {
    error: 'true',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
