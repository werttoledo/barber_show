import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '/images/logo_barberia.png';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Prevenir scroll cuando el menú está abierto
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Cerrar el menú móvil al cambiar el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  return (
    <div className="landing-container">
      <header className={`nav-header ${isScrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Cut on Click Logo" />
        </Link>
        <nav className="nav-links">
          <a href="#servicios" className="nav-link">Servicios</a>
          <a href="#contacto" className="nav-link">Contacto</a>
          <Link to="/login" className="nav-link login-link">Iniciar Sesión</Link>
        </nav>
        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Menú móvil"
        >
          <i className={`fas menu-icon ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#servicios" className="nav-link" onClick={closeMobileMenu}>Servicios</a>
          <a href="#contacto" className="nav-link" onClick={closeMobileMenu}>Contacto</a>
          <Link to="/login" className="nav-link login-link" onClick={closeMobileMenu}>Iniciar Sesión</Link>
        </div>
      </header>

      <section className="hero-section">
        <div className="logo-container">
          <img src={logo} alt="Cut on Click Logo" />
        </div>
        <div className="hero-content">
          <h1>Cut on Click</h1>
          <p>Transforma tu imagen con los mejores expertos en barbería. 
             Estilo único, servicio excepcional.</p>
          <Link to="/agendar" className="cta-button">
            Reserva Ahora
          </Link>
        </div>
      </section>

      <section id="servicios" className="services-section">
        <h2>Nuestros Servicios Premium</h2>
        <div className="services-grid">
          <div className="service-card">
            <i className="fas fa-cut" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}></i>
            <h3>Corte de Cabello</h3>
            <p>Cortes modernos y clásicos adaptados a tu estilo personal, realizados por expertos barberos.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-razor" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}></i>
            <h3>Afeitado Profesional</h3>
            <p>Experimenta el ritual del afeitado tradicional con toallas calientes y productos premium.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-user-tie" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}></i>
            <h3>Arreglo de Barba</h3>
            <p>Dale forma y estilo a tu barba con técnicas especializadas y productos de alta calidad.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-spa" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}></i>
            <h3>Tratamientos Capilares</h3>
            <p>Revitaliza tu cabello con nuestros tratamientos especializados y productos exclusivos.</p>
          </div>
        </div>
      </section>

      <section id="contacto" className="contact-section">
        <h2>Encuéntranos</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <i className="fas fa-map-marker-alt" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}></i>
            <h3>Ubicación</h3>
            <p>Calle Principal #123</p>
            <p>Ciudad, Estado</p>
          </div>
          <div className="contact-info">
            <i className="fas fa-clock" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}></i>
            <h3>Horario</h3>
            <p>Lunes a Sábado</p>
            <p>9:00 AM - 8:00 PM</p>
            <p>Domingo</p>
            <p>10:00 AM - 4:00 PM</p>
          </div>
          <div className="contact-info">
            <i className="fas fa-phone-alt" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}></i>
            <h3>Contacto</h3>
            <p>Tel: (123) 456-7890</p>
            <p>info@cutonclick.com</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 