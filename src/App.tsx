import { Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import './styles/index.scss';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { Layout } from './layouts/Layout/Layout';
import { useTheme } from './theme/useTheme';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPageLazy />} />
      <Route path="/about" element={<AboutPageLazy />} />
    </Route>
  )
);

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button type="button" onClick={toggleTheme}>
        Toggle theme
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default App;
