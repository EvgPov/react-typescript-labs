import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes';
import styles from './ProfilePage.module.css';

export function ProfilePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(ROUTES.HOME, { replace: true });
  };
  return (
    <div>
      <h1>Профиль пользователя</h1>
      <p className={styles.p}>Здесь будет информация о пользователе</p>
      <button className={styles.button} onClick={handleLogout}>
        Выйти
      </button>
    </div>
  );
}
