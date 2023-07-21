import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/test/storybook.png';

import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Default = Template.bind({});
Default.args = {
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
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
