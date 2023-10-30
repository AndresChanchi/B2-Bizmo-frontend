import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="logo">Bizmo</div>
      <input type="text" placeholder="Buscar productos, marcas, etc." />
      <div className="nav-links">
        <a href="#">Nosotros</a>
        <a href="#">Productos</a>
        <a href="#">Contactanos</a>
        <a href="#">Iniciar sesión</a>
        <button>Registrate</button>
      </div>
    </nav>
  );
}

export { Navbar };
