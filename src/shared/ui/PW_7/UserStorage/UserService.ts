import type { UserPW7 } from '@/shared/types/types';

export const userService = {
  getUser(): UserPW7 | null {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  },

  saveUser(user: UserPW7): void {
    localStorage.setItem('user', JSON.stringify(user));
  },

  removeUser(): void {
    localStorage.removeItem('user');
  },
};
