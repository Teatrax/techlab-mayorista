import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ producto }) => {
  // Soporta tanto array "imagenes" como el formato anterior "img"
  const listaImagenes = producto.imagenes || [producto.img];
  const [imagenSeleccionada, setImagenSeleccionada] = useState(listaImagenes[0]);
  
  const [agregado, setAgregado] = useState(false);
  const { carrito, addToCart } = useCart();

  const itemEnCarrito = carrito.find((item) => item.id === producto.id);
  const cantidadEnCarrito = itemEnCarrito ? itemEnCarrito.cantidad : 0;
  const stockDisponible = producto.stock - cantidadEnCarrito;

  const handleOnAdd = (cantidad) => {
    addToCart(producto, cantidad);
    setAgregado(true);
  };

  return (
    <div className="card shadow-sm border-0 p-4 bg-white rounded-3">
      <div className="row g-4 align-items-center">
        {/* Columna de Galería */}
        <div className="col-12 col-md-5">
          {/* Imagen Principal */}
          <div className="ratio ratio-4x3 bg-light rounded-3 overflow-hidden border mb-2">
            <img 
              src={imagenSeleccionada} 
              alt={producto.nombre} 
              className="w-100 h-100 object-fit-cover"
            />
          </div>

          {/* Miniaturas navegables */}
          {listaImagenes.length > 1 && (
            <div className="d-flex gap-2 justify-content-center">
              {listaImagenes.map((foto, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setImagenSeleccionada(foto)}
                  className={`btn p-0 border rounded-2 overflow-hidden ${imagenSeleccionada === foto ? 'border-warning border-2 shadow-sm' : 'border-light'}`}
                  style={{ width: "60px", height: "60px" }}
                >
                  <img src={foto} alt="" className="w-100 h-100 object-fit-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Columna de Datos */}
        <div className="col-12 col-md-7 text-start">
          <span className="badge bg-secondary mb-2">{producto.categoria}</span>
          <h2 className="fw-bold text-dark">{producto.nombre}</h2>
          <p className="text-muted small">Código: #{producto.id}</p>
          <h3 className="text-success fw-bold my-3">
            ${producto.precio.toLocaleString('es-AR')}
          </h3>

          <div className="mb-3">
            <span className={`badge ${stockDisponible > 0 ? 'bg-light text-dark border' : 'bg-danger text-white'}`}>
              {stockDisponible > 0 ? `Stock disponible: ${stockDisponible} u.` : 'Sin stock disponible'}
            </span>
            {cantidadEnCarrito > 0 && (
              <small className="d-block text-muted mt-1">
                (Ya tienes {cantidadEnCarrito} en tu carrito)
              </small>
            )}
          </div>

          <ItemCount stock={stockDisponible} initial={1} onAdd={handleOnAdd} />

          <div className="d-flex gap-2 mt-3">
            {cantidadEnCarrito > 0 && (
              <Link to="/carrito" className="btn btn-success fw-bold px-3">
                Ir al Carrito ({cantidadEnCarrito})
              </Link>
            )}
            <Link to="/productos" className="btn btn-outline-secondary">
              Volver al catalogo
            </Link>
          </div>

          {agregado && (
            <div className="alert alert-success mt-3 py-2 small" role="alert">
              ¡Producto agregado al pedido correctamente!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;