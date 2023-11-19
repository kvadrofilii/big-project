import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Country } from '@/entities/Country/testing';
import { Currency } from '@/entities/Currency/testing';
import { Profile } from '@/entities/Profile/testing';
import { $api } from '@/shared/api';
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender';

import { EditableProfileCard } from './EditableProfileCard';
import { profileReducer } from '../../model/slices/profile.slice';

const mockData: Profile = {
  id: '1',
  username: 'admin',
  age: 22,
  country: Country.America,
  lastName: 'Lain',
  firstName: 'Chaisy',
  city: 'Moscow',
  currency: Currency.RUB,
};

const options = {
  initialState: {
    profile: {
      readOnly: true,
      data: mockData,
      form: mockData,
    },
    user: {
      authData: {
        id: '1',
        username: 'admin',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('EditableProfileCard', () => {
  // Выполнится перед каждым тестом
  beforeEach(() => {
    jest.spyOn($api, 'get').mockReturnValue(
      Promise.resolve({
        data: mockData,
      }),
    );
  });

  test('Switching read only', async () => {
    ComponentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
  });

  test('When canceled, the values should be reset to zero', async () => {
    ComponentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastName'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'test');
    await userEvent.type(screen.getByTestId('ProfileCard.lastName'), 'test');

    expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('test');
    expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('test');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

    expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('Chaisy');
    expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('Lain');
  });

  test('An error should appear', async () => {
    ComponentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(screen.getByTestId('EditableProfileCard.error')).toBeInTheDocument();
  });

  test('If there are no errors then the PUT request goes away', async () => {
    ComponentRender(<EditableProfileCard id="1" />, options);
    const mockPutReq = jest.spyOn($api, 'put');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'test');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(mockPutReq).toHaveBeenCalled();
  });
});
