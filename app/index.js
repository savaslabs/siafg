import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppDataProvider } from './context/appDataContext';
import App from './App';
import * as serviceWorker from './services/serviceWorker';

render(
  <BrowserRouter>
    <AppDataProvider>
      <App />
    </AppDataProvider>
  </BrowserRouter>,
  document.getElementById('app')
);

serviceWorker.register();
