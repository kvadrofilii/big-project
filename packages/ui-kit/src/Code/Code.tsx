import clsx from 'clsx';
import { type HTMLAttributes, memo, useCallback } from 'react';
import CopyIcon from '~/shared/assets/icons/copy.svg';
import { IconButton } from '../IconButton/IconButton';
import css from './Code.m.css';

export type Props = HTMLAttributes<HTMLPreElement> & {
  text: string;
};

export const Code = memo(function Code(props: Props) {
  const { className, text, ...rest } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre
      className={clsx(css.root, className)}
      {...rest}
    >
      <IconButton
        type="button"
        className={css.button}
        variant="outlined"
        onClick={onCopy}
      >
        <CopyIcon />
      </IconButton>
      <code>{text}</code>
    </pre>
  );
});
