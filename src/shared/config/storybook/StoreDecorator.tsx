/* eslint-disable react/display-name */
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slices/articleDetails.slice';
import { loginReducer } from 'features/AuthByUsername/model/slices/login.slice';
import { profileReducer } from 'features/EditableProfileCard';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slices/articlesPage.slice';
import { ReducersList } from 'shared/lib';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleComments: articleDetailsReducer,
  articlesPage: articlesPageReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <StoryComponent />
    </StoreProvider>
  );
