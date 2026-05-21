import React from 'react';
import { getUserById } from '@/shared/api/getUsersFromApi';
import type { UserProfileProps, UserProfileState } from '@/shared/types/types';

export class UserProfileClass extends React.Component<UserProfileProps, UserProfileState> {
  state: UserProfileState = {
    user: null,
  };

  private async loadUser({ userId }: { userId: number }): Promise<void> {
    try {
      const userData = await getUserById(userId);
      this.setState({
        user: userData,
      });
    } catch (err) {
      console.error(`Не удалось загрузить данные пользователя: ${err}`);
    }
  }
  componentDidMount(): void {
    this.loadUser({ userId: this.props.userId });
  }

  componentDidUpdate(prevProps: UserProfileProps): void {
    if (prevProps.userId !== this.props.userId) {
      this.loadUser({ userId: this.props.userId });
    }
  }

  render() {
    const { user } = this.state;
    if (!user) {
      return <div>Пользователь не найден</div>;
    }

    return (
      <>
        <div className="wrapper-user">
          <p>
            <span className="span">Name: </span>
            {user.name}
          </p>
          <p>
            <span className="span">Username: </span>
            {user.username}
          </p>
          <p>
            {' '}
            <span className="span">Email: </span>
            {user.email}
          </p>
          <p>
            <span className="span">Address: </span>
            {user.address.street}, {user.address.suite}, {user.address.city}
          </p>
          <p>
            {' '}
            <span className="span">Phone: </span>
            {user.phone}
          </p>
          <p>
            {' '}
            <span className="span">Website: </span>
            {user.website}
          </p>
          <p>
            {' '}
            <span className="span">Company: </span>
            {user.company.name}
          </p>
        </div>
      </>
    );
  }
}
