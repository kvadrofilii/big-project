import { Comment } from '../../model/types/comment.types';

export interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}
