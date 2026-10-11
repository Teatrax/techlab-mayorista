// Indicador de carga con mensaje opcional
const LoadingSpinner = ({ message = 'Cargando...' }) => (
  <div className="text-center py-5">
    <div className="spinner-border text-warning" role="status">
      <span className="visually-hidden">{message}</span>
    </div>
    <p className="text-muted mt-2">{message}</p>
  </div>
);

export default LoadingSpinner;
