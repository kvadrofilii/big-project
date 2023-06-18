import { IComment } from '../../model/types/comment.types';

export interface CommentListProps {
  className?: string;
  comments?: IComment[];
  isLoading?: boolean;
}
