import { type EntityState } from '@reduxjs/toolkit';
import { Comment } from '~/entities/Comment';

export type ArticleDetailsCommentsSchema = EntityState<Comment> & {
  isLoading?: boolean;
  error?: string;
};
