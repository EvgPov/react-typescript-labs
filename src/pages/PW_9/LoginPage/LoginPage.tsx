import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@/auth/AuthContext';

import styles from './LoginPage.module.css';

export function LoginPage() {
  // контекст
  const { user, login } = useAuth();
  const navigate = useNavigate();

  // Контролируемые поля формы
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Если пользователь уже авторизован и зачем-то зашёл на /login --
  // сразу перенаправляем его на профиль. Незачем показывать форму входа
  // тому, кто уже вошёл.

  if (user) {
    return <Navigate to="/profile" replace />;
  }

  // обработка кнопки "Войти"
  const handleSubmit = (event: React.FormEvent) => {
    // отмняем стандартное поведение
    event.preventDefault();

    const result = login(email, password);

    // вход произошел успешно
    if (result.success) {
      // убираем ошибку
      setError('');
      // переходим в профиль, заменяя login на profile
      // по кнопке "Назад" после входа не поучится вернуться на страницу login
      navigate('/profile', { replace: true });
    } else {
      // вход нен удался -Ю показываем сообщение об ошибке
      setError(result.message || 'Ошибка входа');
    }
  };

  return (
    <div className={styles.div}>
      <h1>Вход</h1>

      <p className={styles.p}>Аккаунты</p>

      <ul className={styles.ul}>
        <li>admin@college.ru / admin123</li>
        <li>teacher@college.ru / teacher123</li>
        <li>student@college.ru / student123</li>
      </ul>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Введите email"
            className={styles.input}
          />
        </label>
        <label>
          Пароль
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Введите пароль"
            className={styles.input}
          />
        </label>

        <button className={styles.button}>Войти</button>

        {error && <p className={styles.error_p}>{error}</p>}
      </form>
    </div>
  );
}
