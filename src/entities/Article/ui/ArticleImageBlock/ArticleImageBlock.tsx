import { memo } from 'react';

import clsx from 'clsx';
import { Heading } from 'shared/ui';

import css from './ArticleImageBlock.m.css';
import { ArticleImageBlockProps } from './ArticleImageBlock.types';

export const ArticleImageBlock = memo(function ArticleImageBlock(props: ArticleImageBlockProps) {
  const { className, block } = props;

  return (
    <div className={clsx(className)}>
      <img src={block.src} alt={block.title} className={css.img} />
      {block.title && (
        <Heading variant="h4" align="center">
          {block.title}
        </Heading>
      )}
    </div>
  );
});
