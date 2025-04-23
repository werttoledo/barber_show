import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Auth.css';

const AuthComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación aquí
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <img
          src="/images/logo_barberia.png"
          alt="Cut on Click Logo"
          className="auth-logo"
        />

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <label>usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="user"
            />
          </div>

          <div className="input-group">
            <label>contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </div>

          <button type="submit" className="submit-button">
            INICIAR SESIÓN
          </button>

          {/* ← Link justo bajo el botón */}
          <Link to="/register" className="register-link">
            ¿No tienes cuenta? Regístrate
          </Link>

          {/* ← Línea separadora */}
          <div className="divider"></div>

          {/* ← Botones sociales */}
          <div className="social-login">
            <button type="button" className="social-button google">
              {/* SVG Google */}
              <svg viewBox="0 0 24 24">
                <path
                  d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"
                  fill="#DB4437"
                />
              </svg>
            </button>
            <button type="button" className="social-button facebook">
              {/* SVG Facebook */}
              <svg viewBox="0 0 24 24">
                <path
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
                  fill="#1877F2"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthComponent;
