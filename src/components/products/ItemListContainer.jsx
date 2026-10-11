import { useState, useEffect } from 'react';
import Item from './Item';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Estados de paginación
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 8; // Muestra 8 productos por vista

  useEffect(() => {
    fetch('/productos.json')
      .then((respuesta) => respuesta.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al cargar productos:", error))
      .finally(() => setCargando(false));
  }, []);

  // Cálculo de indices para el recorte de elementos
  const ultimoIndice = paginaActual * productosPorPagina;
  const primerIndice = ultimoIndice - productosPorPagina;
  const productosPaginados = productos.slice(primerIndice, ultimoIndice);

  // Cantidad total de paginas necesarias
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);

  const cambiarPagina = (numero) => {
    setPaginaActual(numero);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Sube suavemente al cambiar de pagina
  };

  return (
    <div className="container py-4">
      <div className="bg-white p-4 rounded-3 shadow-sm mb-4 border text-center">
        <h2 className="fw-bold text-dark mb-1">{greeting}</h2>
        <p className="text-muted mb-0 small">
          Precios por mayor con IVA discriminado para comercios y distribuidores.
        </p>
      </div>

      {cargando ? (
        <div className="text-center py-5">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="text-muted mt-2">Cargando catalogo mayorista...</p>
        </div>
      ) : (
        <>
          <div className="row g-4 justify-content-center">
            {productosPaginados.map((prod) => (
              <Item key={prod.id} producto={prod} />
            ))}
          </div>

          {/* Navegacion de Paginacion Bootstrap */}
          {totalPaginas > 1 && (
            <nav className="d-flex justify-content-center mt-5">
              <ul className="pagination shadow-sm">
                <li className={`page-item ${paginaActual === 1 ? 'disabled' : ''}`}>
                  <button 
                    className="page-link text-dark" 
                    onClick={() => cambiarPagina(paginaActual - 1)}
                  >
                    Anterior
                  </button>
                </li>

                {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
                  <li 
                    key={num} 
                    className={`page-item ${paginaActual === num ? 'active' : ''}`}
                  >
                    <button 
                      className={`page-link ${paginaActual === num ? 'bg-warning border-warning text-dark fw-bold' : 'text-dark'}`}
                      onClick={() => cambiarPagina(num)}
                    >
                      {num}
                    </button>
                  </li>
                ))}

                <li className={`page-item ${paginaActual === totalPaginas ? 'disabled' : ''}`}>
                  <button 
                    className="page-link text-dark" 
                    onClick={() => cambiarPagina(paginaActual + 1)}
                  >
                    Siguiente
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </>
      )}
    </div>
  );
};

export default ItemListContainer;