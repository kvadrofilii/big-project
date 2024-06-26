import clsx from 'clsx';
import { memo } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector, DynamicReducerLoader, ReducersList } from '~/shared/lib';
import { Button, Heading, Input, Text } from '~/shared/ui';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginReducer } from '../../model/slices/login.slice';
import type { LoginFormProps, FormInput } from './LoginForm.types';
import css from './LoginForm.m.css';

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(function LoginForm({ className, onSuccess }: LoginFormProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const error = useAppSelector(getLoginError);
  const isLoading = useAppSelector(getLoginIsLoading);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const result = await dispatch(loginByUsername(data));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  };

  return (
    <DynamicReducerLoader reducers={initialReducers}>
      <form
        className={clsx(css.root, className)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading>{t('Form authorizations')}</Heading>
        {error && <Text color="error">{t('You entered')}</Text>}
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
        <Button
          variant="contained"
          type="submit"
          disabled={isLoading}
        >
          {t('Enter')}
        </Button>
      </form>
    </DynamicReducerLoader>
  );
});

export default LoginForm;
