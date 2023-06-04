import { memo } from 'react';

import clsx from 'clsx';
import { Code } from 'shared/ui';

import css from './ArticleCodeBlock.m.css';
import { IArticleCodeBlock } from '../../model/types/article.types';

interface ArticleCodeBlockProps {
  className?: string;
  block: IArticleCodeBlock;
}

export const ArticleCodeBlock = memo(function ArticleCodeBlock(props: ArticleCodeBlockProps) {
  const { className, block } = props;

  return (
    <div className={clsx(css.root, className)}>
      <Code text={block.code} />
    </div>
  );
});
