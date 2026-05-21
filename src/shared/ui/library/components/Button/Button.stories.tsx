// Meta - тип для метаданных компонента
// StoryObj - тип для отдельной истории
import type { Meta, StoryObj } from '@storybook/react';
// тип пропсов
import type { ButtonProps } from '../../types';
// для интерактивной истории (счетчик кликов)
import { useState } from 'react';
// компонент
import { Button } from './Button';
// объект метаданных для всей группы историй (вариантов Button)
const meta: Meta<typeof Button> = {
  title: 'UI/Button', // путь в боковой панели Storybook (группа UI → Button)
  component: Button,
  argTypes: {
    // пропсы, которые можно менять в панели Controls справа
    appearance: {
      control: 'select', // выпадающий список
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'outline'],
    },
    size: {
      control: 'radio', // радиокнопки с пятью размерами
      options: ['xs', 'small', 'medium', 'large', 'xl'],
    },
    // чекбоксы (boolean)
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    children: { control: 'text' }, // текстовое поле (можно изменить текст кнопки)
  },
};
// экспорт как дефолтный экспорт — Storybook именно его ищет как описание группы.
export default meta;
// тип для всех историй
type Story = StoryObj<typeof Button>;
// кнопка в варианте primary
export const Primary: Story = {
  args: {
    // начальные пропсы, которые попадут в Controls и в рендер
    children: 'Primary Button',
    appearance: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    appearance: 'secondary',
  },
};

export const Success: Story = {
  args: {
    children: 'Success Button',
    appearance: 'success',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    appearance: 'danger',
  },
};

export const Info: Story = {
  args: {
    children: 'Info Button',
    appearance: 'info',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning Button',
    appearance: 'warning',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    appearance: 'outline',
  },
};
// кнопка в отключенном состоянии (disabled=true)
export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};
// кнопка в состоянии загрузки (isLoading=true)
export const Loading: Story = {
  args: {
    children: 'Submit',
    isLoading: true,
  },
};

export const Interactive: Story = {
  render: (args: ButtonProps) => {
    const [count, setCount] = useState(0);
    // отключаем ESLint, потому что хук вызывается внутри render-функции
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (
      <Button {...args} onClick={() => setCount(count + 1)}>
        Clicked: {count}
      </Button>
    );
  },
  // начальные значения
  args: {
    appearance: 'primary',
    children: 'Click me',
  },
};
