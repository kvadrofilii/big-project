import { HTMLAttributeAnchorTarget } from 'react';
import type { Article, ArticleView } from '../../model/types/article.types';

export interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}
