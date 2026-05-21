import { useRef } from 'react';
import './Refs.css';

export function Refs() {
  const inputRef = useRef<HTMLInputElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const scrollToBlock = () => {
    targetRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="wrapper">
      {/* Фокус  */}
      <div className="focus-row ">
        <input
          ref={inputRef}
          type="text"
          placeholder="Кликни на кнопку «Фокус»"
          className="input"
        />
        <button onClick={focusInput} className="button">
          Фокус
        </button>
      </div>

      {/* Прокрутка */}
      <div className="scroll-container">
        <div className="scroll-placeholder">Прокрути вниз ↓</div>
        <button onClick={scrollToBlock} className="button scroll-button">
          Перейти к целевому блоку
        </button>

        <div ref={targetRef} className="target-block">
          <p className="target-title">Я — целевой блок!</p>
          <p className="target-text">Сюда мы прокрутились через ref.current.scrollIntoView()</p>
        </div>
      </div>
    </div>
  );
}
