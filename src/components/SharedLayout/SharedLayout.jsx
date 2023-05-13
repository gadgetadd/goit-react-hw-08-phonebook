import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Container } from '@mui/material';

import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Outlet } from 'react-router-dom';
export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          mb: 2,
        }}
      >
        <AppBar position="static">
          <Container maxWidth="lg">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Phonebook
              </Typography>
              {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Container maxWidth="lg">
        <Outlet />{' '}
      </Container>
    </>
  );
};
