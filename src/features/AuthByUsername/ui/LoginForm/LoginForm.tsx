import { memo } from 'react';

import clsx from 'clsx';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { Button, Heading, Input, Text } from 'shared/ui';

import css from './LoginForm.m.css';
import { LoginFormProps, FormInput } from './LoginForm.types';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

export const LoginForm = memo(function LoginForm({ className }: LoginFormProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { error, isLoading } = useAppSelector(getLoginState);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    dispatch(loginByUsername(data));
    console.log('form data:', data);
  };

  return (
    <form className={clsx(css.root, className)} onSubmit={handleSubmit(onSubmit)}>
      <Heading>{t('Form authorizations')}</Heading>
      {error && <Text color="error">{error}</Text>}
      <Controller
        name="username"
        control={control}
        // rules={{ required: true, minLength: 2, maxLength: 20 }}
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            type="text"
            onChange={onChange}
            value={value}
            placeholder={t('username')}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        // rules={{ required: true, minLength: 3, maxLength: 20, pattern: /^[A-Za-z]+$/i }}
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            type="text"
            placeholder={t('password')}
          />
        )}
      />
      <Button variant="contained" type="submit" disabled={isLoading}>
        {t('Enter')}
      </Button>
    </form>
  );
});
