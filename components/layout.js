import Link from 'next/link';
import useAuth from '../utils/use-auth';

const Layout = (props) => {
  const [logged, setLogged] = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    setLogged(false);
  };

  return (
    <div>
      {logged ? (
        <button onClick={handleLogout}>Wyloguj</button>
      ) : (
        <Link href={'/signin'}>Zaloguj</Link>
      )}

      <div>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
