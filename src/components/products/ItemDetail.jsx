import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { getAvailableStock, getCartQuantity } from '../../utils/cartUtils';
import { formatPrice } from '../../utils/formatPrice';
import ImageGallery from './ImageGallery';
import ItemCount from './ItemCount';

// Ficha completa de un producto con galería y opción de compra
const ItemDetail = ({ producto }) => {
  const { carrito, addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const cantidadEnCarrito = getCartQuantity(carrito, producto.id);
  const stockDisponible = getAvailableStock(producto, carrito);

  // Agrega al carrito y muestra el aviso de confirmación
  const handleAdd = (cantidad) => {
    addToCart(producto, cantidad);
    setAdded(true);
  };

  return (
    <div className="card shadow-sm border-0 p-4">
      <div className="row g-4 align-items-center">
        {/* Galería de imágenes */}
        <div className="col-12 col-md-5">
          <ImageGallery imagenes={producto.imagenes} alt={producto.nombre} />
        </div>

        {/* Datos del producto */}
        <div className="col-12 col-md-7 text-start">
          <span className="badge bg-secondary mb-2">{producto.categoria}</span>
          <h2 className="fw-bold text-dark">{producto.nombre}</h2>
          <p className="text-muted small">Código: #{producto.id}</p>
          <h3 className="text-success fw-bold my-3">{formatPrice(producto.precio)}</h3>

          {/* Stock que todavía se puede agregar */}
          <div className="mb-3">
            <span
              className={`badge ${
                stockDisponible > 0 ? 'bg-light text-dark border' : 'bg-danger text-white'
              }`}
            >
              {stockDisponible > 0
                ? `Stock disponible: ${stockDisponible} u.`
                : 'Sin stock disponible'}
            </span>
            {cantidadEnCarrito > 0 && (
              <small className="d-block text-muted mt-1">
                (Ya tenés {cantidadEnCarrito} en tu carrito)
              </small>
            )}
          </div>

          <ItemCount stock={stockDisponible} onAdd={handleAdd} />

          {/* Accesos a otras pantallas */}
          <div className="d-flex gap-2 mt-3 flex-wrap">
            {cantidadEnCarrito > 0 && (
              <Link to="/carrito" className="btn btn-success fw-bold px-3">
                Ir al carrito ({cantidadEnCarrito})
              </Link>
            )}
            <Link to="/productos" className="btn btn-outline-secondary">
              Volver al catálogo
            </Link>
          </div>

          {added && (
            <div className="alert alert-success mt-3 py-2 small" role="status">
              ¡Producto agregado al pedido!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
