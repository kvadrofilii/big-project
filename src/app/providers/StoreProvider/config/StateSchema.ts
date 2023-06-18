import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { IArticleDetailsSchema } from 'entities/Article';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { IAddCommentFormSchema } from 'features/AddCommentForm';
import { LoginSchema } from 'features/AuthByUsername';
import { IArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { NavigateOptions, To } from 'react-router';

export interface StateSchema {
  user: UserSchema;

  // Lazy reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: IArticleDetailsSchema;
  articleDetailsComments?: IArticleDetailsCommentsSchema;
  addCommentForm?: IAddCommentFormSchema;
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
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
