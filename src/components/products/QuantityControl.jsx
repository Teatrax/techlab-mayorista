// Control de cantidad con botones - y +. Solo dibuja; el estado lo maneja quien lo usa.
const QuantityControl = ({ value, max, onChange, small = false }) => (
  <div className={`input-group qty-selector ${small ? 'input-group-sm' : ''}`}>
    <button
      type="button"
      className="btn btn-outline-secondary"
      aria-label="Disminuir cantidad"
      disabled={value <= 1}
      onClick={() => onChange(value - 1)}
    >
      -
    </button>
    <input
      type="text"
      className="form-control text-center fw-bold bg-white"
      aria-label="Cantidad"
      value={value}
      readOnly
    />
    <button
      type="button"
      className="btn btn-outline-secondary"
      aria-label="Aumentar cantidad"
      disabled={value >= max}
      onClick={() => onChange(value + 1)}
    >
      +
    </button>
  </div>
);

export default QuantityControl;
