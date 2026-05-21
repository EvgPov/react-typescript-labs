import { useState, useRef, useEffect } from 'react';
// типы
import type { RegFormType } from '@/shared/types/types';
// обработчики событий
import { formChangehandler } from '../../lib/formHandlers';
import { focusEmail } from '@/shared/lib/focusEmailCreator';
// стили
import './RegisterForm.css';
import '../LikeButton/LikesButton.css';

export function RegisterForm() {
  // состояние формы в одном объекте. При каждом измпнении любго поля обновляется весь объект
  const [form, setForm] = useState<RegFormType>({ email: '', password: '' });
  // проверка валидности
  const isValid = form.email && form.email.includes('@');

  // ссылка на реальный DOM-элемент - поля email - (для управления фокусом)
  const emailInputRef = useRef<HTMLInputElement>(null);

  // ref для хранения предыдущего значения email
  const prevEmailRef = useRef<string>('');

  // обновление prevEmailRef после каждого рендера, в котором email обновился
  // prevEmailRef.current всегда содержит значение с предыдущего рендера
  useEffect(() => {
    prevEmailRef.current = form.email;
  }, [form.email]);

  // универсальный обработчик onChange для все полей формы
  const handleChange = formChangehandler<RegFormType>(setForm);
  return (
    <div className="wrapper">
      <form className="form">
        <label htmlFor="email" className="label">
          Email:
          <input
            ref={emailInputRef}
            className="field"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@domain.ru"
          />
        </label>
        {!isValid && <span className="error-message ">Email должен содержать символ @</span>}
        <label htmlFor="password" className="label">
          Password:
          <input
            type="password"
            name="password"
            className="field"
            value={form.password}
            onChange={handleChange}
          />
        </label>
        <button
          className="button"
          onClick={(event) => {
            focusEmail(event, emailInputRef);
          }}
        >
          Фокус на email
        </button>
      </form>
      <p className="current-values">
        email: {form.email} <br />
        password: {form.password}
      </p>
      <div>
        <p>
          Было: {prevEmailRef.current || 'еще не было'} → Стало:{' '}
          <strong>{form.email || 'пусто'} </strong>
        </p>
      </div>
    </div>
  );
}
