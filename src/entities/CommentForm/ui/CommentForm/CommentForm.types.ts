export interface CommentFormProps {
  className?: string;
  value: string;
  onChange: (text: string) => void;
  onSend: () => void;
}
