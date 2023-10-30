import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <div className="logo">🅱 Bizmo</div>
        <div className="search-bar">
          <input type="text" placeholder="Buscar productos, marcas, etc." />
        </div>
        <nav>
          <a href="#">Nosotros</a>
          <a href="#">Productos</a>
          <a href="#">Contactanos</a>
          <a href="#">Iniciar sesión</a>
          <button>Registrate</button>
        </nav>
      </header>

      <main className="homepage-main">
        <h1>This is a hero text for the hero section</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Rhoncus nibh vel sed maecenas volutpat orcil vell enim. Euismod pellentesque autcor consequet neque.</p>
        <div className="cta-buttons">
          <button>Registrate</button>
          <button>Recibir asesoria</button>
        </div>
      </main>

      <div className="floating-chat">
        <button>Hablemos!</button>
      </div>
    </div>
  );
}

export { HomePage };
