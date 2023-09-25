import { UserRole } from '../consts/userRole';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
}

export interface UserSchema {
  authData?: User;
  isMount: boolean;
}
