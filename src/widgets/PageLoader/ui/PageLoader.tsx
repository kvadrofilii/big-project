import { FC } from 'react';

import { cn } from 'shared/lib';
import { Loader } from 'shared/ui';

import css from './PageLoader.m.css';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={cn([css.root, className])}>
      <Loader />
    </div>
  );
};
