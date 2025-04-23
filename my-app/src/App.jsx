import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthComponent from './components/AuthComponent';
import RegisterComponent from './components/RegisterComponent';
import Dashboard from './components/Dashboard';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<AuthComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
