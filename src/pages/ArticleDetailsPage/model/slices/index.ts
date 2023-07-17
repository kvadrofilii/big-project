import { combineReducers } from '@reduxjs/toolkit';

import { articleDetailsRecommendationsReducer } from './ArticleDetailsRecommendations.slice';
import { articleDetailsCommentsReducer } from './articleDetailsComments.slice';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsRecommendationsReducer,
  comments: articleDetailsCommentsReducer,
});
