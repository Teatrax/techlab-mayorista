import { formatPrice } from '../../utils/formatPrice';

// Pie del carrito: botón para vaciar y total del pedido
const CartSummary = ({ totalPrecio, onClear }) => (
  <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 pt-3 border-top gap-3">
    <button type="button" className="btn btn-outline-secondary" onClick={onClear}>
      Vaciar pedido
    </button>

    <div className="text-end">
      <h4 className="fw-bold text-dark mb-1">
        Total: <span className="text-success">{formatPrice(totalPrecio)}</span>
      </h4>
      <small className="text-muted">Precios con IVA incluido para facturación A o B</small>
    </div>
  </div>
);

export default CartSummary;
