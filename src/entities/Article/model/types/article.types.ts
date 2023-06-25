import { User } from 'entities/User';

type ArticleBlockType = 'code' | 'image' | 'text';

type ArticleType = 'IT' | 'SCIENCE' | 'ECONOMICS';

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: 'code';
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: 'image';
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: 'text';
  title?: string;
  paragraphs: string[];
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  user: User;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

export interface ArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: Article;
}

export type ArticleView = 'list' | 'grid';
