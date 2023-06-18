import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { profileActions, profileReducer } from './profile.slice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { IProfileSchema, ValidateProfileError } from '../types/profile.types';

const data = {
  username: 'admin',
  age: 22,
  country: Country.America,
  lastName: 'Lain',
  firstName: 'Chaisy',
  city: 'Moscow',
  currency: Currency.RUB,
};

describe('loginSlice', () => {
  test('test set readOnly', () => {
    const state: DeepPartial<IProfileSchema> = { readOnly: false };
    expect(profileReducer(state as IProfileSchema, profileActions.setReadOnly(true))).toEqual({
      readOnly: true,
    });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<IProfileSchema> = { data, form: { username: '' } };

    expect(profileReducer(state as IProfileSchema, profileActions.cancelEdit())).toEqual({
      readOnly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<IProfileSchema> = { form: { username: '123' } };

    expect(
      profileReducer(
        state as IProfileSchema,
        profileActions.updateProfile({
          username: '123456',
        }),
      ),
    ).toEqual({
      form: { username: '123456' },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(state as IProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(state as IProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readOnly: true,
      validateError: undefined,
      form: data,
      data,
    });
  });
});
