import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { PopupProvider } from './context/PopupContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PopupProvider>
       <App />
    </PopupProvider>
  </StrictMode>
);
