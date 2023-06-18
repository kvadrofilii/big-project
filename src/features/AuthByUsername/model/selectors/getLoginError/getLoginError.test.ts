import { IStateSchema } from 'app/providers/StoreProvider';

import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('Should return error', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        error: 'error',
      },
    };
    expect(getLoginError(state as IStateSchema)).toEqual('error');
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getLoginError(state as IStateSchema)).toEqual(undefined);
  });
});
