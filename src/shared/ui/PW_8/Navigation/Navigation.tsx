import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/routes';

import styles from './Navigation.module.css';

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink
        to={ROUTES.HOME}
        className={({ isActive }) => styles.navLink + (isActive ? ' ' + styles.active : '')}
      >
        Главная
      </NavLink>
      <NavLink
        to={ROUTES.ABOUT}
        className={({ isActive }) => styles.navLink + (isActive ? ' ' + styles.active : '')}
      >
        О нас
      </NavLink>
      <NavLink
        to={ROUTES.PROFILE}
        className={({ isActive }) => styles.navLink + (isActive ? ' ' + styles.active : '')}
      >
        Профиль
      </NavLink>
      <NavLink
        to={ROUTES.LOGIN}
        className={({ isActive }) => styles.navLink + (isActive ? ' ' + styles.active : '')}
      >
        Войти
      </NavLink>
    </nav>
  );
}
