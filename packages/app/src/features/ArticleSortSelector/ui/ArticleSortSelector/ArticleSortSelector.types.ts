import type { SortOrder } from '~/shared/types';
import type { ArticleSortField } from '../../../../entities/Article/model/types/article.types';

export type ArticleSortSelectorProps = {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
};
