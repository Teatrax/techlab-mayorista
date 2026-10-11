// Funciones para calcular y modificar el carrito.
// Toda la lógica de stock vive en este archivo.

// Busca un producto dentro del carrito
export const findCartItem = (carrito, id) =>
  carrito.find((item) => item.id === id);

// Unidades de un producto que ya están en el carrito
export const getCartQuantity = (carrito, id) =>
  findCartItem(carrito, id)?.cantidad ?? 0;

// Unidades que todavía se pueden agregar de un producto
export const getAvailableStock = (producto, carrito) =>
  producto.stock - getCartQuantity(carrito, producto.id);

// Agrega un producto o suma unidades sin superar el stock
export const addItem = (carrito, producto, cantidad) => {
  const actual = getCartQuantity(carrito, producto.id);
  const nueva = Math.min(actual + cantidad, producto.stock);

  // No hay nada que agregar
  if (nueva <= actual) return carrito;

  // Producto nuevo en el carrito
  if (actual === 0) return [...carrito, { ...producto, cantidad: nueva }];

  return carrito.map((item) =>
    item.id === producto.id ? { ...item, cantidad: nueva } : item
  );
};

// Cambia la cantidad de un producto, entre 1 y su stock
export const setItemQuantity = (carrito, id, cantidad) =>
  carrito.map((item) =>
    item.id === id
      ? { ...item, cantidad: Math.min(Math.max(cantidad, 1), item.stock) }
      : item
  );

// Quita un producto del carrito
export const removeItem = (carrito, id) =>
  carrito.filter((item) => item.id !== id);

// Total de unidades en el carrito
export const getTotalQuantity = (carrito) =>
  carrito.reduce((total, item) => total + item.cantidad, 0);

// Total en pesos del carrito
export const getTotalPrice = (carrito) =>
  carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
