import { ArticleDetailsCommentsSchema } from './articleDetailsComments.types';
import { ArticleDetailsRecommendationsSchema } from './articleDetailsRecommendations.types';

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema;
  recommendations: ArticleDetailsRecommendationsSchema;
}
