import styles from './Input.module.css'; // импорт стилей
import '../../styles/fonts.css'; // испорт шрифтов
// импорт типа пропсов
import type { InputProps } from '../../types';

export function Input({ label, error, fullWidth = true, className = '', ...props }: InputProps) {
  return (
    // собираем className: wrapper + fullWidth если есть
    <div className={`${styles.wrapper} ${fullWidth ? styles.fullWidth : ''}`}>
      {/* если есть label, то показываем */}
      {label && <label className={styles.label}>{label}</label>}
      {/* собираем className для input + error  */}
      <input className={`${styles.input} ${error ? styles.error : ''} ${className}`} {...props} />
      {/* если error строка, то показываем span c текстом ошибки */}
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}
