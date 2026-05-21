import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes';
import styles from './LoginPage.module.css';

export function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Пользователь вошёл в систему');
    navigate(ROUTES.PROFILE, { replace: true });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Страница входа</h1>
      <button className={styles.button} onClick={handleLogin}>
        Войти
      </button>
      <button className={styles.button} onClick={handleBack}>
        Назад
      </button>
    </div>
  );
}
