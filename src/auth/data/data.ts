import type { UserRole } from '@/types/types';

export const accounts = [
  {
    id: 1,
    email: 'admin@college.ru',
    password: 'admin123',
    name: 'name_admin',
    role: 'role_admin' as UserRole,
  },
  {
    id: 2,
    email: 'teacher@college.ru',
    password: 'teacher123',
    name: 'name_teacher',
    role: 'role_teacher' as UserRole,
  },
  {
    id: 3,
    email: 'student@college.ru',
    password: 'student123',
    name: 'name_student',
    group: 'ИСИП-2024',
    role: 'role_student' as UserRole,
  },
];
