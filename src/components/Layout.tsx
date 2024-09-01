// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import NavBar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900  text-white">
      <NavBar/>
      <main className="container mx-auto px-36 py-8">
        <div className="flex flex-col gap-x-7 md:flex-row">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;