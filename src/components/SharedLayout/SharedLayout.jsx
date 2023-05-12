import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <header>
        <h1>Header</h1>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
};
