import { FC, memo } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { ArticleComments } from '@/features/ArticleComments';
import { ArticlesRecommendationsList } from '@/features/ArticlesRecommendationsList';
import { Page } from '@/widgets/Page';

import css from './ArticleDetailsPage.m.css';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

import type { ArticleDetailsPageProps } from './ArticleDetailsPage.types';

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div className={clsx(css.root, className)}>{t('Article not found')}</div>;
  }

  return (
    <Page className={clsx(css.root, className)}>
      <ArticleDetailsPageHeader />
      <ArticleDetails id={id} />
      <ArticlesRecommendationsList />
      <ArticleComments id={id} />
    </Page>
  );
};

export default memo(ArticleDetailsPage);
