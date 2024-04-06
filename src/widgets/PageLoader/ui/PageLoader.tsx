import clsx from 'clsx';
import { FC } from 'react';
import { Flex, Loader } from '~/shared/ui';
import type { PageLoaderProps } from './PageLoader.types';
import css from './PageLoader.m.css';

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
  <Flex
    className={clsx(css.root, className)}
    justify="center"
    grow={1}
  >
    <Loader />
  </Flex>
);
