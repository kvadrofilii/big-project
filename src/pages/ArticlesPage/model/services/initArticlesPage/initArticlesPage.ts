import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { SortOrder } from 'shared/types';

import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPage.slice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getArticlesPageInited(getState());

    if (inited) return;

    searchParams.forEach((value, key) => {
      // eslint-disable-next-line default-case
      switch (key) {
        case 'order': {
          dispatch(articlesPageActions.setOrder(value as SortOrder));
          break;
        }
        case 'sort': {
          dispatch(articlesPageActions.setSort(value as ArticleSortField));
          break;
        }
        case 'type': {
          dispatch(articlesPageActions.setType(value as ArticleType));
          break;
        }
        case 'search': {
          dispatch(articlesPageActions.setSearch(value));
          break;
        }
      }
    });

    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({}));
  },
);
