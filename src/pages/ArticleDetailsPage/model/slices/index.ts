import { combineReducers } from '@reduxjs/toolkit';

import { articleDetailsRecommendationsReducer } from './articleDetailsRecommendation.slice';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsRecommendationsReducer,
});
