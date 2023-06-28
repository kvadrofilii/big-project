import { AppRoutes } from 'shared/config';

export interface NavbarLinks {
  path: string;
  text: AppRoutes;
  authOnly?: boolean;
}
