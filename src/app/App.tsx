// Practical Work 2
import { LikesButtonStaticText } from '@/shared/ui/LikeButton/LikesButtonStaticText';
import { GalleryView } from '../widgets/gallery/ui/GalleryView';

// Practical Work 3
import { LikesButtonDynamicText } from '@/shared/ui/LikeButton/LikesButtonDynamicText';
import { RegisterForm } from '@/shared/ui/RegisterForm/RegisterForm';
import { ProfileEditor } from '@/shared/ui/ProfileEditor/ProfileEditor';
import { PlaceCard } from '@/shared/ui/PlaceCard';

// Practical Work 4
import { ClockClass } from '@/shared/ui/ClockClass/ClockClass';
import { TestCleanUp } from '@/shared/ui/Clock/TestCleanUp';

import { UserProfileDemo } from '@/shared/ui/UserProfile/UserProfileDemo';
// import { UserProfile } from '@/shared/ui/UserProfile/UserProfile';
// import { UserProfileClass } from '@/shared/ui/UserProfile/UserProfileClass';
// import { UserProfileTable } from '@/shared/ui/UserProfile/UserProfileTable';
import { ExpensiveListDemo } from '@/shared/ui/ExpensiveListItem/ExpensiveListDemo';
import { ErrorBoundaryDemo } from '@/shared/ui/SimpleErrorBoundary/ErrorBoundaryDemo';
import { CounterAnimation } from '@/shared/ui/CounterAnimation/CounterAnimation';

// Practical Work 5
import { Button } from '@/shared/ui/library/components/Button/Button';
import { useState } from 'react';
import { Input } from '@/shared/ui/library/components/Input/Input';
import { Alert } from '@/shared/ui/library/components/Alert/Alert';
import styles from './App.module.css';

// Practical Work 6
import { RenderAnalysis } from '@/shared/ui/PW_6/RenderAnalysis/RenderAnalysis';
import { FormSyntheticEvents } from '@/shared/ui/PW_6/FormSyntheticEvents/FormSyntheticEvents';
import { Refs } from '@/shared/ui/PW_6/Refs/Refs';
import { ModalPortal } from '@/shared/ui/PW_6/ModalPortal/ModalPortal';
import { HOC } from '@/shared/ui/PW_6/HOC/HOC';

// Practical Work 7
import { InputWithPreview } from '@/shared/ui/PW_7/InputWithPreview/InputWithPreview';
import { ThemeProvider } from '@/shared/ui/PW_7/ThemeContext/ThemeContext';
import { ThemeSwitcher, ThemeDisplay } from '@/shared/ui/PW_7/ThemeContext/ThemeComponents';
import { TodoApp } from '@/shared/ui/PW_7/TodoReducer/TodoApp';
import { AuthProvider } from '@/shared/ui/PW_7/UserStorage/AuthContext';
import { UserProfile } from '@/shared/ui/PW_7/UserStorage/UserProfile';

import './App.css';
// Practical Work 8
// import { Routes, Route, Outlet } from 'react-router-dom';
// pages
// import { HomePage } from '@/pages/HomePage/HomePage';
// import { AboutPage } from '@/pages/AboutPage/AboutPage';
// import { ProfilePage } from '@/pages/ProfilePage/ProfilePage';
// import { UserPage } from '@/pages/UserPage/UserPage';
// import { LoginPage } from '@/pages/LoginPage/LoginPage';
// import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage';
// меню
// import { Navigation } from '@/shared/ui/PW_8/Navigation/Navigation';

// import type { formChangehandler } from '@/shared/lib/formHandlers';

//Practical work 9
import { Routes, Route } from 'react-router-dom';
import { Header } from '@/shared/ui/PW_9/Header/Header';
import { ProtectedRoute } from '@/auth/ProtectedRoute';

