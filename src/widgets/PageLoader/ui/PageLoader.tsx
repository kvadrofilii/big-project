import { FC } from 'react';

import clsx from 'clsx';
import { Loader } from 'shared/ui';

import css from './PageLoader.m.css';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div className={clsx(css.root, className)}>
      <Loader />
    </div>
  );
