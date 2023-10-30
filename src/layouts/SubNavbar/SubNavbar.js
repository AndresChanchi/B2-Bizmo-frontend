import React from 'react';
import './SubNavbar.css';
import { Link } from 'react-router-dom';

const SubNavbar = () => {
  return (
    <div className="sub-navbar-container">
      <div className="sub-nav-links">
        <Link to="#">Categorias</Link>
        <Link to="#">Centro de Ayuda</Link>
        <Link to="#">Noticias</Link>
        <Link to="#">Eventos</Link>
      </div>
    </div>
  );
}

export { SubNavbar };
