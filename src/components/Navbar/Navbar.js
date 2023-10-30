import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="logo">Bizmo</div>
      <input type="text" placeholder="Buscar productos, marcas, etc." />
      <div className="nav-links">
        <a href="#">Nosotros</a>
        <a href="#">Productos</a>
        <a href="#">Contactanos</a>
	    <a href="#"><Link to="/login">Iniciar sesión</Link></a>
        <button>Registrate</button>
      </div>
    </nav>
  );
}

export { Navbar };
