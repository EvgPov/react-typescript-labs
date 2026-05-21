import type { AlertProps } from '../../types';
import styles from './Alert.module.css';
import '../../styles/fonts.css';

export function Alert({ appearance = 'info', title, children, onClose }: AlertProps) {
  return (
    <div className={`${styles.alert} ${styles[appearance]}`}>
      {title && <h4 className="{styles.title}">{title}</h4>}
      <div className={styles.content}>{children}</div>
      {onClose && (
        <button className={styles.closeBtn} onClick={onClose}>
          x
        </button>
      )}
    </div>
  );
}
