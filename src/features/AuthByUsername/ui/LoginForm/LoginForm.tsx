import { FC } from 'react';

import cn from 'classnames';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button, Input } from 'shared/ui';

import css from './LoginForm.m.css';
import { LoginFormProps, FormInput } from './LoginForm.types';

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <form className={cn(css.root, className)} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="username"
        control={control}
        rules={{ required: true, minLength: 6, maxLength: 20 }}
        defaultValue={''}
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
        rules={{ required: true, minLength: 6, maxLength: 20, pattern: /^[A-Za-z]+$/i }}
        defaultValue={''}
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
      <Button variant="contained" type="submit">
        {t('Enter')}
      </Button>
    </form>
  );
};
