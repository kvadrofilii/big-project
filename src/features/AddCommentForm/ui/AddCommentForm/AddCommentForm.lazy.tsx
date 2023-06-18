import { FC, lazy } from 'react';

import { AddCommentFormProps } from './AddCommentForm.types';

export const AddCommentFormLazy = lazy<FC<AddCommentFormProps>>(() => import('./AddCommentForm'));
