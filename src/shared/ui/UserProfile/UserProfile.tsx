import { useState, useEffect } from 'react';
// api
import { getUserById } from '@/shared/api/getUsersFromApi';
// type
import type { User } from '@/shared/types/types';
// style
import './UserProfile.css';

export function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await getUserById(userId);
        setUser(userData);
      } catch (error) {
        console.error(`Не удалось загрузить данные пользователя: ${error}`);
        setUser(null);
      }
    };

    loadUser();
  }, [userId]);

  if (!user) {
    return <div>Пользователь не найден</div>;
  }

  return (
    <>
      <div className="wrapper-user">
        <p>
          <span className="span">Name: </span>
          {user.name}
        </p>
        <p>
          <span className="span">Username: </span>
          {user.username}
        </p>
        <p>
          {' '}
          <span className="span">Email: </span>
          {user.email}
        </p>
        <p>
          <span className="span">Address: </span>
          {user.address.street}, {user.address.suite}, {user.address.city}
        </p>
        <p>
          {' '}
          <span className="span">Phone: </span>
          {user.phone}
        </p>
        <p>
          {' '}
          <span className="span">Website: </span>
          {user.website}
        </p>
        <p>
          {' '}
          <span className="span">Company: </span>
          {user.company.name}
        </p>
      </div>
    </>
  );
}
