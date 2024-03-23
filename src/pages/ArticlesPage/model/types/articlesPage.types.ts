import { Article, ArticleView, ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types';

export interface ArticlesPageSchema {
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // filters
  view: ArticleView;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;

  _inited: boolean;

  data: Article[];
}
