import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { Suspense } from 'react';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Layout } from 'app/Layout/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>,
  ),
);

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
