import type { ReactElement } from 'react';
import type { ArticleView } from '../../../../entities/Article/model/types/article.types';

export interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

export interface ViewTypes {
  view: ArticleView;
  icon: ReactElement;
}
