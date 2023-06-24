import { memo, useCallback } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { DynamicReducerLoader, ReducersList, useAppDispatch, useAppSelector } from 'shared/lib';
import { Button, Input } from 'shared/ui';

import css from './AddCommentForm.m.css';
import { AddCommentFormProps } from './AddCommentForm.types';
import {
  getAddCommentFormText,
  getAddCommentFormError,
} from '../../model/selectors/AddCommentFormSelectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/addCommentForm.slice';

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(function AddCommentForm(props: AddCommentFormProps) {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useAppSelector(getAddCommentFormText);
  const error = useAppSelector(getAddCommentFormError);

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
      <div className={clsx(css.root, className)}>
        <Input
          placeholder={t('Enter the comment text')}
          value={text}
          onChange={onCommentTextChange}
          className={css.input}
        />
        <Button variant="outlined" onClick={onSendHandler}>
          {t('Send')}
        </Button>
      </div>
    </DynamicReducerLoader>
  );
});

export default AddCommentForm;