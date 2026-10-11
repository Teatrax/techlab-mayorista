// Tarjeta informativa con ícono, título y descripción de un beneficio
const BenefitCard = ({ icon, titulo, descripcion }) => (
  <div className="col-12 col-md-4">
    <div className="card h-100 p-4 shadow-sm text-center">
      <div className="fs-1 mb-2" aria-hidden="true">
        {icon}
      </div>
      <h5 className="fw-bold text-dark">{titulo}</h5>
      <p className="text-secondary small mb-0">{descripcion}</p>
    </div>
  </div>
);

export default BenefitCard;
