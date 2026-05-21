import { UserProfile } from './UserProfile';
import { UserProfileClass } from './UserProfileClass';

export function UserProfileDemo() {
  const userIds = [1, 2, 3];

  return (
    <div className="wrapper">
      <h2 className="title">Данные пользователя (классовый компонент)</h2>
      {userIds.map((id) => (
        <UserProfileClass key={id} userId={id} />
      ))}
      <h2 className="title">Данные пользователя (функциональный компонент)</h2>
      {userIds.map((id) => (
        <UserProfile key={id} userId={id} />
      ))}
    </div>
  );
}
