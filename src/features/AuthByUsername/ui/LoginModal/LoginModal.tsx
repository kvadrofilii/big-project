import { FC, Suspense } from 'react';

import { Loader, Modal } from 'shared/ui';

import { LoginModalProps } from './LoginModal.types';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

export const LoginModal: FC<LoginModalProps> = ({ isOpened, onClose }) => (
  <Modal isOpened={isOpened} onClose={onClose}>
    <Suspense fallback={<Loader />}>
      <LoginFormLazy onSuccess={onClose} />
    </Suspense>
  </Modal>
);
