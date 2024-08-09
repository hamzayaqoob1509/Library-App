import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="bg-blue-600 text-white p-4">My App Header</header>
      <main className="p-6">{children}</main>
      <footer className="bg-blue-600 text-white p-4">My App Footer</footer>
    </div>
  );
};

export default MainLayout;
