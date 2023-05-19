import { Suspense, memo } from 'react';

import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config';
import { AppRoutesProps } from 'shared/config/route/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

import { RequireAuth } from './RequireAuth';

const renderWithWrapper = (route: AppRoutesProps) => {
  const element = (
    <Suspense fallback={<PageLoader />}>
      <div className="page-wrapper">{route.element}</div>
    </Suspense>
  );

  return (
    <Route
      key={route.path}
      path={route.path}
      element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
    />
  );
};

export const AppRouter = memo(function AppRouter() {
  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
