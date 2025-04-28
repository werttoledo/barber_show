import React, { useState } from 'react';
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
      <div className="logo-container">
      <img src="/images/logo_cutonclick.png" alt="Cut on Click Logo" />
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
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
          <label>passwor</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="passwor"
          />
        </div>

        <button type="submit" className="submit-button">
          INICIAR SESIÓN
        </button>

        <a href="/register" className="register-link">
          Register
        </a>

        <div className="social-login">
          <button type="button" className="social-button" onClick={() => console.log('Google login')}>
            <img src="https://www.google.com/favicon.ico" alt="Google" />
          </button>
          <button type="button" className="social-button" onClick={() => console.log('Facebook login')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127c-.82-.088-1.643-.13-2.467-.127-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthComponent; 