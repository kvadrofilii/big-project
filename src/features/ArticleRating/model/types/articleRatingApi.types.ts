export interface GetArticleRatingArg {
  userId: string;
  articleId: string;
}

export interface RateArticleArg {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
}
