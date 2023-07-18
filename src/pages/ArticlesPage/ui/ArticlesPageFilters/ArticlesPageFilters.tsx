import { memo, useCallback } from 'react';

import clsx from 'clsx';
import {
  ArticleSortField,
  ArticleSortSelector,
  ArticleType,
  ArticleTypeTabs,
  ArticleView,
  ArticleViewSelector,
} from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector, useDebounce } from 'shared/lib';
import { SortOrder } from 'shared/types';
import { Input } from 'shared/ui';

import css from './ArticlesPageFilters.m.css';
import { ArticlesPageFiltersProps } from './ArticlesPageFilters.types';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../model/slices/articlesPage.slice';

export const ArticlesPageFilters = memo(function ArticlesPageFilters(
  props: ArticlesPageFiltersProps,
) {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const view = useAppSelector(getArticlesPageView);
  const sort = useAppSelector(getArticlesPageSort);
  const order = useAppSelector(getArticlesPageOrder);
  const search = useAppSelector(getArticlesPageSearch);
  const type = useAppSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback(
    (newView: ArticleView) => {
      dispatch(articlesPageActions.setView(newView));
    },
    [dispatch],
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSearch = useCallback(
    (newSearch: string) => {
      dispatch(articlesPageActions.setSearch(newSearch));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData],
  );

  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlesPageActions.setType(value));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  return (
    <div className={clsx(css.root, className)}>
      <div className={css['sort-wrapper']}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Input placeholder={t('Search')} fullWidth value={search} onChange={onChangeSearch} />
      <ArticleTypeTabs value={type} onChangeType={onChangeType} />
    </div>
  );
});