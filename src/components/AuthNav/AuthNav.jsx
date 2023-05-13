import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        color="inherit"
        variant="text"
        aria-label="text button group"
      >
        <Button component={Link} to="/register">
          Register
        </Button>
        <Button component={Link} to="/login">
          Log In
        </Button>
      </ButtonGroup>
    </Box>
  );
};
