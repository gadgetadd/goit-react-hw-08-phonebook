import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { SnackbarProvider } from 'notistack';
import CssBaseline from '@mui/material/CssBaseline';

import { LoginPage, RegisterPage, ContactsPage } from 'pages';
import { PrivateRoute, RestrictedRoute } from 'components/Routes';
import { SharedLayout } from 'components/AppBar';
import { Loader } from 'components/Loader';
import { refreshUser } from 'redux/authOperations';
import { useAuth } from 'hooks/useAuth';

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <SnackbarProvider />
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Navigate to={'/contacts'} />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to={'/contacts'} />} />
        </Routes>
      )}
    </>
  );
}
