// тип для метаданных всей группы историй
// тип для отдельной истории
import type { Meta, StoryObj } from '@storybook/react';
// пропсы
import type { InputProps } from '../../types';
// для интерактивной истории
import { useState } from 'react';
// компонент
import { Input } from './Input';
// объект метаданных для всей гшруппы историй

import styles from './Input.stories.module.css';

const meta: Meta<typeof Input> = {
  title: 'UI/Input', // путь в бокой панели Storybook (UI->Input)
  component: Input, // компонент, который показываем
  argTypes: {
    // пропсы, которые можно менять в панели Controls справа
    label: { control: 'text' }, // текстовые поля
    error: { control: 'text' },
    placeholder: { control: 'text' },
    fullWidth: { control: 'boolean' }, // чекбокс
    type: {
      // выпадающий список с вариантами типов интпутов
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel'],
    },
    className: { table: { disable: true } },
  },
  parameters: {
    layout: 'centered', // центрирует компонент
  },
};

export default meta; // дефолтный экспорт (Storybook ищет егор как описание группы)
// тип одного объекта истории, который знает про пропсы InputProps
type Story = StoryObj<typeof Input>;
//история с базовым инпутом без лишнего
export const Default: Story = {
  args: {
    // пропсы, которые попадут в Controls и в рендер
    placeholder: 'Введите текст ...',
    fullWidth: true,
  },
};
// история с интпутом и подписью сверху
export const Withlabel: Story = {
  args: {
    label: 'Имя пользователя',
    placeholder: 'Иванов И. И.',
    fullWidth: true,
  },
};
// история с состоянием ошибки
export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'example@domain.com',
    error: 'Некорректный адрес электронной почты',
    fullWidth: true,
  },
};

export const Interactive: Story = {
  render: (args: InputProps) => {
    // render вместо args
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(''); // состояние для значения инпута
    //состояние для ошибки
    const [error, setError] = useState<string | undefined>(undefined);
    // ручна на изменение в инпут

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value; // берем новое значение из события
      setValue(newValue); // обновляем состояние value
      // валидация
      // если длина есть, но меньше трех символов
      if (newValue.length > 0 && newValue.length < 3) {
        setError('Слишком короткое значение');
        // ечли собака есть, но нет точки
      } else if (newValue.includes('@') && !newValue.includes('.')) {
        setError('Некорректный email');
        // иначе ошибки нет
      } else {
        setError(undefined);
      }
    };

    return (
      <div className={styles.wrapper}>
        <Input
          {...args} // распаковка объекта с пропсами
          value={value} // текущее значение инпута из useState
          onChange={handleChange} // обработчки
          error={error} // переадем состояние ошибки из useState
          placeholder="example@domain.com'" // переопрееляем placeholder
          label="Адрес эл. почты с валидацией" // перелпределяем label
          fullWidth //  fullWidth=true
        />
        {/* блок с текущим значением */}
        <div className={styles.current_value}>
          Текущее значение: <strong>{value || '-'}</strong>
        </div>
      </div>
    );
  },
  args: {
    fullWidth: true,
  },
};
