import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import '@/index.css';
import App from '@/app/App.tsx';
import { AuthProvider } from './auth/AuthContext';

// createRoot которая создает корневой (root) объект для рендеринга React-приложения
// Она позволяет React управлять DOM-контейнером и рендерить в него React-компоненты
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
