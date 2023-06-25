import { StateSchema } from 'app/providers/StoreProvider';

import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData', () => {
  test('Should return authData', () => {
    const authData = { id: '2', username: 'admin' };

    const state: DeepPartial<StateSchema> = {
      user: { authData },
    };
    expect(getUserAuthData(state as StateSchema)).toEqual(authData);
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
  });
});
