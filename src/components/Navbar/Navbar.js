import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <section className="navbar-left">
        <Link to="/" className="logo">Bieezmo</Link>
        <div className="search-container">
          <button className="searcher-image">Q</button>
          <input className="input-bizmo" type="text" placeholder="Busque con Beezmo o Bizmo" />
        </div>
      </section>
      <section className="navbar-right">
        <div className="nav-links">
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/contactanos">Contáctanos</Link>
          <Link to="/login">Iniciar sesión</Link>
          <button>Regístrate</button>
        </div>
      </section>
    </nav>
  );
}

export { Navbar };
