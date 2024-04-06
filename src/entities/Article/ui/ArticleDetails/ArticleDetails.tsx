import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DynamicReducerLoader,
  type ReducersList,
  useAppDispatch,
  useAppSelector,
  useInitialEffect,
} from '@/shared/lib';
import { Text } from '@/shared/ui';
import {
  getArticleDetailsIsLoading,
  getArticleDetailsError,
} from '../../model/selectors/articleDetails';
import { fetchArticlesById } from '../../model/services/fetchArticlesById/fetchArticlesById';
import { articleDetailsReducer } from '../../model/slices/articleDetails.slice';
import { ArticleDetailsContent } from './ArticleDetailsContent';
import { ArticleDetailsSkeleton } from './ArticleDetailsSkeleton';

type Props = {
  id: string;
};

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(function ArticleDetails(props: Props) {
  const { id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getArticleDetailsIsLoading);
  const error = useAppSelector(getArticleDetailsError);

  useInitialEffect(() => {
    dispatch(fetchArticlesById(id));
  });

  return (
    <DynamicReducerLoader reducers={reducers}>
      {isLoading ? (
        <ArticleDetailsSkeleton />
      ) : error ? (
        <Text>{t('An error occurred while downloading')}</Text>
      ) : (
        <ArticleDetailsContent />
      )}
    </DynamicReducerLoader>
  );
});
