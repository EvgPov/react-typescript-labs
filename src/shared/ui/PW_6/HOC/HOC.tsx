import { useState, useEffect } from 'react';
import './HOC.css';

function withLoader<P extends object>(WrappedComponent: React.ComponentType<P>) {
  return function WithLoaderComponent(props: P & { isLoading: boolean }) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return (
        <div className="loader-container">
          <div className="loader-inner">
            <div className="loader-spinner"></div>
            <p className="loader-text">Загрузка...</p>
          </div>
        </div>
      );
    }

    return <WrappedComponent {...(restProps as P)} />;
  };
}

function UserProfile({ name, avatar }: { name: string; avatar: string }) {
  return (
    <div className="profile">
      <img src={avatar} alt={name} className="avatar" />
      <div>
        <p className="name">{name}</p>
      </div>
    </div>
  );
}

const UserProfileWithLoader = withLoader(UserProfile);

export function HOC() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrapper">
      <UserProfileWithLoader
        isLoading={isLoading}
        name="случайное фото с https://i.pravatar.cc"
        avatar="https://i.pravatar.cc/"
      />
    </div>
  );
}
