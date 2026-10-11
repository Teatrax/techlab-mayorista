import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const { totalCantidad } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-2 border-bottom border-secondary">
      <div className="container">
        {/* Logo con la nueva imagen */}
        <Link 
          className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4 text-warning" 
          to="/" 
          onClick={closeNavbar}
        >
          <img 
            src="/icono.svg" 
            alt="TechLab Logo" 
            className="rounded-3 border border-secondary shadow-sm"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
          <span>
            TECH<span className="text-white">LAB</span> <small className="text-white-50 fs-6 fw-normal d-none d-sm-inline">MAYORISTA</small>
          </span>
        </Link>

        {/* Carrito y Menu Hamburguesa */}
        <div className="d-flex align-items-center gap-2 order-lg-last">
          <Link 
            to="/carrito" 
            onClick={closeNavbar}
            className="btn btn-outline-warning position-relative d-flex align-items-center gap-2 px-3 py-1 text-decoration-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <span className="d-none d-md-inline fw-semibold text-warning">Carrito</span>
            <span className="badge bg-danger rounded-pill">{totalCantidad}</span>
          </Link>

          <button
            className="navbar-toggler border-secondary"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Enlaces de navegación */}
        <div className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show mt-3 mt-lg-0' : ''}`} id="navbarNav">
          <ul className="navbar-nav gap-2 gap-lg-4 text-center">
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/" onClick={closeNavbar}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/productos" onClick={closeNavbar}>
                Catalogo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;