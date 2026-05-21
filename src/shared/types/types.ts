// import type { ReactNode } from 'react';

import type { ChangeEvent } from 'react';

export interface LikeButtonProps {
  renderButtonText?: (likes: number) => string; // сигнатура функции для динамического текста
}

export interface RegFormType {
  email: string;
  password: string;
}

export interface ProfileType {
  name: string;
  bio: string;
}

export interface ProfileFormProps {
  profile: { name: string; bio: string };
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface ProfileCardProps {
  profile: { name: string; bio: string };
}

interface ClockState {
  time: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface UserProfileProps {
  userId: number;
}

interface UserProfileState {
  user: User | null;
}

interface ExpensiveItemProps {
  id: number;
  name: string;
  uuid?: string;
}

interface Props {
  children: React.ReactNode; // дочерние компоненты
  fallback?: React.ReactNode; // то, что будет показано вместо сломанного компонента, когда произойдет ошибка
  onRetry?: () => void; // callback при повторе
}

interface State {
  hasError: boolean;
  error: Error | null;
}

// types for Practical Work №7
interface InputFieldProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface PreviewProps {
  text: string;
}

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Action =
  | { type: 'add'; payload: string }
  | { type: 'toggle'; payload: number }
  | { type: 'remove'; payload: number };

type UserPW7 = {
  id: string;
  name: string;
  email?: string;
};

interface AuthContextType {
  user: UserPW7 | null;
  login: (name: string) => void;
  logout: () => void;
}
export type {
  ClockState,
  User,
  UserProfileProps,
  UserProfileState,
  ExpensiveItemProps,
  Props,
  State,
  InputFieldProps,
  PreviewProps,
  Theme,
  ThemeContextType,
  Todo,
  Action,
  UserPW7,
  AuthContextType,
};
