import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

// Botón del carrito con la cantidad de unidades agregadas
const CartWidget = ({ onClick }) => {
  const { totalCantidad } = useCart();

  return (
    <Link
      to="/carrito"
      onClick={onClick}
      aria-label={`Carrito con ${totalCantidad} unidades`}
      className="btn btn-outline-warning d-flex align-items-center gap-2 px-3 py-1 text-decoration-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5z" />
      </svg>
      <span className="d-none d-md-inline fw-semibold">Carrito</span>
      <span className="badge bg-danger rounded-pill">{totalCantidad}</span>
    </Link>
  );
};

export default CartWidget;
