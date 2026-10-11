import { Link, useParams } from 'react-router-dom';
import ErrorMessage from '../components/common/ErrorMessage';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ItemDetail from '../components/products/ItemDetail';
import { useProduct } from '../hooks/useProduct';

// Detalle de producto: busca el producto de la URL y muestra su ficha
const ProductDetailView = () => {
  const { id } = useParams();
  const { producto, loading, error } = useProduct(id);

  let content;
  if (loading) {
    content = <LoadingSpinner message="Cargando detalle del producto..." />;
  } else if (error) {
    content = (
      <ErrorMessage message="No pudimos cargar el producto. Intentá nuevamente en unos minutos." />
    );
  } else if (!producto) {
    content = (
      <div className="panel text-center py-5 p-4">
        <h4 className="text-dark fw-bold">Producto no encontrado</h4>
        <p className="text-muted">El código solicitado no corresponde a un artículo activo.</p>
        <Link to="/productos" className="btn btn-warning fw-bold text-dark mt-2">
          Volver al catálogo
        </Link>
      </div>
    );
  } else {
    // La key reinicia la ficha al cambiar de producto
    content = <ItemDetail key={producto.id} producto={producto} />;
  }

  return <div className="container py-4">{content}</div>;
};

export default ProductDetailView;
