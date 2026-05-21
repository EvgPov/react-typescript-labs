import { useAuth } from '@/auth/AuthContext';
import styles from './ProfilePage.module.css';

export function ProfilePage() {
  const { user } = useAuth();

  // Эта страница рендерится только внутри ProtectedRoute,
  // который уже проверил, что пользователь есть.
  // Но TypeScript не знает об этом -- для него user всё равно User | null
  // Добавляем проверку, чтобы успокоить TypeScript и подстраховаться.

  if (!user) return null;

  return (
    <div className={styles.div}>
      <h1>Профиль пользователя</h1>
      <table className={styles.table}>
        <tbody>
          {[
            ['ID', user.id],
            ['Имя', user.name],
            ['Email', user.email],
            ['Роль', user.role],
            ...(user.group ? [['Группа', user.group]] : []),
          ].map(([label, value]) => (
            <tr key={label as string}>
              <td className={styles.td_label}>{label}</td>
              <td className={styles.td_value}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
