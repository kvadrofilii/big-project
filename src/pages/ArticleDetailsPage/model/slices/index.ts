import { combineReducers } from '@reduxjs/toolkit';

import { articleDetailsCommentsReducer } from './articleDetailsComments.slice';
import { articleDetailsRecommendationsReducer } from './articleDetailsRecommendation.slice';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsRecommendationsReducer,
  comments: articleDetailsCommentsReducer,
});
