import { StateSchema } from 'app/providers/StoreProvider';

export const getUserIsMount = (state: StateSchema) => state.user.isMount;
