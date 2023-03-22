import createTheme from '@mui/material/styles/createTheme';
import { CSSProperties } from 'react';

const theme = createTheme({
  palette: { mode: 'dark' },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: 'url("stars.png")',
          backgroundRepeat: 'repeat',
          backgroundSize: '500px',
          overflowX: 'hidden',
        } as CSSProperties,
      },
    },
  },
});

export default theme;
