import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  return (
    <div className={styles.notFound}>
      <h1>404 - Страница не найдена</h1>
      <p>К сожалению, страница, которую вы ищете, не существует.</p>
      <p>Возможно, вы ввели неправильный адрес или ссылка устарела.</p>

      <Link to={ROUTES.HOME} className={styles.homeLink}>
        Вернуться на главную страницу
      </Link>
    </div>
  );
}
