import { Link } from 'react-router-dom';

const HomeView = () => {
  return (
    <div className="container py-4">
      {/* Banner Principal Mayorista */}
      <div className="bg-dark text-white p-5 rounded-4 shadow text-center my-3 border border-secondary">
        <span className="badge bg-warning text-dark px-3 py-2 fw-bold text-uppercase mb-3 shadow-sm">
          Distribucion Oficial Mayorista
        </span>
        <h1 className="display-5 fw-bold text-white mb-3">
          Abastecimiento Directo para tu Negocio
        </h1>
        <p className="lead text-light opacity-75 mx-auto mb-4">
          Lideres en distribucion de tecnologia, alimentos de consumo masivo y bebidas con logistica integrada para comercios y revendedores.
        </p>
        <Link to="/productos" className="btn btn-warning btn-lg fw-bold px-4 text-dark shadow-sm">
          Ver Catalogo Completo
        </Link>
      </div>

      {/* Tarjetas informativas de beneficios */}
      <div className="row g-4 my-2">
        <div className="col-12 col-md-4">
          <div className="card h-100 p-4 border shadow-sm text-center bg-white rounded-3">
            <div className="fs-1 text-warning mb-2">📦</div>
            <h5 className="fw-bold text-dark">Precios por Bulto Cerrado</h5>
            <p className="text-secondary small mb-0">
              Descuentos por volumen y cotizaciones con IVA discriminado al instante.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card h-100 p-4 border shadow-sm text-center bg-white rounded-3">
            <div className="fs-1 text-warning mb-2">🚚</div>
            <h5 className="fw-bold text-dark">Logistica Nacional</h5>
            <p className="text-secondary small mb-0">
              Envios programados a todo el pais con seguimiento en tiempo real.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card h-100 p-4 border shadow-sm text-center bg-white rounded-3">
            <div className="fs-1 text-warning mb-2">🛡️</div>
            <h5 className="fw-bold text-dark">Garantia Oficial</h5>
            <p className="text-secondary small mb-0">
              Respaldo directo de fabrica en hardware y control de vencimiento en alimentos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;