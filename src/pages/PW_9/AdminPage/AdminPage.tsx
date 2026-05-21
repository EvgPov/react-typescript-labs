import styles from './AdminPage.module.css';

export function AdminPage() {
  return (
    <div className={styles.div}>
      <h1>Административная панель</h1>
      <p>Только для администратора</p>
    </div>
  );
}
