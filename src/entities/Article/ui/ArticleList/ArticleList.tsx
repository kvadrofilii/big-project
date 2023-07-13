import { memo } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui';

import css from './ArticleList.m.css';
import { ArticleListProps } from './ArticleList.types';
import { Article, ArticleView } from '../../model/types/article.types';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

const getSkeletons = (view: ArticleView) =>
  new Array(view === 'grid' ? 9 : 3)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList = memo(function ArticleList(props: ArticleListProps) {
  const { className, articles, isLoading, view = 'list' } = props;
  const { t } = useTranslation('article');

  const renderArticle = (article: Article) => (
    <ArticleListItem key={article.id} view={view} article={article} />
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={clsx(css.root, css[view], className)}>
        <Text fontSize="2xl">{t('Articles not found')}</Text>
      </div>
    );
  }

  return (
    <div className={clsx(css.root, css[view], className)}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
