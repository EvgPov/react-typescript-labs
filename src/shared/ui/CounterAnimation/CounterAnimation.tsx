import { useState } from 'react';

import { usePrevious } from '@/hooks/usePrevious';
import './CounterAnimation.css';

export function CounterAnimation() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  const directionClass =
    prevCount === undefined ? '' : count > prevCount ? 'up' : count < prevCount ? 'down' : '';
  return (
    <div className="wrapper">
      <h2 className="title">Анимация изменения счётчика</h2>

      <div className="controls">
        <button className="button fs" onClick={() => setCount((c) => c - 1)}>
          -
        </button>

        <div className={`number-display ${directionClass}`}>
          {prevCount !== undefined && <span className="previous">было: {prevCount}</span>}
          <span className="current">стало: {count}</span>
        </div>
        <button className="button fs" onClick={() => setCount((c) => c + 1)}>
          +
        </button>
      </div>
      <p className="status">
        {prevCount === undefined ? 'Первый рендер' : `Изменение: ${prevCount} -> ${count}`}
      </p>
    </div>
  );
}
