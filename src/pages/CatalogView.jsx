import ErrorMessage from '../components/common/ErrorMessage';
import LoadingSpinner from '../components/common/LoadingSpinner';
import Pagination from '../components/common/Pagination';
import ItemList from '../components/products/ItemList';
import { PRODUCTS_PER_PAGE } from '../config/constants';
import { usePagination } from '../hooks/usePagination';
import { useProducts } from '../hooks/useProducts';

// Catálogo: carga los productos y los muestra paginados
const CatalogView = () => {
  const { productos, loading, error } = useProducts();
  const { pageItems, currentPage, totalPages, goToPage } = usePagination(
    productos,
    PRODUCTS_PER_PAGE
  );

  // Cambia de página y sube al inicio de la pantalla
  const handlePageChange = (number) => {
    goToPage(number);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  let content;
  if (loading) {
    content = <LoadingSpinner message="Cargando catálogo mayorista..." />;
  } else if (error) {
    content = (
      <ErrorMessage message="No pudimos cargar el catálogo. Intentá nuevamente en unos minutos." />
    );
  } else {
    content = (
      <>
        <ItemList productos={pageItems} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </>
    );
  }

  return (
    <div className="container py-4">
      <div className="panel p-4 mb-4 text-center">
        <h2 className="fw-bold text-dark mb-1">Catálogo Mayorista TechLab</h2>
        <p className="text-muted mb-0 small">
          Precios por mayor con IVA incluido para comercios y distribuidores.
        </p>
      </div>

      {content}
    </div>
  );
};

export default CatalogView;
