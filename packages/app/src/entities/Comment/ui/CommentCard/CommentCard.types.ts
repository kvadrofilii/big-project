import type { Comment } from '../../model/types/comment.types';

export type CommentCardProps = {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
};
