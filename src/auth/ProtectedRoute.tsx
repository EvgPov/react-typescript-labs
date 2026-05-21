import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import type { ProtectedRouteProps } from '@/types/types';

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user, authChecked } = useAuth();

  // Состояние 1: проверка ещё не завершена.
  // Показываем заглушку и ждём. Это предотвращает ложный редирект.
  if (!authChecked) {
    return <p>Проверка автризации ...</p>;
  }

  // Состояние 2: проверка завершена, пользователя нет.
  // Перенаправляем на страницу входа.
  // replace={true} означает: не добавлять /profile в историю браузера.
  // Так кнопка "назад" не вернёт пользователя на /profile снова.
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // проверка роли пользователя - доступ к определенным страницам
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // Состояние 3: пользователь авторизован.
  // Рендерим защищённую страницу.
  return <>{children}</>;
}
