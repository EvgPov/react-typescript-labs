// Meta — тип для метаданных всей группы историй
//StoryObj — тип для отдельной истории (одного варианта компонента)
import type { Meta, StoryObj } from '@storybook/react';
// тип пропсов
import type { AlertProps } from '../../types';
// хук для интерактивной истории
import { useState } from 'react';
// компонент
import { Alert } from './Alert';

import styles from './Alert.stores.module.css';
import '../../styles/fonts.css';
// объект метаданных для группы историй
const meta: Meta<typeof Alert> = {
  title: 'UI/Alert', // путь в боковой панели Storybook
  component: Alert, // вызываемый компонент
  argTypes: {
    // список пропсов, которые можно менять в панели Controls
    appearance: { control: 'select', options: ['success', 'error', 'warning', 'info'] },
    title: { control: 'text' },
    children: { control: 'text' },
    onClose: {
      // тип action (при клике покажет лог "closed" в actions-панели)
      action: 'closed',
      table: { disable: true },
    },
  },
  parameters: {
    layout: 'centered', // центрирует компонент
  },
};

export default meta; // дефолтный экспорт, окторый ищет Stirybook как описание группы историй
// тип одного объекта истории, который знает про пропсы AlertProps
type Story = StoryObj<typeof Alert>;
// истоория с базовым информационным алертом
export const Info: Story = {
  args: {
    // начальные пропсы, которые попадут в Controls и в рендер
    appearance: 'info',
    children: 'Информационное сообщение',
  },
};
// история с успешным алертом (с заголовком и сообщением)
export const Success: Story = {
  args: {
    appearance: 'success',
    title: 'Операция выполнена успешно',
    children: 'Изменения успешно сохранены',
  },
};
// истрия с ошибкой (с заголовком и сообщеием)
export const Error: Story = {
  args: {
    appearance: 'error',
    title: 'Ошибка загрузки',
    children: 'Не удалось загрузить данные',
  },
};
// история с предупреждением и кнопкой хакрытия
export const WithTitleAndClose: Story = {
  args: {
    appearance: 'warning',
    title: 'Внимание',
    children: 'Осталось мало места на диске',
    onClose: () => alert('Предупреждение!'), // это action
  },
};

export const Interactive: Story = {
  render: (args: AlertProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(true); // алерт по умолчанию открыт
    // если алерт закрыт, то показываем кнопку, при клике на которую снова показвается алерт
    if (!isOpen) {
      return (
        <div className={styles.wrapper}>
          <button onClick={() => setIsOpen(true)} className={styles.button}>
            Показать Alert
          </button>
        </div>
      );
    }
    return (
      <Alert {...args} onClose={() => setIsOpen(false)} title="Уведомление">
        Нажмите x чтобы закрыть
      </Alert>
    );
  },
  args: {
    appearance: 'info',
  },
};
