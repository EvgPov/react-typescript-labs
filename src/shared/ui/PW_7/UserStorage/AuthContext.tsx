import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { UserPW7, AuthContextType } from '@/shared/types/types';
import { userService } from '@/shared/ui/PW_7/UserStorage/UserService';

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserPW7 | null>(() => {
    return userService.getUser();
  });

  const login = (name: string) => {
    const newUser: UserPW7 = {
      id: crypto.randomUUID(),
      name,
      email: `${name.toLowerCase()}@example.com`,
    };
    userService.saveUser(newUser);
    setUser(newUser);
  };

  const logout = () => {
    userService.removeUser();
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
}
