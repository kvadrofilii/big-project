import type { ReactElement } from 'react';
import type { ArticleView } from '../../../../entities/Article/model/types/article.types';

export type ArticleViewSelectorProps = {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
};

export type ViewTypes = {
  view: ArticleView;
  icon: ReactElement;
};
