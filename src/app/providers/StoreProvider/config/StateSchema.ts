import type {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { type AxiosInstance } from 'axios';
import type { ArticleDetailsSchema } from '~/entities/Article';
import type { UserSchema } from '~/entities/User';
import type { ArticleCommentsSchema } from '~/features/ArticleComments';
import type { LoginSchema } from '~/features/AuthByUsername';
import type { ProfileSchema } from '~/features/EditableProfileCard';
import type { ArticlesPageSchema } from '~/pages/ArticlesPage';
import { rtkApi } from '~/shared/api/rtkApi';
import type { ScrollSchema } from '~/widgets/Page';

export type StateSchema = {
  user: UserSchema;
  scroll: ScrollSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Lazy reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articlesPage?: ArticlesPageSchema;
  articleComments?: ArticleCommentsSchema;
};

export type StateSchemaKey = keyof StateSchema;

export type ReducerManager = {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
};

export type ReduxStoreWithManager = EnhancedStore<StateSchema> & {
  reducerManager: ReducerManager;
};

export type ThunkExtraArg = {
  api: AxiosInstance;
};

export type ThunkConfig<T> = {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
};
