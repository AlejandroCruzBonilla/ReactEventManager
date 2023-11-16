import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './scss/app.scss';
import { AppRouter } from './router/AppRouter.tsx';
import { EventsProvider } from '@/context';
import { MainLayout } from '@/Layout';
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <MainLayout>
        <EventsProvider>
          <AppRouter />
        </EventsProvider>
      </MainLayout>
    </BrowserRouter>
  </React.StrictMode>
);
