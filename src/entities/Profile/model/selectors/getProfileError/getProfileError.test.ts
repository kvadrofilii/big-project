import { IStateSchema } from 'app/providers/StoreProvider';

import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('Should return error message', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: { error: 'ERROR' },
    };
    expect(getProfileError(state as IStateSchema)).toEqual('ERROR');
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileError(state as IStateSchema)).toEqual(undefined);
  });
});
