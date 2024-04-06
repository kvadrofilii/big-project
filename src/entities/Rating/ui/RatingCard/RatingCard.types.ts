export type RatingCardProps = {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  onCancel?: (starCount: number) => void;
  onAccept?: (starCount: number, feedback?: string) => void;
  rate?: number;
};
