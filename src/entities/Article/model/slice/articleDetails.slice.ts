import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchArticlesById } from '../services/fetchArticlesById/fetchArticlesById';
import { IArticle } from '../types/article.types';
import { IArticleDetailsSchema } from '../types/articleDetailsSchema.types';

const initialState: IArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesById.fulfilled, (state, action: PayloadAction<IArticle>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticlesById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
