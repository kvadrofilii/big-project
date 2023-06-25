import { FC, memo } from 'react';

import clsx from 'clsx';
import { ArticleList } from 'entities/Article';

import css from './ArticlesPage.m.css';
import { ArticlesPageProps } from './ArticlesPage.types';
import { article } from '../../../../entities/Article/mocks/data';

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;

  return (
    <div className={clsx(css.root, className)}>
      <ArticleList
        articles={new Array(16).fill(0).map((_, index) => ({
          ...article,
          id: String(index),
        }))}
      />
    </div>
  );
};

export default memo(ArticlesPage);
