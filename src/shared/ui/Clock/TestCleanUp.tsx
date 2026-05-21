import { useState } from 'react';

import { Clock } from './Clock';

export function TestCleanUp() {
  const [clocks, setClock] = useState([1, 2, 3]); //массив ID часов

  const addClock = () => {
    setClock([...clocks, clocks.length + 1]);
  };

  const removeClock = () => {
    setClock(clocks.slice(0, -1)); // взять все элементы с первого до последнего (не вклюая последний)
  };

  return (
    <div className="wrapper">
      <h2 className="title">Текущее время (функциональный компонент)</h2>
      <button className="button" onClick={addClock}>
        + Добавить часы
      </button>
      <button className="button" onClick={removeClock}>
        - Убрать часы
      </button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {clocks.map((id) => (
          <Clock key={id} id={id} />
        ))}
      </div>
    </div>
  );
}
