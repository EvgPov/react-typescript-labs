import styles from './ManageCoursesPage.module.css';

export function ManageCoursesPage() {
  return (
    <div className={styles.div}>
      <h1>Управление курсами</h1>
      <p>Доступно только преподавателям и администраторам</p>
    </div>
  );
}
