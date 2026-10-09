import { useState } from 'react';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrementar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  if (stock <= 0) {
    return (
      <div className="alert alert-warning py-2 my-3 small" role="alert">
        Has alcanzado el límite máximo de stock disponible en tu pedido.
      </div>
    );
  }

  return (
    <div className="d-flex flex-wrap align-items-center gap-3 my-4">
      {/* Selector interactivo */}
      <div className="input-group" style={{ width: "130px" }}>
        <button 
          onClick={decrementar} 
          className="btn btn-outline-secondary" 
          type="button"
          disabled={count <= 1}
        >
          -
        </button>
        <input 
          type="text" 
          className="form-control text-center fw-bold bg-white" 
          value={count} 
          readOnly 
        />
        <button 
          onClick={incrementar} 
          className="btn btn-outline-secondary" 
          type="button"
          disabled={count >= stock}
        >
          +
        </button>
      </div>

      {/* Botón de accion */}
      <button 
        onClick={() => onAdd(count)} 
        className="btn btn-warning fw-bold px-4 text-dark shadow-sm"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;