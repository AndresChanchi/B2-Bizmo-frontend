import React from 'react';
import { Navbar } from '../components/Navbar/Navbar.js';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> Cuando esté listo, puedes descomentar esto. */}
    </div>
  );
}

export { MainLayout };
