import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api';
import { RateArticleArg } from '../model/types/articleRatingApi.types';

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], { userId: string; articleId: string }>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId,
        },
      }),
    }),
    rateArticle: build.mutation<void, RateArticleArg>({
      query: (body) => ({
        url: '/article-ratings',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const useArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
