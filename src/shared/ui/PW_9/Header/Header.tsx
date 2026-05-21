import { NavLink } from 'react-router-dom';
import { useAuth } from '@/auth/AuthContext';
import style from './Header.module.css';

export function Header() {
  // контекст
  const { user, logout } = useAuth();
  // класс для отображения активной ссылки
  const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${style.link} ${style.active}` : style.link;

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <NavLink to="/" className={getLinkClassName} end>
          Главная
        </NavLink>

        {user && (
          <NavLink to="/profile" className={getLinkClassName}>
            Профиль
          </NavLink>
        )}

        {user && (
          <NavLink to="/courses" className={getLinkClassName} end>
            Курсы
          </NavLink>
        )}

        {(user?.role === 'role_teacher' || user?.role === 'role_admin') && (
          <NavLink to="/courses/manage" className={getLinkClassName} end>
            Управление курсами
          </NavLink>
        )}

        {user?.role === 'role_admin' && (
          <NavLink to="/admin" className={getLinkClassName}>
            Админ-панель
          </NavLink>
        )}
      </nav>

      <div>
        {/* показываем разный интерфейс в зависимости от состояния */}
        {user ? (
          // пользователь вошел - показываем имя, роль, группу (для студента) и кнопку выхода
          <div className={style.div}>
            <span className={style.info}>
              {user.name} {user.role}
              {user.group && ` • ${user.group}`}
            </span>
            <button onClick={logout} className={style.button}>
              Выйти
            </button>
          </div>
        ) : (
          <NavLink to="/login" className={getLinkClassName}>
            Войти
          </NavLink>
        )}
      </div>
    </header>
  );
}
