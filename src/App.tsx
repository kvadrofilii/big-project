import { Button } from './components/Button';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import './index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: 'about',
    element: (
      <div className="app">
        <div>About</div>
        <Button>hello world!</Button>
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
