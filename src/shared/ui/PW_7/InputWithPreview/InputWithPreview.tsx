import { useState } from 'react';
import type { InputFieldProps, PreviewProps } from '@/shared/types/types';
import './InputWithPreview.css';

function InputField({ value, onChange }: InputFieldProps) {
  return (
    <input className="input" value={value} onChange={onChange} placeholder="Введите текст ..." />
  );
}

function Preview({ text }: PreviewProps) {
  return <p className="paragraph">Вы ввели: {text || '-'}</p>;
}

export function InputWithPreview() {
  const [text, setText] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="wrapper">
      <p className="paragraph">1. Поднятие состояния вверх (Lifting State Up)</p>
      <InputField value={text} onChange={handleChange} />
      <Preview text={text} />
    </div>
  );
}
