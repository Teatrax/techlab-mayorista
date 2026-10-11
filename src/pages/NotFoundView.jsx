import { Link } from 'react-router-dom';

// Pantalla para direcciones que no existen
const NotFoundView = () => (
  <div className="container py-5 text-center">
    <div className="panel p-5">
      <h2 className="fw-bold text-dark mb-2">Página no encontrada</h2>
      <p className="text-muted">La dirección que buscás no existe o fue movida.</p>
      <Link to="/" className="btn btn-warning fw-bold text-dark mt-3 px-4 shadow-sm">
        Volver al inicio
      </Link>
    </div>
  </div>
);

export default NotFoundView;
