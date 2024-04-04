import { Country } from '@/entities/Country/testing';
import { Currency } from '@/entities/Currency/testing';
import { profileActions, profileReducer } from './profile.slice';
import { ValidateProfileError } from '../consts/validateProfileError';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import type { ProfileSchema } from '../types/editableProfileCard.types';

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
    const state: DeepPartial<ProfileSchema> = { readOnly: false };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadOnly(true))).toEqual({
      readOnly: true,
    });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      readOnly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({
          username: '123456',
        }),
      ),
    ).toEqual({
      form: { username: '123456' },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readOnly: true,
      validateError: undefined,
      form: data,
      data,
    });
  });
});
