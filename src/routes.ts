const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROFILE: '/profile',
  LOGIN: '/login',
} as const;

const getUserRoute = (id: string | number): string => `/users/${id}`;

export { ROUTES, getUserRoute };
