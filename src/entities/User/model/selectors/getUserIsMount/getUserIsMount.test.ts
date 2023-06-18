import { IStateSchema } from 'app/providers/StoreProvider';

import { getUserIsMount } from './getUserIsMount';

describe('getUserIsMount', () => {
  test('Should return true', () => {
    const state: DeepPartial<IStateSchema> = {
      user: { isMount: true },
    };
    expect(getUserIsMount(state as IStateSchema)).toEqual(true);
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getUserIsMount(state as IStateSchema)).toEqual(undefined);
  });
});
