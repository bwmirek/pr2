import Link from 'next/link';

const UserCreated = () => {
  return (
    <div>
      <p>
        Pomyślnie stworzono użytkownika.
        <Link href="/signin">
            Zaloguj
        </Link>
      </p>
    </div>
  );
};

export default UserCreated;
