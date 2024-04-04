import { FC, lazy } from 'react';
import type { ArticleCommentsProps } from './ArticleComments.types';

export const ArticleCommentsLazy = lazy<FC<ArticleCommentsProps>>(() => import('./ArticleComments'));
