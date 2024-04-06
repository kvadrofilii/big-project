import clsx from 'clsx';
import { memo } from 'react';
import { Code } from '~/shared/ui';
import type { ArticleCodeBlock } from '../../model/types/article.types';
import css from './ArticleCodeBlockComponent.m.css';

type Props = {
  className?: string;
  block: ArticleCodeBlock;
};

export const ArticleCodeBlockComponent = memo(function ArticleCodeBlockComponent(props: Props) {
  const { className, block } = props;

  return (
    <div className={clsx(css.root, className)}>
      <Code text={block.code} />
    </div>
  );
});
