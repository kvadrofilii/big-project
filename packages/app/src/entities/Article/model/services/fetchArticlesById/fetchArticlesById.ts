import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '~/app/providers/StoreProvider';
import type { Article } from '../../types/article.types';

export const fetchArticlesById = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
  'articlesDetails/fetchArticlesById',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      if (!articleId) {
        throw new Error('Missing id');
      }

      const response = await extra.api.get<Article>(`/articles/${articleId}`, {
        params: {
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
