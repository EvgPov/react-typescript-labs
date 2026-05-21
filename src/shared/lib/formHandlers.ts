import type { ChangeEvent } from 'react';
import type { RegFormType, ProfileType } from '../types/types';

// универсальный обработчик измнений формы
export function formChangehandler<T extends RegFormType | ProfileType>(
  setForm: React.Dispatch<React.SetStateAction<T>>, // функция SetState из useState
) {
  // вохвращаем функцию-обработчик, которую будем вешать на onChange
  return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // из события берем name и value
    const { name, value } = event.target;
    // обновляем состояние через функциолнальное обновление
    // берем все предыдущие поля
    // перезаписываем только то поле, которое изменилось
    setForm((prev) => ({ ...prev, [name]: value }));
  };
}
