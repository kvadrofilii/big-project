import type { ArticleType } from '../../model/types/article.types';

export interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}
