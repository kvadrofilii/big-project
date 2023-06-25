import { FC, memo, useCallback } from 'react';

import clsx from 'clsx';
import { ArticleDetails } from 'entities/Article';
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

import css from './ArticleDetailsPage.m.css';
import { ArticleDetailsPageProps } from './ArticleDetailsPage.types';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slices/articleDetailsComments.slice';

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const comments = useAppSelector(getArticleComments.selectAll);
  const commentsIsLoading = useAppSelector(getArticleCommentsIsLoading);
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
  });

  if (!id) {
    return <div className={clsx(css.root, className)}>{t('Article not found')}</div>;
  }

  return (
    <DynamicReducerLoader reducers={reducers}>
      <div className={clsx(css.root, className)}>
        <Button variant="outlined" onClick={onBack}>
          {t('Return')}
        </Button>
        <ArticleDetails id={id} />
        <Heading className={css['comment-title']}>{t('Comments')}</Heading>
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </div>
    </DynamicReducerLoader>
  );
};

export default memo(ArticleDetailsPage);
