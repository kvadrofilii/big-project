import { memo } from 'react';

import clsx from 'clsx';
import { ArticleList } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { Flex, Heading } from 'shared/ui';

import css from './ArticlesRecommendationsList.m.css';
import { ArticlesRecommendationsListProps } from './ArticlesRecommendationsList.types';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

export const ArticlesRecommendationsList = memo(function ArticlesRecommendationsList(
  props: ArticlesRecommendationsListProps,
) {
  const { className } = props;
  const { t } = useTranslation();
  const { data: articles, isLoading, error } = useArticleRecommendationsList(3);

  if (isLoading || error) {
    return null;
  }

  return (
    <Flex className={clsx(css.root, className)} direction="column" gap={1}>
      <Heading>{t('Recommendations')}</Heading>
      <ArticleList className={css.recommendations} articles={articles} isLoading={isLoading} target="_blank" />
    </Flex>
  );
});
