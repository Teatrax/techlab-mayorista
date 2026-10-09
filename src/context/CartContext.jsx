import { createContext, useState, useContext } from 'react';

// 1. Creacion del contexto
const CartContext = createContext();

// Hook personalizado para consumir el contexto facilmente
export const useCart = () => useContext(CartContext);

// 2. Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Funcion para agregar un producto o sumar cantidad si ya existe
  const addToCart = (producto, cantidad = 1) => {
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find((item) => item.id === producto.id);
      if (existe) {
        return prevCarrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      }
      return [...prevCarrito, { ...producto, cantidad }];
    });
  };

  // Funcion para eliminar un producto puntual
  const removeFromCart = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  // Funcion para vaciar todo el pedido
  const clearCart = () => {
    setCarrito([]);
  };

  // Total de unidades para la badge del carrito (CartWidget)
  const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  // Total
  const totalPrecio = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <CartContext.Provider
      value={{
        carrito,
        addToCart,
        removeFromCart,
        clearCart,
        totalCantidad,
        totalPrecio
      }}
    >
      {children}
    </CartContext.Provider>
  );
};