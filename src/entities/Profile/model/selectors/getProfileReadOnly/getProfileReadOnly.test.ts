import { IStateSchema } from 'app/providers/StoreProvider';

import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadOnly', () => {
  test('Should return filled state', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: { readOnly: true },
    };
    expect(getProfileReadOnly(state as IStateSchema)).toEqual(true);
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileReadOnly(state as IStateSchema)).toEqual(undefined);
  });
});
