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
      <div className={'bg-cyan-400 py-2 px-8 drop-shadow-lg'}>
        <div className={'container mx-auto flex justify-between items-center '}>
          <div>
            <Link href={'/'}>
              <a>
                <img src={'/logo.svg'} alt={'Logo'} className={'h-8'}/>
              </a>
            </Link>
          </div>

          <div>
            {logged ? (
              <div>
                <Link href={'/add'}>
                  <a className={'bg-cyan-700 text-white font-bold py-2 px-4 rounded-xl mr-2'}>
                    Dodaj film
                  </a>
                </Link>

                <button
                  onClick={handleLogout}
                  className={'bg-cyan-700 text-white font-bold py-2 px-4 rounded-xl'}
                >
                  Wyloguj
                </button>
              </div>
            ) : (
              <div>
                <Link href={'/signup'}>
                  <a className={'bg-cyan-700 text-white font-bold py-2 px-4 rounded-xl mr-2'}>
                    Zarejestruj
                  </a>
                </Link>
                <Link href={'/signin'}>
                  <a className={'bg-cyan-700 text-white font-bold py-2 px-4 rounded-xl'}>
                    Zaloguj
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={'py-8 container mx-auto'}>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
