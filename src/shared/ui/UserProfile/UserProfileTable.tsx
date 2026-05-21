import { useState, useEffect } from 'react';
import { getAllUsers } from '@/shared/api/getUsersFromApi';
import type { User } from '@/shared/types/types';

const fields = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Имя' },
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Телефон' },
  { key: 'website', label: 'Сайт' },
  { key: 'company.name', label: 'Компания' },
  { key: 'company.catchPhrase', label: 'Слоган компании' },
  { key: 'company.bs', label: 'Бизнес стратегия' },
  { key: 'address.city', label: 'Город' },
  { key: 'address.street', label: 'Улица' },
  { key: 'address.suite', label: 'Квартира' },
];

export function UserProfileTable() {
  // храним массив пользователей
  const [allUsers, setAllUsers] = useState<User[] | null>([]);
  const [currentIndex, setCurrentIndex] = useState(-1); // пока никого не показываем
  const [visibleFieldsCount, setVisibleFieldsCount] = useState(0);

  // загружаем всех пользователей
  useEffect(() => {
    const load = async () => {
      try {
        const usersData = await getAllUsers();
        setAllUsers(usersData);
        // начинаем показывать пользователей по одному через небольшую паузу
        setTimeout(() => {
          setCurrentIndex(0);
        }, 800);
      } catch (err) {
        console.error(`Не удалось загрузить данные пользоватеуй: ${err}`);
      }
    };
    load();
  }, []);

  // добавляем следующих пользователей
  useEffect(() => {
    if (currentIndex < 0 || (Array.isArray(allUsers) && currentIndex >= allUsers.length)) return;

    setVisibleFieldsCount(0);
    // показываем пользовтателя
    fields.forEach((_, index) => {
      setTimeout(
        () => {
          setVisibleFieldsCount((prev) => prev + 1);
        },
        400 + index * 500,
      );
    });

    // переходим к следующему
    const nextTimeout = setTimeout(
      () => {
        setCurrentIndex((prev) => {
          if (prev + 1 < allUsers.length) {
            return prev + 1;
          }
          return prev; // если последний, то остаемся на нем
        });
      },
      400 + fields.length * 500 + 1500,
    ); // +1.5 секунды паузы после последней строки

    return () => {
      clearTimeout(nextTimeout);
    };
  }, [currentIndex, allUsers.length]);

  if (currentIndex < 0) {
    return <div>Подготовка к показу</div>;
  }

  const currentUser = allUsers[currentIndex];
  const rowToShow = fields.slice(0, visibleFieldsCount);

  return (
    <div>
      <h1>
        Пользователи({currentIndex + 1} / {allUsers.length})
      </h1>
      <div key={currentUser.id}>
        <h2>
          {currentUser.name} (@{currentUser.username})
        </h2>
        <table>
          <tbody>
            {rowToShow.map((field) => {
              let value = currentUser;
              field.key.split('.').forEach((part) => {
                value = value?.[part];
              });
              return (
                <tr key={field.key}>
                  <th>{field.label}</th>
                  <td>{value ?? '-'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
