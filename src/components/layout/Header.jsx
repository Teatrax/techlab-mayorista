import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const { totalCantidad } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-2 border-bottom border-secondary">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4 text-warning" to="/">
          <span className="badge bg-warning text-dark p-2 rounded-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l6.229 2.492a1.5 1.5 0 0 1 .914 1.39v8.368a1.5 1.5 0 0 1-.914 1.39l-6.23 2.492a1.5 1.5 0 0 1-1.114 0l-6.23-2.492A1.5 1.5 0 0 1 0 13.934V5.566a1.5 1.5 0 0 1 .914-1.39L7.443.184z"/>
            </svg>
          </span>
          <span>TECH<span className="text-white">LAB</span> <small className="text-white-50 fs-6 fw-normal d-none d-sm-inline">MAYORISTA</small></span>
        </Link>

        {/* Navegación */}
        <div className="collapse navbar-collapse show justify-content-center">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/productos">Catalogo</Link>
            </li>
          </ul>
        </div>

        {/* CartWidget */}
        <div className="d-flex align-items-center">
          <Link to="/carrito" className="btn btn-outline-warning position-relative d-flex align-items-center gap-2 px-3 py-1 text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <span className="d-none d-md-inline fw-semibold text-warning">Carrito</span>
            <span className="badge bg-danger rounded-pill">{totalCantidad}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;