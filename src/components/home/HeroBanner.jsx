import { Link } from 'react-router-dom';

// Banner principal de la portada con acceso al catálogo
const HeroBanner = () => (
  <div className="bg-dark text-white p-5 rounded-4 shadow text-center my-3 border border-secondary">
    <span className="badge bg-warning text-dark px-3 py-2 fw-bold text-uppercase mb-3 shadow-sm">
      Distribución oficial mayorista
    </span>
    <h1 className="display-5 fw-bold text-white mb-3">
      Abastecimiento directo para tu negocio
    </h1>
    <p className="lead text-light opacity-75 mx-auto mb-4">
      Distribución de tecnología, alimentos de consumo masivo y bebidas, con logística
      integrada para comercios y revendedores.
    </p>
    <Link to="/productos" className="btn btn-warning btn-lg fw-bold px-4 text-dark shadow-sm">
      Ver catálogo completo
    </Link>
  </div>
);

export default HeroBanner;
