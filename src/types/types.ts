// роль пользователя
type UserRole = 'role_student' | 'role_teacher' | 'role_admin';
// объект пользователя
type User = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  group?: string;
};
//То, что контекст будет предоставлять компонентам
type AuthContextType = {
  user: User | null; // текуущий пользовател или null
  authChecked: boolean; // завершилась ли проверка localStorage
  login: (
    email: string,
    password: string,
  ) => {
    success: boolean;
    message?: string;
  };
  logout: () => void;
};

type ProtectedRouteProps = {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
};
export type { UserRole, User, AuthContextType, ProtectedRouteProps };
