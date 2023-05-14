import { Outlet } from 'react-router-dom';

import { Container, AppBar, Box, Toolbar, Typography } from '@mui/material';

import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';

export default function SharedLayout() {
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
}
