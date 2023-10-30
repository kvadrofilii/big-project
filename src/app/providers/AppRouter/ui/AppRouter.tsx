import { Suspense, memo } from 'react';

import { Route, Routes } from 'react-router-dom';

import { AppRoutesProps } from '@/app/providers/AppRouter/model/types/AppRoutesProps.types';
import { PageLoader } from '@/widgets/PageLoader';

import { RequireAuth } from './RequireAuth';
import { routeConfig } from '../model/config/routeConfig';

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
