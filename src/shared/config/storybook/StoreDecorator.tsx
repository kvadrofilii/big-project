/* eslint-disable react/display-name */
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slices/articleDetails.slice';
import { profileReducer } from 'entities/Profile';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slices/addCommentForm.slice';
import { loginReducer } from 'features/AuthByUsername/model/slices/login.slice';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slices/articlesPage.slice';
import { ReducersList } from 'shared/lib';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articlesPage: articlesPageReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <StoryComponent />
    </StoreProvider>
  );
