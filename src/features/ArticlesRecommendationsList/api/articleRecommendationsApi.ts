import { rtkApi } from 'shared/api';

import type { Article } from 'entities/Article';

const articleRecommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
          _expand: 'user',
        },
      }),
    }),
  }),
});

export const useArticleRecommendationsList = articleRecommendationsApi.useGetArticleRecommendationsListQuery;
