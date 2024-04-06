import clsx from 'clsx';
import { memo } from 'react';
import { Heading } from '@/shared/ui';
import type { ArticleImageBlock } from '../../model/types/article.types';
import css from './ArticleImageBlockComponent.m.css';

type Props = {
  className?: string;
  block: ArticleImageBlock;
};

export const ArticleImageBlockComponent = memo(function ArticleImageBlockComponent(props: Props) {
  const { className, block } = props;

  return (
    <div className={clsx(className)}>
      <img
        src={block.src}
        alt={block.title}
        className={css.img}
      />
      {block.title && (
        <Heading
          variant="h4"
          align="center"
        >
          {block.title}
        </Heading>
      )}
    </div>
  );
});
