import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { ArticleCommentsSchema } from '../types/articleComments.types';

const initialState: ArticleCommentsSchema = {
  text: undefined,
};

export const articleCommentsSlice = createSlice({
  name: 'articleComments',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { actions: articleCommentsActions } = articleCommentsSlice;
export const { reducer: articleCommentsReducer } = articleCommentsSlice;
