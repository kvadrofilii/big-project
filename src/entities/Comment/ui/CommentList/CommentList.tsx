import { memo } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui';

import css from './CommentList.m.css';
import { IComment } from '../../model/types/comment.types';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments?: IComment[];
  isLoading?: boolean;
}

export const CommentList = memo(function CommentList(props: CommentListProps) {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  return (
    <div className={clsx(css.root, className)}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} isLoading={isLoading} />
        ))
      ) : (
        <Text>{t('There are no comments')}</Text>
      )}
    </div>
  );
});
