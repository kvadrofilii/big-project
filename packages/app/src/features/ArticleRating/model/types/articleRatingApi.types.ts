export type GetArticleRatingArg = {
  userId: string;
  articleId: string;
};

export type RateArticleArg = {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
};
