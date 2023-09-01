import { FC, lazy } from 'react';

import type { LoginFormProps } from './LoginForm.types';

export const LoginFormLazy = lazy<FC<LoginFormProps>>(() => import('./LoginForm'));
