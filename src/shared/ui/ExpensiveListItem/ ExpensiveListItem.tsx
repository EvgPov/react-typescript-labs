import { memo, useEffect, useState } from 'react';

import type { ExpensiveItemProps } from '@/shared/types/types';
// тяжелое вычисление
import { heavyComputation } from '@/shared/lib/heavyComputation';

export const ExpensiveListItem = memo(function ExpensiveListItem({ id, name }: ExpensiveItemProps) {
  console.log(
    `ExpensiveListItem id=${id} → РЕНДЕР ДОЧЕРНЕГО КОМПОНЕНТА (React.memo)(${new Date().toLocaleTimeString()})`,
  );
  const [timeSpent, setTimeSpent] = useState<string>('—');
  const [result, setResult] = useState<string>('');
  const [fragment, setFragment] = useState<string>('');

  useEffect(() => {
    // Запускаем асинхронно, чтобы не блокировать рендер и не вызывать предупреждения
    const timer = setTimeout(() => {
      //возвращает высокоточную временную местку в мс
      const start = performance.now();
      const computation = heavyComputation(8_000_000);
      const end = performance.now();
      setTimeSpent((end - start).toFixed(1));
      setResult(computation.result);
      setFragment(computation.fragment);
    }, 0);

    return () => clearTimeout(timer);
  }, [id]);

  return (
    <p>
      Элемент №{id} - {name}
      <br />
      Вычисление заняло ≈ {timeSpent} мс
      <br />
      Результат: {result}
      <br />
      Фрагмент строки: {fragment}
      <br />
    </p>
  );
});
