import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import '../styles/Auth.css';

const AuthComponent = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: username,
      password,
    });

    if (error) {
      setErrorMsg('Correo o contraseña incorrectos.');
      console.error('Error:', error.message);
    } else {
      console.log('Inicio de sesión exitoso:', data);
      navigate('/agendar'); // ✅ Redirección al componente BookingComponent
    }
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
              placeholder="correo@ejemplo.com"
              required
            />
          </div>

          <div className="input-group">
            <label>contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            INICIAR SESIÓN
          </button>

          {errorMsg && <p className="error-message">{errorMsg}</p>}

          <Link to="/register" className="register-link">
            ¿No tienes cuenta? Regístrate
          </Link>

          <div className="divider"></div>

          <div className="social-login">
            {/* Botones sociales */}
            <button type="button" className="social-button google">
              {/* SVG Google */}
              <svg viewBox="0 0 24 24"> ... </svg>
            </button>
            <button type="button" className="social-button facebook">
              {/* SVG Facebook */}
              <svg viewBox="0 0 24 24"> ... </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthComponent;