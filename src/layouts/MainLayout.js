import React from 'react';
import { Navbar } from '../components/Navbar/Navbar.js';
import { SubNavbar } from './SubNavbar/SubNavbar.js';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <header>
        <div className="container">
        <Navbar />
        <SubNavbar />
      	</div>
      </header>
      <main>{children}</main>
      {/* <Footer /> Cuando esté listo, puedes descomentar esto. */}
    </div>
  );
}
{/* Debo modificar este archivo: Recuerdo del yo del futuro, recuerde modificar div classname container, discutirlo si dejarlo en navbar, homepage, etc. Es bueno a nivel semantico?*/}
export { MainLayout };
