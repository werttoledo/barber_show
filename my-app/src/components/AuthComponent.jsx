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

          {errorMsg && <p className="error-message" style={{ color: 'red', marginTop: '1rem', fontSize: '0.9rem', textAlign: 'center' }}>{errorMsg}</p>}

          <Link to="/register" className="register-link">
            ¿No tienes cuenta? Regístrate
          </Link>

          <div className="divider"></div>

          <div className="social-login">
            <button type="button" className="social-button google">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#DB4437">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
              </svg>
            </button>
            <button type="button" className="social-button facebook">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#1877F2">
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthComponent;