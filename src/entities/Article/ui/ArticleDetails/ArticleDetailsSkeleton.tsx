import { memo } from 'react';
import { Flex, Skeleton } from '~/shared/ui';
import css from './ArticleDetails.m.css';

export const ArticleDetailsSkeleton = memo(function ArticleDetailsLoading() {
  return (
    <Flex
      gap={2}
      direction="column"
      align="start"
    >
      <Skeleton
        width={200}
        height={200}
        borderRadius="50%"
        className={css.avatar}
      />
      <Skeleton
        width={300}
        height={32}
        borderRadius="10px"
      />
      <Skeleton
        width={600}
        height={40}
        borderRadius="10px"
      />
      <Skeleton
        width="100%"
        height={40}
        borderRadius="10px"
      />
      <Skeleton
        width="100%"
        height={40}
        borderRadius="10px"
      />
    </Flex>
  );
});
