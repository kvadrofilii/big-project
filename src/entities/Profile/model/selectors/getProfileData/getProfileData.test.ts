import { IStateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('Should return data', () => {
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
      profile: { data },
    };
    expect(getProfileData(state as IStateSchema)).toEqual(data);
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileData(state as IStateSchema)).toEqual(undefined);
  });
});
