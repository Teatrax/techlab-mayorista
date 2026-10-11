import { useState } from 'react';
import QuantityControl from './QuantityControl';

// Elige una cantidad y la agrega al carrito con el botón
const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  // Sin stock disponible no se muestra el selector
  if (stock <= 0) {
    return (
      <div className="alert alert-warning py-2 my-3 small" role="alert">
        Ya agregaste todo el stock disponible a tu pedido.
      </div>
    );
  }

  // Si el stock baja, la cantidad elegida nunca lo supera
  const quantity = Math.min(count, stock);

  return (
    <div className="d-flex flex-wrap align-items-center gap-3 my-4">
      <QuantityControl value={quantity} max={stock} onChange={setCount} />

      <button
        type="button"
        className="btn btn-warning fw-bold px-4 text-dark shadow-sm"
        onClick={() => onAdd(quantity)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
