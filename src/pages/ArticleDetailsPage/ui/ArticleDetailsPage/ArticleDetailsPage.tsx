import { FC, memo } from 'react';

import clsx from 'clsx';
import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import {
  DynamicReducerLoader,
  ReducersList,
  useAppDispatch,
  useAppSelector,
  useInitialEffect,
} from 'shared/lib';
import { Heading } from 'shared/ui';

import css from './ArticleDetailsPage.m.css';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slices/articleDetailsComments.slice';

interface ArticleDetailsPageProps {
  className?: string;
}

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

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return <div className={clsx(css.root, className)}>{t('Article not found')}</div>;
  }

  return (
    <DynamicReducerLoader reducers={reducers}>
      <div className={clsx(css.root, className)}>
        <ArticleDetails id={id} />
        <Heading className={css['comment-title']}>{t('Comments')}</Heading>
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </div>
    </DynamicReducerLoader>
  );
};

export default memo(ArticleDetailsPage);
