import { memo } from 'react';

import clsx from 'clsx';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector, DynamicModuleLoader, ReducersList } from 'shared/lib';
import { Button, Heading, Input, Text } from 'shared/ui';

import css from './LoginForm.m.css';
import { LoginFormProps, FormInput } from './LoginForm.types';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginReducer } from '../../model/slice/login.slice';

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(function LoginForm({ className }: LoginFormProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  // const store = useStore() as ReduxStoreWithManager;

  // useDynamicModuleLoad(initialReducers);

  // useEffect(() => {
  //  store.reducerManager.add('loginForm', loginReducer);
  //  dispatch({ type: '@INIT loginForm reducer' });

  //  return () => {
  //    store.reducerManager.remove('loginForm');
  //    dispatch({ type: '@DESTROY loginForm reducer' });
  //  };
  //  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const error = useAppSelector(getLoginError);
  const isLoading = useAppSelector(getLoginIsLoading);

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
    <DynamicModuleLoader reducers={initialReducers}>
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
