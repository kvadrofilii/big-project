import { memo, useCallback } from 'react';
import clsx from 'clsx';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import css from './Code.m.css';
import { IconButton } from '../IconButton/IconButton';
import type { CodeProps } from './Code.types';

export const Code = memo(function Code(props: CodeProps) {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={clsx(css.root, className)}>
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
