export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

export interface FormInput {
  username: string;
  password: string;
}
