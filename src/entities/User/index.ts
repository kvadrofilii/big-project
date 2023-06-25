export type { UserSchema, User } from './model/types/user.types';

export { userReducer, userActions } from './model/slices/user.slice';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserIsMount } from './model/selectors/getUserIsMount/getUserIsMount';
