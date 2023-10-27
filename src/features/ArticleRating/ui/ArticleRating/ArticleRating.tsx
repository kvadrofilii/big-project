import { memo, useCallback } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { useAppSelector } from '@/shared/lib';
import { Skeleton } from '@/shared/ui';

import css from './ArticleRating.m.css';
import { useArticleRating, useRateArticle } from '../../api/articleRatingApi';

import type { ArticleRatingProps } from './ArticleRating.types';

const ArticleRating = memo(function ArticleRating(props: ArticleRatingProps) {
  const { className, id } = props;
  const { t } = useTranslation('article');
  const userData = useAppSelector(getUserAuthData);

  const { data, isLoading } = useArticleRating({
    articleId: id,
    userId: userData?.id ?? '',
  });

  const [rateArticleMutation] = useRateArticle();

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      rateArticleMutation({
        userId: userData?.id ?? '',
        articleId: id,
        rate: starsCount,
        feedback,
      });
    },
    [id, rateArticleMutation, userData?.id],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle],
  );

  const onCancel = useCallback(
    (starCount: number) => {
      handleRateArticle(starCount);
    },
    [handleRateArticle],
  );

  if (isLoading) {
    return <Skeleton width="100%" height={60} />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      rate={rating?.rate}
      className={clsx(css.root, className)}
      title={t('Rate the article')}
      feedbackTitle={t('Leave your feedback')}
    />
  );
});

export default ArticleRating;
