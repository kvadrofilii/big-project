import { ButtonProps } from './Button.type';
import styles from './Button.modules.scss';

export const Button = ({ children }: ButtonProps) => {
  return <button className={styles.btn}>{children}</button>;
};
