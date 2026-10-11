// Aviso de error para mostrar cuando falla una carga de datos
const ErrorMessage = ({ message }) => (
  <div className="alert alert-danger text-center py-4" role="alert">
    <h5 className="fw-bold mb-1">Ocurrió un problema</h5>
    <p className="mb-0">{message}</p>
  </div>
);

export default ErrorMessage;
