import { StateSchema } from '@/app/providers/StoreProvider';

import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('Should return admin', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: 'admin',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('admin');
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
