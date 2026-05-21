import type { User } from '@/shared/types/types';

export async function getAllUsers(): Promise<User[] | null> {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

    if (!res.ok) {
      throw new Error(`Ошибка загрузки списка пользлвателей: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getUserById(userId: number): Promise<User | null> {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!res.ok) {
      if (res.status === 404) {
        return null;
      }
      throw new Error(`Ошибка загрузки пользлвателя: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
