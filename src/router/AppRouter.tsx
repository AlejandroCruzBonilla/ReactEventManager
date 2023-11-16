import { DashboardPage, EventManagerPage } from '@/Pages';
import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<DashboardPage />}></Route>
      <Route path='/events' element={<EventManagerPage />}></Route>
    </Routes>
  );
};
