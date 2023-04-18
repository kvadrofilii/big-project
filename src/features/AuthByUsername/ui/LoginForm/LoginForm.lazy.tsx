import { FC, lazy } from 'react';

import { LoginFormProps } from './LoginForm.types';

export const LoginFormLazy = lazy<FC<LoginFormProps>>(() => import('./LoginForm'));
