import { memo } from 'react';
import clsx from 'clsx';
import { Code } from '@/shared/ui';
import css from './ArticleCodeBlockComponent.m.css';
import type { ArticleCodeBlockComponentProps } from './ArticleCodeBlockComponent.types';

export const ArticleCodeBlockComponent = memo(function ArticleCodeBlockComponent(
  props: ArticleCodeBlockComponentProps,
) {
  const { className, block } = props;

  return (
    <div className={clsx(css.root, className)}>
      <Code text={block.code} />
    </div>
  );
});
