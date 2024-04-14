import { StateSchema } from '~/app/providers/StoreProvider';
import { getUserIsMount } from './getUserIsMount';

describe('getUserIsMount', () => {
  test('Should return true', () => {
    const state: DeepPartial<StateSchema> = {
      user: { isMount: true },
    };
    expect(getUserIsMount(state as StateSchema)).toEqual(true);
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserIsMount(state as StateSchema)).toEqual(undefined);
  });
});
