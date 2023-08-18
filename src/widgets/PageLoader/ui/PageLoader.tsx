import { FC } from 'react';

import clsx from 'clsx';
import { Flex, Loader } from 'shared/ui';

import css from './PageLoader.m.css';
import { PageLoaderProps } from './PageLoader.types';

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
  <Flex className={clsx(css.root, className)} justify="center" grow={1}>
    <Loader />
  </Flex>
);
