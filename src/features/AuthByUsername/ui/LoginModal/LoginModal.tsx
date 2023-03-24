import { FC } from 'react';

import { Modal } from 'shared/ui';

import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  isOpened: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ isOpened, onClose }) => {
  return (
    <Modal isOpened={isOpened} onClose={onClose} lazy>
      <LoginForm />
    </Modal>
  );
};
