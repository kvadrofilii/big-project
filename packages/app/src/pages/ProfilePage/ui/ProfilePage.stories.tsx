// import { Country } from 'entities/Country';
// import { Currency } from 'entities/Currency';
// import AvatarImg from 'shared/assets/test/storybook.png';
// import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-remix-react-router';
import ProfilePage from './ProfilePage';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { userId: '1' },
      },
      routing: { path: '/profile/:userId' },
    }),
  },
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    // StoreDecorator({
    //  profile: {
    //    form: {
    //      username: 'admin',
    //      age: 22,
    //      country: Country.America,
    //      lastName: 'Lain',
    //      firstName: 'Chaisy',
    //      city: 'Moscow',
    //      currency: Currency.RUB,
    //      avatar: AvatarImg,
    //    },
    //  },
    // }),
  ],
};
