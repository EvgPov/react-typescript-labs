import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';
import { getUserRoute } from '@/routes';

export function HomePage() {
  return (
    <div className={styles.homePage_wrapper}>
      <h1>Главная страница</h1>
      <p>Это пример приложения с React Router</p>

      <h2 className={styles.title_users}>Пользователи</h2>
      <div className={styles.links_users}>
        <Link to={getUserRoute(1)}>Пользователь 1</Link>
        <Link to={getUserRoute(2)}>Пользователь 2</Link>
        <Link to={getUserRoute(3)}>Пользователь 3</Link>
        <br />
        <Link to="/users/abc">Некорректный ID (abc)</Link>
        <Link to="/users/-3">Некорректный ID (-3)</Link>
        <Link to="/users">Пользователь без ID</Link>
      </div>
    </div>
  );
}
