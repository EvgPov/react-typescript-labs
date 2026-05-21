import type { ProfileFormProps } from '../../types/types';

export function ProfileForm({ profile, onChange }: ProfileFormProps) {
  return (
    <div>
      <label htmlFor="name" className="label">
        Имя
        <input
          type="text"
          name="name"
          id="name"
          className="field"
          value={profile.name}
          onChange={onChange}
        />
      </label>
      <label htmlFor="bio" className="label">
        О себе
        <textarea
          name="bio"
          id="bio"
          value={profile.bio}
          className="field"
          onChange={onChange}
          rows={10}
        />
      </label>
    </div>
  );
}
