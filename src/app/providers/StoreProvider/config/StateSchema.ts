import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { ArticleCommentsSchema } from 'features/ArticleComments';
import { LoginSchema } from 'features/AuthByUsername';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { rtkApi } from 'shared/api/rtkApi';
import { ScrollSchema } from 'widgets/Page';

export interface StateSchema {
  user: UserSchema;
  scroll: ScrollSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Lazy reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articlesPage?: ArticlesPageSchema;
  articleComments?: ArticleCommentsSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
