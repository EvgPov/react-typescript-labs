import { useParams, Link } from 'react-router-dom';
import type { UserParams } from '@/types/routeParams';
import { ROUTES } from '@/routes';

import styles from './UserPage.module.css';

export function UserPage() {
  const { id } = useParams<UserParams>();

  if (!id) {
    return <h1>Ошибка: ID пользователя не найден</h1>;
  }

  const userId = Number(id);

  if (Number.isNaN(userId)) {
    return (
      <div>
        <h1>Ошибка 404 — Пользователь не найден</h1>
        <p className={styles.p}>ID "{id}" не является числом.</p>
        <Link to={ROUTES.HOME} className={styles.link_back_to_home}>
          Вернуться на главную
        </Link>
      </div>
    );
  }
  if (userId <= 0) {
    return (
      <div>
        <h1>Ошибка 404 — Пользователь не найден</h1>
        <p className={styles.p}>ID должен быть положительным числом. Получено: {userId}</p>
        <Link to={ROUTES.HOME} className={styles.link_back_to_home}>
          Вернуться на главную
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1>Профиль пользователя #{userId}</h1>
      <div className={styles.wrapper_user_profile}>
        <p>
          <strong>ID: </strong>
          {userId}
        </p>
        <p>
          <strong>Имя: </strong>
          Пользователь {userId}
        </p>
        <p>
          <strong>Email: </strong>
          user{userId}@example.com
        </p>
        <p>
          <strong>Возраст: </strong>
          {20 + (userId % 30)} лет
        </p>
      </div>
      <p className={styles.p_link_back_to_home}>
        <Link to={ROUTES.HOME} className={styles.link_back_to_home}>
          Вернуться на главную
        </Link>
      </p>
    </div>
  );
}
