import clsx from 'clsx';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Flex, Input } from '~/shared/ui';
import type { CommentFormProps } from './CommentForm.types';
import css from './CommentForm.m.css';

export const CommentForm = memo(function CommentForm(props: CommentFormProps) {
  const { className, value, onChange, onSend } = props;
  const { t } = useTranslation();

  return (
    <Flex
      className={clsx(css.root, className)}
      gap={2}
      justify="between"
    >
      <Input
        placeholder={t('Enter the comment text')}
        value={value}
        onChange={onChange}
        className={css.input}
      />
      <Button
        variant="outlined"
        onClick={onSend}
      >
        {t('Send')}
      </Button>
    </Flex>
  );
});
