
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import AppBar from './AppBar';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-16 md:ml-64">
        <AppBar />
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
