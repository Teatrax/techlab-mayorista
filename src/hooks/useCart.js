import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

// Da acceso al carrito desde cualquier componente
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart debe usarse dentro de <CartProvider>');
  }

  return context;
};
