import { memo } from 'react';

import clsx from 'clsx';
import { RoutePath } from 'shared/config';
import { AppLink, Avatar, Skeleton, Text } from 'shared/ui';

import css from './CommentCard.m.css';
import { IComment } from '../../model/types/comment.types';

interface CommentCardProps {
  className?: string;
  comment?: IComment;
  isLoading?: boolean;
}

export const CommentCard = memo(function CommentCard(props: CommentCardProps) {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={clsx(css.root, className)}>
        <div className={css.header}>
          <Skeleton width={30} height={30} borderRadius="50%" />
          <Skeleton width={100} height={20} />
        </div>
        <Skeleton width="100%" height={50} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={clsx(css.root, className)}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={css.header}>
        {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
        <Text>{comment.user.username}</Text>
      </AppLink>
      <Text>{comment.text}</Text>
    </div>
  );
});
