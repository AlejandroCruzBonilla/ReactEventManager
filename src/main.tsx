import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/store';

import { AppRouter } from './router/AppRouter.tsx';
import { EventsProvider } from '@/context';
import { MainLayout } from '@/Layout';
import { CssBaseline } from '@mui/material';
import './scss/app.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <EventsProvider>
        <CssBaseline />
        <BrowserRouter>
          <MainLayout>
            <AppRouter />
          </MainLayout>
        </BrowserRouter>
      </EventsProvider>
    </Provider>
  </React.StrictMode>
);
