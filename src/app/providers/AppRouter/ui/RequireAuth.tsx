import { getUserAuthData } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/route/routeConfig';
import { useAppSelector } from 'shared/lib';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const isAuth = useAppSelector(getUserAuthData);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
}
