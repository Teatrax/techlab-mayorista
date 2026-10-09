import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('/productos.json')
      .then((res) => res.json())
      .then((data) => {
        const encontrado = data.find((p) => p.id === parseInt(id));
        setProducto(encontrado);
      })
      .catch((err) => console.error("Error al cargar producto:", err))
      .finally(() => setCargando(false));
  }, [id]);

  return (
    <div className="container py-4">
      {cargando ? (
        <div className="text-center py-5">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-2 text-muted">Cargando detalle del producto...</p>
        </div>
      ) : producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <div className="text-center py-5 bg-white rounded-3 shadow-sm border p-4">
          <h4 className="text-dark fw-bold">Producto no encontrado</h4>
          <p className="text-muted">El código solicitado no corresponde a un artículo activo.</p>
          <Link to="/productos" className="btn btn-warning fw-bold text-dark mt-2">
            Volver al catalogo
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;