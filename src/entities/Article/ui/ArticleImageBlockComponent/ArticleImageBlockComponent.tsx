import { memo } from 'react';

import clsx from 'clsx';

import { Heading } from '@/shared/ui';

import css from './ArticleImageBlockComponent.m.css';

import type { ArticleImageBlockComponentProps } from './ArticleImageBlockComponent.types';

export const ArticleImageBlockComponent = memo(function ArticleImageBlockComponent(
  props: ArticleImageBlockComponentProps,
) {
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
