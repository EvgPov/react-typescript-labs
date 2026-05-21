import { useState } from 'react';

import { ChildWithoutMemo } from './ChildWithoutMemo';
import { ChildWithMemo } from './ChildWithMemo';

import './RenderAnalysis.css';

export function RenderAnalysis() {
  const [count, setCount] = useState(0);
  const [countMemo, setCountMemo] = useState(0);

  return (
    <>
      {/* Без memo */}
      <div className="wrapper">
        <h2 className="title">Parent + Child без React.memo</h2>
        <ChildWithoutMemo />
        <p className="count_label">Счётчик: {count}</p>
        <button className="button" onClick={() => setCount((count) => count + 1)}>
          Увеличить (+)
        </button>
        {/* С memo */}
        <hr className="divider" />
        <h2 className="title">Parent + Child с React.memo</h2>
        <ChildWithMemo />
        <p className="count_label">Счётчик: {countMemo}</p>
        <button className="button" onClick={() => setCountMemo((count) => count + 1)}>
          Увеличить (+)
        </button>
      </div>
    </>
  );
}
