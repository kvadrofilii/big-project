import type { ArticleType } from '../../../../entities/Article/model/types/article.types';

export type ArticleTypeTabsProps = {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
};
