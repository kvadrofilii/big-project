import { FC, memo } from 'react';

import clsx from 'clsx';
import { ArticleDetails } from 'entities/Article';
import { ArticleComments } from 'features/ArticleComments';
import { ArticlesRecommendationsList } from 'features/ArticlesRecommendationsList';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { DynamicReducerLoader, ReducersList, useAppDispatch, useInitialEffect } from 'shared/lib';
import { Page } from 'widgets/Page';

import css from './ArticleDetailsPage.m.css';
// eslint-disable-next-line max-len
import { fetchArticlesRecommendations } from '../../model/services/fetchArticlesRecommendations/fetchArticlesRecommendations';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

import type { ArticleDetailsPageProps } from './ArticleDetailsPage.types';

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  useInitialEffect(() => {
    dispatch(fetchArticlesRecommendations());
  });

  if (!id) {
    return <div className={clsx(css.root, className)}>{t('Article not found')}</div>;
  }

  return (
    <DynamicReducerLoader reducers={reducers}>
      <Page className={clsx(css.root, className)}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticlesRecommendationsList />
        <ArticleComments id={id} />
      </Page>
    </DynamicReducerLoader>
  );
};

export default memo(ArticleDetailsPage);
