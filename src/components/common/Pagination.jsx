// Navegación entre páginas con estilo de paginación de Bootstrap
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Con una sola página no hace falta mostrarla
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  return (
    <nav aria-label="Paginación del catálogo" className="d-flex justify-content-center mt-5">
      <ul className="pagination shadow-sm">
        <li className={`page-item ${isFirst ? 'disabled' : ''}`}>
          <button
            type="button"
            className="page-link text-dark"
            disabled={isFirst}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Anterior
          </button>
        </li>

        {pages.map((number) => {
          const isActive = number === currentPage;
          return (
            <li key={number} className={`page-item ${isActive ? 'active' : ''}`}>
              <button
                type="button"
                className={`page-link text-dark ${isActive ? 'bg-warning border-warning fw-bold' : ''}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => onPageChange(number)}
              >
                {number}
              </button>
            </li>
          );
        })}

        <li className={`page-item ${isLast ? 'disabled' : ''}`}>
          <button
            type="button"
            className="page-link text-dark"
            disabled={isLast}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
