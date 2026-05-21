import { useState } from 'react';

import { ExpensiveListItem } from './ ExpensiveListItem';
import type { ExpensiveItemProps } from '@/shared/types/types';
import { arrayWithUniqueId } from '@/shared/lib/uuid';

const items: ExpensiveItemProps[] = [
  { id: 1, name: 'Первый элемент' },
  { id: 2, name: 'Второй элемент' },
  { id: 3, name: 'Третий элемент' },
  { id: 4, name: 'Четвертый элемент' },
  { id: 5, name: 'Пятый элемент' },
];

export function ExpensiveListDemo() {
  console.log(` ExpensiveListDemo → РЕНДЕР РОДИТЕЛЯ(${new Date().toLocaleTimeString()})`);
  const [counter, setCounter] = useState(0);

  const itemsUUID: ExpensiveItemProps[] = arrayWithUniqueId(items);

  return (
    <div className="wrapper">
      <h2 className="title">Родительский компонент для демонстрации React.memo </h2>
      <button className="button" onClick={() => setCounter((prev) => prev + 1)}>
        Rerender: {counter}
      </button>
      <h3>Список элементов, которые должны рендерится только один раз</h3>
      <div>
        {itemsUUID.map((item) => (
          <ExpensiveListItem key={item.id} id={item.id} name={item.name} />
        ))}
      </div>
    </div>
  );
}
