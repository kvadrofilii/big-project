import { useMemo } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { UserRole, getUserAuthData, getUserRole } from '@/entities/User';
import { getRouteForbidden, getRouteMain } from '@/shared/consts/route';
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
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;
  }

  return children;
}
