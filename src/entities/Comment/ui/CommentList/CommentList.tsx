import { memo } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui';

import css from './CommentList.m.css';
import { CommentCard } from '../CommentCard/CommentCard';

import type { CommentListProps } from './CommentList.types';

export const CommentList = memo(function CommentList(props: CommentListProps) {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={clsx(css.root, className)}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (
    <div className={clsx(css.root, className)}>
      {comments?.length ? (
        comments.map((comment) => <CommentCard key={comment.id} comment={comment} isLoading={isLoading} />)
      ) : (
        <Text>{t('There are no comments')}</Text>
      )}
    </div>
  );
});