import { HomePage } from '@/pages/PW_9/HomePage/HomePage';
import { LoginPage } from '@/pages/PW_9/LoginPage/LoginPage';
import { ProfilePage } from '@/pages/PW_9/ProfilePage/ProfilePage';
import { CoursesPage } from '@/pages/PW_9/CoursesPage/CoursesPage';
import { ManageCoursesPage } from '@/pages/PW_9/ManageCoursesPage/ManageCoursesPage';
import { AdminPage } from '@/pages/PW_9/AdminPage/AdminPage';
import { NotFoundPage } from '@/pages/PW_9/NotFoundPage/NotFoundPage';

export function App_pract2() {
  return (
    <div className="app">
      <h1>Карелия и Соловецкие острова</h1>
      <GalleryView />
    </div>
  );
}

export function App_pract3() {
  return (
    <div className="app">
      <h1>Practical work №3</h1>
      {/* LikeButton со счетчиком лайков */}
      <LikesButtonStaticText />
      <hr />
      {/* LikeButton  с useEffect */}
      <LikesButtonDynamicText />
      <hr />
      {/*  Фоорма с валидацией email  и с кнопкой установки фокуса*/}
      <RegisterForm />
      <hr />
      {/* Компонент с  ProfileEditor */}
      <ProfileEditor />
      <hr />
      {/* кастомный хук useVisible */}
      <PlaceCard />
    </div>
  );
}

export function App_pract4() {
  return (
    <div className="app">
      <h1>Practical work №4</h1>
      {/* ClockClass Текущее время (классовый компонент) */}
      <ClockClass />
      {/* ClockClass Текущее время (функциональный компонент) */}
      <TestCleanUp />
      {/* UserProfile Данные пользователя */}
      <UserProfileDemo />
      {/* ExpensiveListItem */}
      <ExpensiveListDemo />
      {/* SimpleErrorBoundary */}
      <ErrorBoundaryDemo />
      {/* usePrevious */}
      <CounterAnimation />
    </div>
  );
}

export function App_pract5() {
  const [count, setCount] = useState(0);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | undefined>(undefined);

  const [visibleAlert, setVisibleAlert] = useState<string | null>(null);

  const showAlert = (type: string) => setVisibleAlert(type);
  const hideAlert = () => setVisibleAlert(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value.trim(); // берем новое значение из события
    setEmail(newEmail); // обновляем состояние value
    //сбрасываем ошибку
    let error: string | undefined = undefined;
    // валидация
    // если длина есть, но меньше трех символоxв

    if (newEmail.length === 0) {
      error = 'Обязательное поле';
    } else if (newEmail.length < 6) {
      error = 'Слишком короткий email (минимум 6 символов)';
    } else if (!newEmail.includes('@')) {
      error = 'Email должен содержать символ @';
    } else if (newEmail.indexOf('@') === newEmail.length - 1) {
      error = 'После @ должен быть домен';
    } else if (!newEmail.includes('.', newEmail.indexOf('@'))) {
      error = 'После @ должна быть точка (домен)';
    } else if (newEmail.lastIndexOf('.') === newEmail.length - 1) {
      error = 'После точки должен быть домен верхнего уровня (.com, .ru и т.д.)';
    } else if (newEmail.split('@').length > 2) {
      error = 'Недопустимо несколько символов @';
    }
    setEmailError(error);
  };
  return (
    <div className="app-container">
      <div className="group">
        {/* Buttons */}
        <Button
          appearance="primary"
          size="xl"
          fullWidth={false}
          isLoading={false}
          onClick={() => setCount(count + 1)}
        >
          Clicked: {count}
        </Button>
        <div></div>
        <Button
          appearance="secondary"
          size="xl"
          fullWidth={false}
          isLoading={true}
          onClick={() => setCount(count + 1)}
        >
          Clicked: {count}
        </Button>
        <Button
          appearance="outline"
          size="medium"
          fullWidth={true}
          disabled={true}
          onClick={() => setCount(count + 1)}
        >
          Clicked: {count}
        </Button>
      </div>
      {/* Input */}
      <div className="group">
        <Input
          label="Email"
          type="email"
          placeholder="example@domain.com"
          value={email}
          onChange={handleChange}
          error={emailError}
          fullWidth={false}
        ></Input>
      </div>
      {/* Alert */}
      <div className="group">
        <Button
          className={styles.buttonAlert}
          appearance="info"
          size="medium"
          onClick={() => showAlert('info')}
        >
          Показать alert Info
        </Button>
        <Button
          className={styles.buttonAlert}
          appearance="success"
          size="medium"
          onClick={() => showAlert('success')}
        >
          Показать alert Success
        </Button>
        <Button
          className={styles.buttonAlert}
          appearance="warning"
          size="medium"
          onClick={() => showAlert('warning')}
        >
          Показать alert Warning
        </Button>
        <Button
          className={styles.buttonAlert}
          appearance="danger"
          size="medium"
          onClick={() => showAlert('error')}
        >
          Показать alert Error
        </Button>
      </div>
      {visibleAlert && (
        <Alert
          // appearance={visibleAlert as any}
          title={
            visibleAlert == 'success'
              ? 'Успех'
              : visibleAlert === 'error'
                ? 'Ошибка'
                : visibleAlert === 'warning'
                  ? 'Внимание'
                  : ''
          }
          onClose={hideAlert}
        >
          {visibleAlert === 'info' && 'Это информационное сообщение'}
          {visibleAlert === 'success' && 'Операция выполнена успешно!'}
          {visibleAlert === 'warning' && 'У вас мало места на диске'}
          {visibleAlert === 'error' && 'Произошла ошибка при загрузке данных'}
        </Alert>
      )}
    </div>
  );
}

