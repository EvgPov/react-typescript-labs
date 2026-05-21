import { useState, useEffect } from 'react';
import '../ClockClass/ClockClass.css';

export function Clock({ id }: { id: number }) {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }),
  );

  useEffect(() => {
    const timeID = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }),
      );
    }, 1000);
    console.log(`Часы № ${id}: запуск таймера ${timeID}`);
    return () => {
      console.log(`Часы № ${id}: CLEANUP! Таймер ${timeID} остановлен`);
      clearInterval(timeID);
    };
  }, [id]);

  useEffect(() => {
    console.log(` Время изменилось на ${time}`);
  }, [time]);

  return (
    <>
      <strong>Часы №{id}</strong>
      <div className="wrapper-clock">{time}</div>
    </>
  );
}
