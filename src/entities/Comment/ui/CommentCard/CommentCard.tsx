import clsx from 'clsx';
import { memo } from 'react';
import { getRouteProfile } from '@/shared/consts/route';
import { AppLink, Avatar, Flex, Skeleton, Text } from '@/shared/ui';
import type { CommentCardProps } from './CommentCard.types';
import css from './CommentCard.m.css';

export const CommentCard = memo(function CommentCard(props: CommentCardProps) {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <Flex
        className={clsx(css.root, className)}
        direction="column"
        gap={2}
      >
        <div className={css.header}>
          <Skeleton
            width={30}
            height={30}
            borderRadius="50%"
          />
          <Skeleton
            width={100}
            height={20}
          />
        </div>
        <Skeleton
          width="100%"
          height={50}
        />
      </Flex>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <Flex
      className={clsx(css.root, className)}
      direction="column"
      gap={2}
    >
      <AppLink
        to={getRouteProfile(comment.user.id)}
        className={css.header}
      >
        {comment.user.avatar ? (
          <Avatar
            size={30}
            src={comment.user.avatar}
          />
        ) : null}
        <Text>{comment.user.username}</Text>
      </AppLink>
      <Text>{comment.text}</Text>
    </Flex>
  );
});
