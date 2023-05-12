import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Outlet } from 'react-router-dom';
export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <header>
        <h1>Header</h1>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        <Outlet />
      </header>
    </>
  );
};
