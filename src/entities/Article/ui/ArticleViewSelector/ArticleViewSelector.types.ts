import type { ArticleView } from '../../model/types/article.types';
import type { ReactElement } from 'react';

export interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

export interface ViewTypes {
  view: ArticleView;
  icon: ReactElement;
}
