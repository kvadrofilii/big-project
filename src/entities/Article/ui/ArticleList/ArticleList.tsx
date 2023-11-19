import { memo } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { Flex, Text } from '@/shared/ui';

import css from './ArticleList.m.css';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import type { ArticleListProps } from './ArticleList.types';
import type { Article, ArticleView } from '../../model/types/article.types';

const getSkeletons = (view: ArticleView) =>
  new Array(view === 'grid' ? 9 : 3).fill(0).map((_, index) => (
    <ArticleListItemSkeleton
      key={index}
      view={view}
    />
  ));

export const ArticleList = memo(function ArticleList(props: ArticleListProps) {
  const { className, articles, isLoading, view = 'grid', target } = props;
  const { t } = useTranslation('article');

  const renderArticle = (article: Article) => (
    <ArticleListItem
      key={article.id}
      view={view}
      article={article}
      target={target}
    />
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
