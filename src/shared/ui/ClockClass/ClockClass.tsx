import React from 'react';
import type { ClockState } from '@/shared/types/types';
import './ClockClass.css';

export class ClockClass extends React.Component<unknown, ClockState> {
  state = {
    // инициализация состояния
    // формирование времени из текущей даты согласно локали
    time: new Date().toLocaleTimeString('ru-RU', {
      hour: '2-digit', // 2 цифры
      minute: '2-digit', // 2 цифры
      second: '2-digit', // 2 цифры
      hour12: false, // 24-часовой формат
    }),
  };
  // ID таймера
  // Берет тип того, ЧТО ВОЗВРАЩАЕТ setInterval
  private timerID: ReturnType<typeof setInterval> | null = null;
  // создание интервала для обновления времени каждую секунду
  componentDidMount(): void {
    this.timerID = setInterval(() => {
      this.setState({
        // вызывает ререндер с новым временем
        // возвращает текущее время в виде строки
        time: new Date().toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }),
      });
    }, 1000);
  }

  componentDidUpdate(_prevProps: unknown, prevState: ClockState): void {
    if (prevState.time !== this.state.time) {
      console.log('Время изменилось (componentDidUpdate): ', this.state.time);
    }
  }

  componentWillUnmount(): void {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  render() {
    return (
      <>
        <h2 className="title">Текущее время (классовый компонент)</h2>
        <div className="wrapper-clock">{this.state.time}</div>
      </>
    );
  }
}
