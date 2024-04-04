import { HTMLAttributeAnchorTarget } from 'react';
import type { Article, ArticleView } from '../../model/types/article.types';

export interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}
