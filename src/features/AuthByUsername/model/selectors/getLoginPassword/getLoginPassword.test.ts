import { IStateSchema } from 'app/providers/StoreProvider';

import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('Should return admin', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        password: 'admin',
      },
    };
    expect(getLoginPassword(state as IStateSchema)).toEqual('admin');
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getLoginPassword(state as IStateSchema)).toEqual('');
  });
});
