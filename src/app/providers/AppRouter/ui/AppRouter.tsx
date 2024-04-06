import { Suspense, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '~/widgets/PageLoader';
import { routeConfig } from '../model/config/routeConfig';
import { AppRoutesProps } from '../model/types/AppRoutesProps.types';
import { RequireAuth } from './RequireAuth';

const renderWithWrapper = (route: AppRoutesProps) => {
  const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

  return (
    <Route
      key={route.path}
      path={route.path}
      element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
    />
  );
};

export const AppRouter = memo(function AppRouter() {
  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
