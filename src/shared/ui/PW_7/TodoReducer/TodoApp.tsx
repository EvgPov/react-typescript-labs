import { useReducer, useState } from 'react';
import { TodoReducer } from './TodoReducer';
import type { Todo } from '@/shared/types/types';
import './TodoReducer.css';

export function TodoApp() {
  const [text, setText] = useState('');
  const [todos, dispatch] = useReducer(TodoReducer, []);

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch({ type: 'add', payload: text });
    setText('');
  };

  return (
    <div className="wrapper">
      <p className="paragraph">3. useReducer для списка задач</p>
      <div className="todo-add">
        <input
          className="input"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Новая задача..."
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        />
        <button className="button button-small" onClick={handleAdd}>
          Добавить
        </button>
      </div>

      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id} style={{ margin: '8px 0' }}>
            <span
              onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                marginRight: '10px',
              }}
            >
              {todo.text}
            </span>
            <button
              className="button button-small"
              onClick={() => dispatch({ type: 'remove', payload: todo.id })}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && <p>Пока задач нет</p>}
    </div>
  );
}
