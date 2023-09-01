import { Comment } from 'entities/Comment';
import { rtkApi } from 'shared/api';

interface AddComment {
  text: string;
  articleId: string;
  userId?: string;
}

const articlesCommentsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getCommentsByArticleId: build.query<Comment[], string | undefined>({
      query: (articleId) => ({
        url: '/comments',
        params: {
          articleId,
          _expand: 'user',
        },
      }),
      providesTags: () => ['Comments'],
    }),
    addCommentForArticle: build.mutation<Comment[], AddComment>({
      query: (data) => ({
        url: '/comments',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Comments'],
    }),
  }),
});

export const { useAddCommentForArticleMutation, useGetCommentsByArticleIdQuery } = articlesCommentsApi;
