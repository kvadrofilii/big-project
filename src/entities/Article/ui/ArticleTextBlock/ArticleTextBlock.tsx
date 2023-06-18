import { memo } from 'react';

import clsx from 'clsx';
import { Heading, Text } from 'shared/ui';

import css from './ArticleTextBlock.m.css';
import { ArticleTextBlockProps } from './ArticleTextBlock.types';

export const ArticleTextBlock = memo(function ArticleTextBlock(props: ArticleTextBlockProps) {
  const { className, block } = props;

  return (
    <div className={clsx(className)}>
      {block.title && (
        <Heading className={css.title} variant="h4">
          {block.title}
        </Heading>
      )}
      {block.paragraphs.map((paragraph) => (
        <Text className={css.paragraph} key={paragraph}>
          {paragraph}
        </Text>
      ))}
      <div />
    </div>
  );
});
