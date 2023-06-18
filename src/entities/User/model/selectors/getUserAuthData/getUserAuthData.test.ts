import { IStateSchema } from 'app/providers/StoreProvider';

import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData', () => {
  test('Should return authData', () => {
    const authData = { id: '2', username: 'admin' };

    const state: DeepPartial<IStateSchema> = {
      user: { authData },
    };
    expect(getUserAuthData(state as IStateSchema)).toEqual(authData);
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getUserAuthData(state as IStateSchema)).toEqual(undefined);
  });
});
