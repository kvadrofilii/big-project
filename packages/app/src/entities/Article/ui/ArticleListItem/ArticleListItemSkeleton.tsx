import clsx from 'clsx';
import { memo } from 'react';
import { Card, Skeleton } from '~/shared/ui';
import type { ArticleView } from '../../model/types/article.types';
import css from './ArticleListItem.m.css';

type Props = {
  className?: string;
  view: ArticleView;
};

export const ArticleListItemSkeleton = memo(function ArticleListItemSkeleton(props: Props) {
  const { className, view } = props;

  if (view === 'list') {
    return (
      <div className={clsx(className, css[view])}>
        <Card className={css.card}>
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
            height={20}
          />
          <Skeleton
            width="100%"
            height={20}
          />
          <Skeleton className={css.img} />
          <Skeleton className={css.text} />
          <div className={css.footer}>
            <Skeleton
              width={100}
              height={20}
            />
            <Skeleton
              width={100}
              height={20}
            />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={clsx(className, css[view])}>
      <Card>
        <div className={css['img-wrapper']}>
          <Skeleton className={css.img} />
        </div>
        <div className={css['info-wrapper']}>
          <Skeleton
            width={50}
            height={20}
          />
          <Skeleton
            width={50}
            height={20}
          />
        </div>
        <Skeleton
          width={100}
          height={20}
        />
      </Card>
    </div>
  );
});
