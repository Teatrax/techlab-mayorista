import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

// Enlaces del menú principal
const NAV_LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/productos', label: 'Catálogo' },
];

// Barra de navegación con logo, menú y carrito
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen((open) => !open);
  const closeNavbar = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-2 border-bottom border-secondary">
      <div className="container">
        {/* Logo y nombre de la tienda */}
        <Link
          to="/"
          onClick={closeNavbar}
          className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4 text-warning"
        >
          <img
            src="/icono.svg"
            alt="Logo de TechLab"
            className="rounded-3 border border-secondary shadow-sm logo-header"
          />
          <span>
            TECH<span className="text-white">LAB</span>{' '}
            <small className="text-white-50 fs-6 fw-normal d-none d-sm-inline">MAYORISTA</small>
          </span>
        </Link>

        {/* Carrito y botón del menú en pantallas chicas */}
        <div className="d-flex align-items-center gap-2 order-lg-last">
          <CartWidget onClick={closeNavbar} />

          <button
            type="button"
            className="navbar-toggler border-secondary"
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Mostrar u ocultar el menú"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Enlaces de navegación */}
        <div
          id="navbarNav"
          className={`collapse navbar-collapse justify-content-center ${
            isOpen ? 'show mt-3 mt-lg-0' : ''
          }`}
        >
          <ul className="navbar-nav gap-2 gap-lg-4 text-center">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to} className="nav-item">
                <Link to={to} onClick={closeNavbar} className="nav-link text-white fw-semibold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