export function App_pract6() {
  return (
    <div className="app">
      <h1>Practical work №6</h1>
      {/* Задание 1. Counter + анализ рендеров */}
      <RenderAnalysis />
      {/* Форма и синтетические события */}
      <FormSyntheticEvents />
      {/* Задание 3. Ref на практике */}
      <Refs />
      {/* Задание 4. Модальное окно через портал*/}
      <ModalPortal />
      {/* Задание 5. HOC*/}
      <HOC />
    </div>
  );
}

export function App_pract7() {
  return (
    <div className="app">
      <h1>Practical work №7</h1>
      {/* Задание 1. Поднятие состояния вверх */}
      <InputWithPreview />
      {/* Задание 2. Context для темы */}
      <ThemeProvider>
        <div className="wrapper">
          <p className="paragraph">2. Context для темы</p>
          <ThemeSwitcher />
          <ThemeDisplay />
        </div>
      </ThemeProvider>
      {/* Задание 3. useReducer для списка задач */}
      <TodoApp />
      {/* Задание 4. Сервис для хранения пользователя */}
      <AuthProvider>
        <UserProfile />
      </AuthProvider>
    </div>
  );
}

// function Layout() {
//   return (
//     <div>
//       <header>
//         <h1>Мое приложение (header)</h1>
//         <Navigation />
//       </header>

//       <main className={styles.main}>
//         <Outlet />
//       </main>

//       <footer>
//         <p className={styles.footer}>2026 все права защищены (footer)</p>
//       </footer>
//     </div>
//   );
// }
// export function App_pract8() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />} />
//         <Route path="about" element={<AboutPage />} />
//         <Route path="profile" element={<ProfilePage />} />
//         <Route path="login" element={<LoginPage />} />
//         <Route path="users/:id" element={<UserPage />} />
//         <Route path="*" element={<NotFoundPage />} />
//       </Route>
//     </Routes>
//   );
// }
export function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses"
            element={
              <ProtectedRoute allowedRoles={['role_student', 'role_teacher', 'role_admin']}>
                <CoursesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/manage"
            element={
              <ProtectedRoute allowedRoles={['role_teacher', 'role_admin']}>
                <ManageCoursesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin"
            element={
              <ProtectedRoute allowedRoles={['role_admin']}>
                <AdminPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}
export default App;
