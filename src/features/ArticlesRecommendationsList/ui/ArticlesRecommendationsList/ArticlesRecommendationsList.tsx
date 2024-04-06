import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '~/entities/Article';
import { Flex, Heading } from '~/shared/ui';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import type { ArticlesRecommendationsListProps } from './ArticlesRecommendationsList.types';
import css from './ArticlesRecommendationsList.m.css';

export const ArticlesRecommendationsList = memo(function ArticlesRecommendationsList(
  props: ArticlesRecommendationsListProps,
) {
  const { className } = props;
  const { t } = useTranslation();
  const { data: articles, isLoading, error } = useArticleRecommendationsList(4);

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <Flex
      className={className}
      direction="column"
      gap={1}
    >
      <Heading className={css.title}>{t('Recommendations')}</Heading>
      <ArticleList
        className={css.recommendations}
        articles={articles}
        isLoading={isLoading}
        target="_blank"
      />
    </Flex>
  );
});
