import React from 'react';
import { Navbar } from '../components/Navbar/Navbar.js';
import { SubNavbar } from './SubNavbar/SubNavbar.js';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />
      <SubNavbar />
      <main>{children}</main>
      {/* <Footer /> Cuando esté listo, puedes descomentar esto. */}
    </div>
  );
}

export { MainLayout };
