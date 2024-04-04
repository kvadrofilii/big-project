import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { CommentList } from '@/entities/Comment';
import { CommentForm } from '@/entities/CommentForm';
import { getUserAuthData } from '@/entities/User';
import { DynamicReducerLoader, ReducersList, useAppDispatch, useAppSelector } from '@/shared/lib';
import { Heading } from '@/shared/ui';
import css from './ArticleComments.m.css';
import { useAddCommentForArticleMutation, useGetCommentsByArticleIdQuery } from '../../api/articlesCommentsApi';
import { getAddCommentFormText } from '../../model/selectors/ArticleCommentSelectors';
import { articleCommentsActions, articleCommentsReducer } from '../../model/slices/articleComment.slice';
import type { ArticleCommentsProps } from './ArticleComments.types';

const reducers: ReducersList = {
  articleComments: articleCommentsReducer,
};

const ArticleComments = memo(function ArticleComments(props: ArticleCommentsProps) {
  const { id } = props;
  const { t } = useTranslation('article');
  const { data: comments, isLoading: commentsIsLoading } = useGetCommentsByArticleIdQuery(id);
  const [addCommentForArticle] = useAddCommentForArticleMutation();

  const dispatch = useAppDispatch();
  const text = useAppSelector(getAddCommentFormText);
  const userData = useSelector(getUserAuthData);

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(articleCommentsActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    addCommentForArticle({
      articleId: id,
      userId: userData?.id,
      text,
    });
    onCommentTextChange('');
  }, [addCommentForArticle, id, onCommentTextChange, text, userData]);

  return (
    <DynamicReducerLoader reducers={reducers}>
      <Heading className={css.title}>{t('Comments')}</Heading>
      <CommentForm
        value={text}
        onChange={onCommentTextChange}
        onSend={onSendHandler}
      />
      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </DynamicReducerLoader>
  );
});

export default ArticleComments;
