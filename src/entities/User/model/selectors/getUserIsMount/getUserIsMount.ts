import { IStateSchema } from 'app/providers/StoreProvider';

export const getUserIsMount = (state: IStateSchema) => state.user?.isMount;
