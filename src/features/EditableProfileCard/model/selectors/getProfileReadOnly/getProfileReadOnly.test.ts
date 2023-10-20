import { StateSchema } from '@/app/providers/StoreProvider';

import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadOnly', () => {
  test('Should return filled state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { readOnly: true },
    };
    expect(getProfileReadOnly(state as StateSchema)).toEqual(true);
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined);
  });
});
