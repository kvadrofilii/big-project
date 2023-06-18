import { IComment } from '../../model/types/comment.types';

export interface CommentCardProps {
  className?: string;
  comment?: IComment;
  isLoading?: boolean;
}
