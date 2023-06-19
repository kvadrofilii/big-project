import { AppRoutes } from 'shared/config';

export interface INavbarLinks {
  path: string;
  text: AppRoutes;
  authOnly?: boolean;
}
