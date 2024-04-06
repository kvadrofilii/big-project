import clsx from 'clsx';
import { memo } from 'react';
import { Code } from '@/shared/ui';
import type { ArticleCodeBlockComponentProps } from './ArticleCodeBlockComponent.types';
import css from './ArticleCodeBlockComponent.m.css';

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
