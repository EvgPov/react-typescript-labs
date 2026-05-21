import { useState } from 'react';
import { useAuth } from './AuthContext';
import './UseStorage.css';

export function UserProfile() {
  const { user, login, logout } = useAuth();
  const [nameInput, setNameInput] = useState('');

  const handleLogin = () => {
    if (nameInput.trim()) {
      login(nameInput.trim());
      setNameInput('');
    }
  };

  return (
    <div className="wrapper">
      <p className="paragraph"> 4. Сервис для хранения пользователя</p>
      {user ? (
        <div>
          <h2>Привет, {user.name}!</h2>
          <p>ID: {user.id}</p>
          {user.email && <p>Email: {user.email}</p>}
          <button className="button" onClick={logout}>
            Выйти
          </button>
        </div>
      ) : (
        <div className="wrapper-login">
          <input
            className="input"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Введите имя"
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
          />
          <button className="button button-small" onClick={handleLogin}>
            Войти
          </button>
        </div>
      )}
    </div>
  );
}
