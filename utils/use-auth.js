import { useState } from 'react';

const useAuth = () => {
  const token = typeof window !== 'undefined' && localStorage.getItem('auth_token');
  const [logged, setLogged] = useState(token !== undefined && token !== null && token !== '');

  return [logged, setLogged];
};

export default useAuth;
