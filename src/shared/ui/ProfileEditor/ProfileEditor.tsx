import { useState } from 'react';
// тип профиля
import type { ProfileType } from '../../types/types';
// компонент с полями ввода
import { ProfileForm } from './ProfileForm';
// отображение профиля
import { ProfileCard } from './ProfileCard';
// обработчик изменений на форме
import { formChangehandler } from '../../lib/formHandlers';

export function ProfileEditor() {
  const [profile, setProfile] = useState<ProfileType>({ name: '', bio: '' });

  return (
    <div className="wrapper">
      <h2 className="title">Редактирование профиля</h2>
      {/* текущее значение и обработчик в форму */}
      <ProfileForm profile={profile} onChange={formChangehandler(setProfile)} />
      {/* текущее знчание для отображения (тоже самое) */}
      <ProfileCard profile={profile} />
    </div>
  );
}
