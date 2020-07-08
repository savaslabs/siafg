import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppDataProvider } from './context/appDataContext';
import App from './App';
// import * as serviceWorker from './serviceWorker';

render(
  <BrowserRouter>
    <AppDataProvider>
      <App />
    </AppDataProvider>
  </BrowserRouter>,
  document.getElementById('app')
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
