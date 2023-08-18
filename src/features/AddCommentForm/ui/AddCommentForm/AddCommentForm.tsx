import { memo, useCallback } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { DynamicReducerLoader, ReducersList, useAppDispatch, useAppSelector } from 'shared/lib';
import { Button, Flex, Input } from 'shared/ui';

import css from './AddCommentForm.m.css';
import { AddCommentFormProps } from './AddCommentForm.types';
import { getAddCommentFormText } from '../../model/selectors/AddCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentForm.slice';

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(function AddCommentForm(props: AddCommentFormProps) {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useAppSelector(getAddCommentFormText);

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text);
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicReducerLoader reducers={reducers}>
      <Flex className={clsx(css.root, className)} gap={2} justify="between">
        <Input
          placeholder={t('Enter the comment text')}
          value={text}
          onChange={onCommentTextChange}
          className={css.input}
        />
        <Button variant="outlined" onClick={onSendHandler}>
          {t('Send')}
        </Button>
      </Flex>
    </DynamicReducerLoader>
  );
});

export default AddCommentForm;
