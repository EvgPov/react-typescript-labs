import type { ProfileCardProps } from '../../types/types';
import './ProfileEditor.css';
export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div>
      <div className="wrapper-border-up">
        <p>
          <span className="span">Ваше имя: </span>
          {profile.name}
        </p>
        <p>
          <span className="span">о себе: </span>
          {profile.bio}
        </p>
      </div>
    </div>
  );
}
