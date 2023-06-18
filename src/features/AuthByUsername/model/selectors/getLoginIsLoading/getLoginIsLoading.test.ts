import { IStateSchema } from 'app/providers/StoreProvider';

import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('Should return isLoading', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as IStateSchema)).toEqual(true);
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getLoginIsLoading(state as IStateSchema)).toEqual(false);
  });
});
