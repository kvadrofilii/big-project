import type { Comment } from '../../model/types/comment.types';

export interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}
