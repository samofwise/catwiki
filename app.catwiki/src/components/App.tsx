import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Root from './Root';
// eslint-disable-next-line import/no-named-as-default
import Home from './Home/Home';
import Breed from './Breed/Breed';
import theme from '../theme';

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider {...{ router }} />
    </ThemeProvider>
  );
}

export default App;
