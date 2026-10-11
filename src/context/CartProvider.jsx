import { useCallback, useEffect, useMemo, useState } from 'react';
import { CartContext } from './CartContext';
import { loadCart, saveCart } from '../services/cartStorage';
import {
  addItem,
  getTotalPrice,
  getTotalQuantity,
  removeItem,
  setItemQuantity,
} from '../utils/cartUtils';

// Guarda el estado del carrito y lo comparte con toda la app
export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(loadCart);

  // Persiste el carrito cada vez que cambia
  useEffect(() => {
    saveCart(carrito);
  }, [carrito]);

  const addToCart = useCallback((producto, cantidad = 1) => {
    setCarrito((prev) => addItem(prev, producto, cantidad));
  }, []);

  const updateQuantity = useCallback((id, cantidad) => {
    setCarrito((prev) => setItemQuantity(prev, id, cantidad));
  }, []);

  const removeFromCart = useCallback((id) => {
    setCarrito((prev) => removeItem(prev, id));
  }, []);

  const clearCart = useCallback(() => {
    setCarrito([]);
  }, []);

  const value = useMemo(
    () => ({
      carrito,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      totalCantidad: getTotalQuantity(carrito),
      totalPrecio: getTotalPrice(carrito),
    }),
    [carrito, addToCart, updateQuantity, removeFromCart, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
