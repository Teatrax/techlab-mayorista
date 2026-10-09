import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartView = () => {
  const { carrito, removeFromCart, clearCart, totalPrecio } = useCart();

  if (carrito.length === 0) {
    return (
      <div className="container py-5 text-center">
        <div className="bg-white p-5 rounded-3 shadow-sm border">
          <h2 className="fw-bold mb-3 text-dark">Tu Carrito de Compras</h2>
          <p className="text-muted">Aún no agregaste productos al pedido mayorista.</p>
          <Link to="/productos" className="btn btn-warning fw-bold text-dark mt-3 px-4 shadow-sm">
            Explorar Catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="bg-white p-4 rounded-3 shadow-sm border mb-4">
        <h3 className="fw-bold text-dark mb-4">Resumen del Pedido Mayorista</h3>

        <div className="table-responsive">
          <table className="table align-middle">
            <thead className="table-light">
              <tr>
                <th>Producto</th>
                <th className="text-center">Cantidad</th>
                <th className="text-end">Precio Unitario</th>
                <th className="text-end">Subtotal</th>
                <th className="text-center">Acción</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <img 
                        src={item.img} 
                        alt={item.nombre} 
                        style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "6px" }} 
                      />
                      <div>
                        <div className="fw-bold text-dark">{item.nombre}</div>
                        <small className="text-muted">{item.categoria}</small>
                      </div>
                    </div>
                  </td>
                  <td className="text-center fw-semibold">{item.cantidad}</td>
                  <td className="text-end text-secondary">${item.precio.toLocaleString('es-AR')}</td>
                  <td className="text-end fw-bold text-dark">
                    ${(item.precio * item.cantidad).toLocaleString('es-AR')}
                  </td>
                  <td className="text-center">
                    <button 
                      onClick={() => removeFromCart(item.id)} 
                      className="btn btn-sm btn-outline-danger"
                    >
                      Quitar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 pt-3 border-top gap-3">
          <button onClick={clearCart} className="btn btn-outline-secondary">
            Vaciar Pedido
          </button>
          <div className="text-end">
            <h4 className="fw-bold text-dark mb-1">
              Total: <span className="text-success">${totalPrecio.toLocaleString('es-AR')}</span>
            </h4>
            <small className="text-muted">Precios con IVA incluido para facturación A o B</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;