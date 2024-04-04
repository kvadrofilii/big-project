import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { PortalProps } from './Portal.types';

export const Portal = ({ children }: PortalProps) => {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  });

  return createPortal(children, container);
};
