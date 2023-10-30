import React from 'react';
import { MainLayout } from '../../layouts/MainLayout.js';
import { Navbar } from '../../components/Navbar/Navbar.js';
import './HomePage.css';

const HomePage = () => {
  
    const imageUrl = "https://via.placeholder.com/250x250";
    return (
        <MainLayout>
            <Navbar />
        
            <main className="homepage-main">
                <h1>This is a hero text for the hero section</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Rhoncus nibh vel sed maecenas volutpat orcil vell enim. Euismod pellentesque autcor consequet neque.</p>
                <div className="cta-buttons">
                    <button>Registrate</button>
                    <button>Recibir asesoria</button>
                </div>
            </main>
        
            {/* Aquí se debería agregar más imagenes o las otras cosas */}
            <div className="floating-chat">
                <button>Hablemos!</button>
            </div>

            <div className="hero-images">
                <img src={imageUrl} alt="Hero Image 1" />
                <img src={imageUrl} alt="Hero Image 2" />
                {/* Agrega más imágenes según lo necesites */}
            </div>
        </MainLayout>
    );
}

export { HomePage };

