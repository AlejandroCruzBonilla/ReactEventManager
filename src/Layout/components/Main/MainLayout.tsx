import { FC } from 'react';
import { NavBar } from '../Nav/NavBar';
import { MainLayoutProps } from './interfaces';

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className='container'>
        <div className='p-6'>{children}</div>
      </main>
    </>
  );
};
