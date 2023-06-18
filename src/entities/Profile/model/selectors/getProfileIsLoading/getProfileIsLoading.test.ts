import { IStateSchema } from 'app/providers/StoreProvider';

import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
  test('Should return filled state', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: { isLoading: true },
    };
    expect(getProfileIsLoading(state as IStateSchema)).toEqual(true);
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileIsLoading(state as IStateSchema)).toEqual(undefined);
  });
});
