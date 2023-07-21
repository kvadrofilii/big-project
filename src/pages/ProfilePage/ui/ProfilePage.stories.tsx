import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/test/storybook.png';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  StoreDecorator({
    profile: {
      form: {
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
  }),
];
