import { useMemo } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { UserRole, getUserAuthData, getUserRole } from '@/entities/User';
import { RoutePath } from '@/shared/config/route/routeConfig';
import { useAppSelector } from '@/shared/lib';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
  const isAuth = useAppSelector(getUserAuthData);
  const location = useLocation();
  const userRoles = useAppSelector(getUserRole);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requireRole) => {
      const hasRole = userRoles?.includes(requireRole);
      return hasRole;
    });
  }, [roles, userRoles]);

  if (!isAuth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
  }

  return children;
}
