import CartItemRow from '../components/cart/CartItemRow';
import CartSummary from '../components/cart/CartSummary';
import EmptyCart from '../components/cart/EmptyCart';
import { useCart } from '../hooks/useCart';

// Carrito: lista de productos del pedido con su total
const CartView = () => {
  const { carrito, updateQuantity, removeFromCart, clearCart, totalPrecio } = useCart();

  if (carrito.length === 0) return <EmptyCart />;

  return (
    <div className="container py-4">
      <div className="panel p-4 mb-4">
        <h3 className="fw-bold text-dark mb-4">Resumen del pedido mayorista</h3>

        <div className="table-responsive">
          <table className="table align-middle">
            <thead className="table-light">
              <tr>
                <th scope="col">Producto</th>
                <th scope="col" className="text-center">Cantidad</th>
                <th scope="col" className="text-end">Precio unitario</th>
                <th scope="col" className="text-end">Subtotal</th>
                <th scope="col" className="text-center">Acción</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item) => (
                <CartItemRow
                  key={item.id}
                  item={item}
                  onQuantityChange={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </tbody>
          </table>
        </div>

        <CartSummary totalPrecio={totalPrecio} onClear={clearCart} />
      </div>
    </div>
  );
};

export default CartView;
