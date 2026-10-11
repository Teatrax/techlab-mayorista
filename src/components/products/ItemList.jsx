import Item from './Item';

// Grilla de tarjetas de productos
const ItemList = ({ productos }) => (
  <div className="row g-4 justify-content-center">
    {productos.map((producto) => (
      <Item key={producto.id} producto={producto} />
    ))}
  </div>
);

export default ItemList;
