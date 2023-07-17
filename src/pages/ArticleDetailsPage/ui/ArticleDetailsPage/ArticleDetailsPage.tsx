import { FC, memo, useCallback } from 'react';

import clsx from 'clsx';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'shared/config';
import {
  DynamicReducerLoader,
  ReducersList,
  useAppDispatch,
  useAppSelector,
  useInitialEffect,
} from 'shared/lib';
import { Button, Heading } from 'shared/ui';
import { Page } from 'widgets/Page';

import css from './ArticleDetailsPage.m.css';
import { ArticleDetailsPageProps } from './ArticleDetailsPage.types';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
// eslint-disable-next-line max-len
import { fetchArticlesRecommendations } from '../../model/services/fetchArticlesRecommendations/fetchArticlesRecommendations';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsPageReducer } from '../../model/slices';
import { getArticleRecommendations } from '../../model/slices/ArticleDetailsRecommendations.slice';
import { getArticleComments } from '../../model/slices/articleDetailsComments.slice';

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const comments = useAppSelector(getArticleComments.selectAll);
  const recommendations = useAppSelector(getArticleRecommendations.selectAll);
  const commentsIsLoading = useAppSelector(getArticleCommentsIsLoading);
  const recommendationsIsLoading = useAppSelector(getArticleRecommendationsIsLoading);
  const navigate = useNavigate();

  const onBack = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticlesRecommendations());
  });

  if (!id) {
    return <div className={clsx(css.root, className)}>{t('Article not found')}</div>;
  }

  return (
    <DynamicReducerLoader reducers={reducers}>
      <Page className={clsx(css.root, className)}>
        <Button variant="outlined" onClick={onBack}>
          {t('Return')}
        </Button>
        <ArticleDetails id={id} />
        <Heading className={css['comment-title']}>{t('Recommendations')}</Heading>
        <ArticleList
          className={css.recommendations}
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          target="_blank"
        />

        <Heading className={css['comment-title']}>{t('Comments')}</Heading>
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicReducerLoader>
  );
};

export default memo(ArticleDetailsPage);
