import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import '../styles/Register.css';

const RegisterComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Usuario');
  const [barberCode, setBarberCode] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            role,
            barber_code: role === 'Barbero' ? barberCode : null,
          },
        },
      });

      if (error) {
        setMessage(error.message);
        setMessageType('error');
      } else {
        setMessage('✅ Registro exitoso! Revisa tu correo para confirmar tu cuenta.');
        setMessageType('success');
        setTimeout(() => navigate('/'), 3000);
      }
    } catch (err) {
      setMessage('Error en el registro. Por favor, intenta nuevamente.');
      setMessageType('error');
    }
  };

  return (
    <div className="register-container">
      <div className="register-form-container">
        <div className="register-header">
          <div className="CONT-IMG">
            <img
              src="/images/logo_barberia.png"
              alt="Logo Barbería"
              className="register-logo"
            />
          </div>
          <h1>Registro</h1>
          <p>Únete a nuestra comunidad de barbería</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="register-input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="correo@ejemplo.com"
              required
            />
          </div>

          <div className="register-input-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <div className="register-input-group">
            <label>Rol</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="role-select"
            >
              <option value="Usuario">👤 Usuario</option>
              <option value="Barbero">✂️ Barbero</option>
            </select>
          </div>

          {role === 'Barbero' && (
            <div className="register-input-group">
              <label>Código Barbería</label>
              <input
                type="text"
                value={barberCode}
                onChange={(e) => setBarberCode(e.target.value)}
                placeholder="Ej: BARB-123"
                required
              />
            </div>
          )}

          <button type="submit" className="register-button">
            Registrarse
          </button>

          {message && (
            <div className={`register-message ${messageType}`}>
              {message}
            </div>
          )}
        </form>

        <Link to="/" className="register-back-button">
          Volver al Login
        </Link>
      </div>
    </div>
  );
};

export default RegisterComponent;
