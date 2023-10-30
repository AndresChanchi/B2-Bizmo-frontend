import React from 'react';
import './Login.css';
//import logo from './Iconos/logo.png';
//import arrowLeft from './Iconos/vuesax_bold_arrow_left.png';

const Login = () => {
  const imageURL = "https://via.placeholder.com/250x250";
  return (
    <div className="login-container">
      <div className="back-container">
        <div className="backSVG">
          <a href="/"><img src={imageURL} alt="Flecha hacia atrás" /></a>
        </div>
        <div className="backP"><a href="/">Regresar</a></div>
      </div>
      <form>
        <figure>
          <img src={imageURL} alt="Logo de Bizmo" />
        </figure>
        <div className="texth2">
          <h2>Iniciar sesión</h2>
        </div>
        <div className="textp">
          <p>Portal de comercio para empresas de la industria</p>
        </div>
        <label className="label">
          <i className="fa-solid fa-user"></i>
          Correo electrónico
          <input type="text" id="username" placeholder="ejemplo@mail.com" />
        </label>
        <label className="label">
          <i className="fa-solid fa-lock"></i>
          Contraseña
          <input type="password" id="password" placeholder="Escribe tu contraseña" />
        </label>
        <a href="#">Olvidé mi contraseña</a>
        <input type="button" value="iniciar sesión" id="btn" />
      </form>
      <footer>
        <p>© 2023 Bizmo, All rights reserved.</p>
      </footer>
    </div>
  );
}

export { Login };
