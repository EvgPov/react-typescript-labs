import React from 'react';
// типы
import type { Props, State } from '../../types/types';

export class SimpleErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
  };
  // на момент вызова экземпляра еще нет
  static getDerivedStateFromError(error: Error): Partial<State> {
    // обновляем состояние так, чтобы следующий рендер показал fallback UI
    return { hasError: true, error };
  }
  // сброс состояние ошибки, позволяя повторно попытаться отрендерить дочерние компоненты
  handleRetry = () => {
    this.setState({ hasError: false, error: null });
    this.props.onRetry?.(); // сброос у родителя
  };

  render() {
    if (this.state.hasError) {
      // передаем свой fallback чеерз пропс
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="wrapper">
          <h2 className="title">Ошибка</h2>
          <p>{this.state.error?.message || 'Неизвестная ошибка'}</p>
          <button className="button" onClick={this.handleRetry}>
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
