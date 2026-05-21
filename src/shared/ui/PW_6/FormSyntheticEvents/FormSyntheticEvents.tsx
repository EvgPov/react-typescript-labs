import React, { useState } from 'react';

import './FormSyntheticEvents.css';

export function FormSyntheticEvents() {
  const [text, setText] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('event.type ', event.type);
    console.log('event.target ', (event.target as HTMLFormElement).elements);
    console.log('event.currentTarget ', event.currentTarget);
    console.log('Введённый текст:', text);
    // alert(`Форма отправлена! Текст: ${text}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Введите текст..."
          className="input"
        />
        <button type="submit" className="submit">
          Отправить форму
        </button>
      </form>

      <div className="result">
        <p className="result-label">Введённый текст:</p>
        <p className="result-value">{text || '—'}</p>
      </div>
    </div>
  );
}
