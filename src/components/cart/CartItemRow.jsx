import QuantityControl from '../products/QuantityControl';
import { formatPrice } from '../../utils/formatPrice';

// Fila de la tabla del carrito: producto, cantidad editable, precios y botón para quitar
const CartItemRow = ({ item, onQuantityChange, onRemove }) => (
  <tr>
    <td>
      <div className="d-flex align-items-center gap-3">
        <img src={item.imagenes[0]} alt={item.nombre} className="thumb-cart" />
        <div>
          <div className="fw-bold text-dark">{item.nombre}</div>
          <small className="text-muted">{item.categoria}</small>
        </div>
      </div>
    </td>

    <td>
      <div className="d-flex justify-content-center">
        <QuantityControl
          small
          value={item.cantidad}
          max={item.stock}
          onChange={(cantidad) => onQuantityChange(item.id, cantidad)}
        />
      </div>
    </td>

    <td className="text-end text-secondary">{formatPrice(item.precio)}</td>
    <td className="text-end fw-bold text-dark">{formatPrice(item.precio * item.cantidad)}</td>

    <td className="text-center">
      <button
        type="button"
        className="btn btn-sm btn-outline-danger"
        onClick={() => onRemove(item.id)}
      >
        Quitar
      </button>
    </td>
  </tr>
);

export default CartItemRow;
