import { Profile } from '~/entities/Profile';
import { ValidateProfileError } from '../consts/validateProfileError';

export type ProfileSchema = {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readOnly: boolean;
  validateErrors?: ValidateProfileError[];
};
