import { User } from '~/entities/User';

export type ArticleSortField = 'views' | 'title' | 'createdAt';

export type ArticleBlockType = 'code' | 'image' | 'text';

export type ArticleType = 'all' | 'it' | 'science' | 'economics';

export type ArticleBlockBase = {
  id: string;
  type: ArticleBlockType;
};

export type ArticleCodeBlock = ArticleBlockBase & {
  type: 'code';
  code: string;
};

export type ArticleImageBlock = ArticleBlockBase & {
  type: 'image';
  src: string;
  title: string;
};

export type ArticleTextBlock = ArticleBlockBase & {
  type: 'text';
  title?: string;
  paragraphs: string[];
};

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export type Article = {
  id: string;
  title: string;
  subtitle: string;
  user: User;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
};

export type ArticleDetailsSchema = {
  isLoading: boolean;
  error?: string;
  data?: Article;
};

export type ArticleView = 'list' | 'grid';
