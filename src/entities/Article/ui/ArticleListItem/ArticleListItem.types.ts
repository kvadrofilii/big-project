import { Article, ArticleView } from '../../model/types/article.types';

export interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}
