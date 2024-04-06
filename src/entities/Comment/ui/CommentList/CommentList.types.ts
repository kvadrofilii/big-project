import type { Comment } from '../../model/types/comment.types';

export type CommentListProps = {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
};
