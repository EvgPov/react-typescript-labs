import styles from './AboutPage.module.css';
export function AboutPage() {
  return (
    <div className={styles.wrapper_about}>
      <h2>О нас</h2>
      <p>
        Добро пожаловать на страницу "О нас"! Это учебное React-приложение, демонстрирующее работу с
        React Router.
      </p>
      <h2>Наши возможности</h2>
      <ul className={styles.ul}>
        <li>Клиентская маршрутизация</li>
        <li>Вложенные маршруты и Layout</li>
        <li>Динамические параметры (/:id)</li>
        <li>Программная навигация</li>
        <li>Типизация маршрутов</li>
      </ul>
    </div>
  );
}
