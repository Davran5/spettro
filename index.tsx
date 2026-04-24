import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Brochure } from './sections/Brochure';
import { LanguageProvider } from './LanguageContext';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <LanguageProvider>
      {window.location.pathname === '/brochure' ? <Brochure /> : <App />}
    </LanguageProvider>
  </React.StrictMode>
);
