/* eslint-disable i18next/no-literal-string */
import { memo, useEffect } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { DynamicReducerLoader, ReducersList, useAppDispatch, useAppSelector } from 'shared/lib';
import { Skeleton, Text } from 'shared/ui';

import css from './ArticleDetails.m.css';
import {
  getArticleDetailsIsLoading,
  getArticleDetailsError,
  getArticleDetailsData,
} from '../../model/selectors/articleDetails';
import { fetchArticlesById } from '../../model/services/fetchArticlesById/fetchArticlesById';
import { articleDetailsReducer } from '../../model/slice/articleDetails.slice';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(function ArticleDetails(props: ArticleDetailsProps) {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getArticleDetailsIsLoading);
  const article = useAppSelector(getArticleDetailsData);
  const error = useAppSelector(getArticleDetailsError);

  useEffect(() => {
    dispatch(fetchArticlesById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <div>
        <Skeleton width={200} height={200} borderRadius="50%" className={css.avatar} />
        <Skeleton width={300} height={32} borderRadius="10px" className={css.title} />
        <Skeleton width={600} height={40} borderRadius="10px" className={css.skeleton} />
        <Skeleton width="100%" height={40} borderRadius="10px" className={css.skeleton} />
        <Skeleton width="100%" height={40} borderRadius="10px" className={css.skeleton} />
      </div>
    );
  } else if (error) {
    content = <Text>{t('An error occurred while downloading')}</Text>;
  } else {
    content = <div className={clsx(css.root, className)}>Article Details</div>;
  }

  return <DynamicReducerLoader reducers={reducers}>{content}</DynamicReducerLoader>;
});
