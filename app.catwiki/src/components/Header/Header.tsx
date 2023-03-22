import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Button
          component={Link}
          to="/"
          disableRipple
          sx={{ minHeight: 'inherit', color: 'white' }}
        >
          <div>cat wiki</div>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
