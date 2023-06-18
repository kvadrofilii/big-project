import { IStateSchema } from 'app/providers/StoreProvider';

import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/profile.types';

describe('getProfileValidateErrors', () => {
  test('Should return filled state', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileError.INCORRECT_AGE,
          ValidateProfileError.INCORRECT_COUNTRY,
        ],
      },
    };
    expect(getProfileValidateErrors(state as IStateSchema)).toEqual([
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileValidateErrors(state as IStateSchema)).toEqual(undefined);
  });
});
