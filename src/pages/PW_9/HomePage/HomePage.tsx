import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <div className={styles.div}>
      <h1>Главная страница</h1>
      <p>Добро пожаловать! Для доступа к курсам необходимо войти в систему</p>
    </div>
  );
}
