import Link from 'next/link';

const UserCreated = () => {
  return (
    <div>
      <p className={'text-green-700 font-bold text-6xl mb-12 text-center'}>
        Pomyślnie stworzono użytkownika.
      </p>

      <Link href="/signin">
        <a className={'rounded-xl bg-cyan-700 w-full p-4 block text-center text-white font-bold text-2xl'}>
          Zaloguj
        </a>
      </Link>
    </div>
  );
};

export default UserCreated;
