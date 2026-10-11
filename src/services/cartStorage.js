import { CART_STORAGE_KEY } from '../config/constants';

// Lee el carrito guardado; devuelve [] si no hay datos o están dañados
export const loadCart = () => {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    const carrito = saved ? JSON.parse(saved) : [];
    return Array.isArray(carrito) ? carrito : [];
  } catch {
    return [];
  }
};

// Guarda el carrito; si el navegador no deja guardar, sigue sin persistir
export const saveCart = (carrito) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(carrito));
  } catch {

  }
};
