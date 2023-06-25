import { ReactElement } from 'react';

import { ArticleView } from '../../model/types/article.types';

export interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

export interface ViewTypes {
  view: ArticleView;
  icon: ReactElement;
}
