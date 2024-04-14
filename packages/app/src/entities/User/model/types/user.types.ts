import { UserRole } from '../consts/userRole';

export type User = {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
};

export type UserSchema = {
  authData?: User;
  isMount: boolean;
};
