import type { ArticleSortField } from '../../model/types/article.types';
import type { SortOrder } from '@/shared/types';

export interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}
