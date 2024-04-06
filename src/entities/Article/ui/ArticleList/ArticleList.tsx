import clsx from 'clsx';
import { memo, useCallback, type HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, Text } from '@/shared/ui';
import type { Article, ArticleView } from '../../model/types/article.types';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import css from './ArticleList.m.css';

type Props = {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
};

const getSkeletons = (view: ArticleView) =>
  new Array(view === 'grid' ? 9 : 3).fill(0).map((_, index) => (
    <ArticleListItemSkeleton
      key={index}
      view={view}
    />
  ));

export const ArticleList = memo(function ArticleList(props: Props) {
  const { className, articles, isLoading, view = 'grid', target } = props;
  const { t } = useTranslation('article');

  const renderArticle = useCallback(
    (article: Article) => (
      <ArticleListItem
        key={article.id}
        view={view}
        article={article}
        target={target}
      />
    ),
    [target, view],
  );

  if (!isLoading && !articles.length) {
    return (
      <Flex
        className={clsx(css[view], className)}
        gap={2}
      >
        <Text fontSize="2xl">{t('Articles not found')}</Text>
      </Flex>
    );
  }

  return (
    <Flex
      className={clsx(css[view], className)}
      gap={2}
    >
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </Flex>
  );
});
