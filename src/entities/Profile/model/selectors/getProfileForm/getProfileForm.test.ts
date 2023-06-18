import { IStateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('Should return form data', () => {
    const data = {
      username: 'admin',
      age: 22,
      country: Country.America,
      lastName: 'Lain',
      firstName: 'Chaisy',
      city: 'Moscow',
      currency: Currency.RUB,
    };
    const state: DeepPartial<IStateSchema> = {
      profile: { form: data },
    };
    expect(getProfileForm(state as IStateSchema)).toEqual(data);
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileForm(state as IStateSchema)).toEqual(undefined);
  });
});
