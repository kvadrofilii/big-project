export type CommentFormProps = {
  className?: string;
  value: string;
  onChange: (text: string) => void;
  onSend: () => void;
};
