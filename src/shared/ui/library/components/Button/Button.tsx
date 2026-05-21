import styles from './Button.module.css';
import type { ButtonProps } from '../../types';
import '../../styles/fonts.css';

export function Button({
  children,
  appearance = 'primary',
  size = 'medium',
  disabled = false,
  isLoading = false,
  fullWidth = false,
  onClick,
  overrideClass,
  className = '',
}: ButtonProps) {
  return (
    <button
      className={[
        // styles - это объект, который возвращает CSS Modules
        styles.button, // базовый класс
        styles[appearance], // вариант оформления
        styles[size], // размер
        fullWidth && styles.fullWidth, // если fullWidth=true → добавляем класс
        (disabled || isLoading) && styles.disabled, // / если отключено или загрузка → добавляем disabled-класс
        overrideClass,
        className,
      ]
        .filter(Boolean) // убираем undefined / false / null, чтобы не было лишних пробелов
        .join(' ')} // склеиваем всё в строку через пробел
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? 'Загрузка...' : children}
    </button>
  );
}
