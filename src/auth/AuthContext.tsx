import { createContext, useEffect, useContext, useMemo, useState } from 'react';

import type { ReactNode } from 'react';
import type { User, AuthContextType } from '@/types/types';

import { accounts } from './data/data';
// создание контекста
// null - начальное значение до того, как провайдер его установит
const AuthContext = createContext<AuthContextType | null>(null);
// ключ для localStorage
const STORAGE_KEY = 'auth_user';

// const getInitialUser = (): User | null => {

//   const raw = localStorage.getItem(STORAGE_KEY);
//   if (!raw) return null;

//   try {
//     return JSON.parse(raw);
//   } catch {
//     localStorage.removeItem(STORAGE_KEY);
//     return null;
//   }
// };

export function AuthProvider({ children }: { children: ReactNode }) {
  // const [user, setUser] = useState<User | null>(getInitialUser);
  // const [authChecked] = useState(true);

  const [user, setUser] = useState<User | null>(null);
  // завершилась ли проверка localStorage при запуске
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    // Этот эффект выполняется один раз -- при первом рендере AuthProvider.
    // Именно здесь нужно проверить: есть ли сохранённый пользователь?

    const raw = localStorage.getItem(STORAGE_KEY);

    if (raw) {
      try {
        // Пробуем распарсить строку обратно в объект
        const parsed: User = JSON.parse(raw);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUser(parsed); // восстанавливаем пользователя в state
      } catch {
        // JSON.parse может выбросить ошибку, если данные повреждены.
        // Например, если кто-то вручную отредактировал localStorage.
        // В таком случае просто удаляем испорченные данные.
        localStorage.removeItem(STORAGE_KEY);
      }
    }

    // В любом случае -- проверка завершена.
    // Теперь ProtectedRoute знает, что можно принимать решение.
    setAuthChecked(true);
  }, []);

  const login = (email: string, password: string) => {
    // базлвая валидация
    if (!email.trim() || !password.trim()) {
      return { success: false, message: 'Заполните все поля' };
    }
    // сравнение с массивом тестовых аккаунтов
    const match = accounts.find(
      (account) => account.email === email && account.password === password,
    );

    if (!match) {
      return {
        success: false,
        message: 'Неверный email или пароль',
      };
    }

    const loggerUser: User = {
      id: match.id,
      name: match.name,
      email: match.email,
      role: match.role,
      ...(match.group && { group: match.group }),
    };
    // обновление state - ререндер
    setUser(loggerUser);
    // сохранение в localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(loggerUser));
    return { success: true };
  };

  const logout = () => {
    // очищаем state
    setUser(null);
    // удаляем из localStorage
    localStorage.removeItem(STORAGE_KEY);
  };

  // useMemo гарантирует, что объект value создаётся заново
  // только когда изменился user или authChecked.
  // Без него при каждом рендере AuthProvider создаётся новый объект,
  // что вызывает ненужные перерисовки всех компонентов-потребителей.

  const value = useMemo(() => ({ user, authChecked, login, logout }), [user, authChecked]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Кастомный хук -- чтобы не писать useContext(AuthContext) вручную везде.
// Плюс встроенная защита: если вызвать useAuth вне AuthProvider -- получим ошибку,
// а не молчаливый null.

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth должен использоваться внутри AuthProvider');
  }
  return context;
}
