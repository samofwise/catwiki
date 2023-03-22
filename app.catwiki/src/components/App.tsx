import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
// eslint-disable-next-line import/no-named-as-default
import Home from './Home/Home';
import Breed from './Breed/Breed';

function App() {
  const router = createBrowserRouter([
    {
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        { path: '/breeds/:id', element: <Breed /> },
      ],
    },
  ]);

  return <RouterProvider {...{ router }} />;
}

export default App;
