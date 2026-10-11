import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';

// Tarjeta de un producto dentro del catálogo
const Item = ({ producto }) => (
  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
    <div className="card h-100 shadow-sm overflow-hidden">
      <div className="ratio ratio-4x3 bg-light">
        <img
          src={producto.imagenes[0]}
          alt={producto.nombre}
          className="w-100 h-100 object-fit-cover"
          loading="lazy"
        />
      </div>

      <div className="card-body d-flex flex-column text-start p-3">
        <span className="badge bg-light text-secondary border mb-2 align-self-start">
          {producto.categoria}
        </span>
        <h6 className="card-title fw-bold text-dark mb-2">{producto.nombre}</h6>

        <div className="my-2">
          <small className="text-muted d-block">Precio bulto cerrado:</small>
          <span className="fs-5 fw-bold text-success">{formatPrice(producto.precio)}</span>
        </div>

        <Link
          to={`/producto/${producto.id}`}
          className="btn btn-warning w-100 fw-bold mt-auto text-dark shadow-sm"
        >
          Ver detalle
        </Link>
      </div>
    </div>
  </div>
);

export default Item;
