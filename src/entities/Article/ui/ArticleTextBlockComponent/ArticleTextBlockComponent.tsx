import { memo } from 'react';

import clsx from 'clsx';

import { Heading, Text } from '@/shared/ui';

import css from './ArticleTextBlockComponent.m.css';

import type { ArticleTextBlockComponentProps } from './ArticleTextBlockComponent.types';

export const ArticleTextBlockComponent = memo(function ArticleTextBlockComponent(
  props: ArticleTextBlockComponentProps,
) {
  const { className, block } = props;

  return (
    <div className={clsx(className)}>
      {block.title && (
        <Heading
          className={css.title}
          variant="h4"
        >
          {block.title}
        </Heading>
      )}
      {block.paragraphs.map((paragraph) => (
        <Text
          className={css.paragraph}
          key={paragraph}
        >
          {paragraph}
        </Text>
      ))}
      <div />
    </div>
  );
});
