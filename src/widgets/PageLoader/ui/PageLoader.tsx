import clsx from 'clsx';
import { FC } from 'react';
import { Flex, Loader } from '~/shared/ui';
import css from './PageLoader.m.css';

export interface Props {
  className?: string;
}

export const PageLoader: FC<Props> = ({ className }) => (
  <Flex
    className={clsx(css.root, className)}
    justify="center"
    grow={1}
  >
    <Loader />
  </Flex>
);
