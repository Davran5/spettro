import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Brochure } from './sections/Brochure';
import { LanguageProvider } from './LanguageContext';
import './index.css';
import { getRouteLanguage, isBrochurePath } from './routing';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
const routeLanguage = getRouteLanguage(window.location.pathname);

root.render(
  <React.StrictMode>
    <LanguageProvider initialLanguage={routeLanguage}>
      {isBrochurePath(window.location.pathname) ? <Brochure /> : <App />}
    </LanguageProvider>
  </React.StrictMode>
);
