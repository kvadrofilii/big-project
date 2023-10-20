import { StateSchema } from '@/app/providers/StoreProvider';

import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../consts/validateProfileError';

describe('getProfileValidateErrors', () => {
  test('Should return filled state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_COUNTRY],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
