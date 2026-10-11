import { Link } from 'react-router-dom';

// Mensaje que se muestra cuando el carrito no tiene productos
const EmptyCart = () => (
  <div className="container py-5 text-center">
    <div className="panel p-5">
      <h2 className="fw-bold mb-3 text-dark">Tu carrito está vacío</h2>
      <p className="text-muted">Todavía no agregaste productos al pedido mayorista.</p>
      <Link to="/productos" className="btn btn-warning fw-bold text-dark mt-3 px-4 shadow-sm">
        Explorar catálogo
      </Link>
    </div>
  </div>
);

export default EmptyCart;
