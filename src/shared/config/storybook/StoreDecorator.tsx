/* eslint-disable react/display-name */
import { StoryFn } from '@storybook/react';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { loginReducer } from '@/features/AuthByUsername/testing';
// eslint-disable-next-line @kvadrofilii/fsd/layer-imports
import { profileReducer } from '@/features/EditableProfileCard';
import { articlesPageReducer } from '@/pages/ArticlesPage/testing';

import { ReducersList } from '../../lib';

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
