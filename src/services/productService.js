import { PRODUCTS_URL } from '../config/constants';

// Guarda la petición para no repetir el fetch entre pantallas
let productsRequest = null;

// Trae el catálogo completo
export const getProducts = () => {
  if (!productsRequest) {
    productsRequest = fetch(PRODUCTS_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`No se pudo cargar el catálogo (error ${response.status})`);
        }
        return response.json();
      })
      .catch((error) => {
        // Si falla, la próxima llamada vuelve a intentar
        productsRequest = null;
        throw error;
      });
  }
  return productsRequest;
};

// Trae un producto por id; devuelve null si no existe
export const getProductById = async (id) => {
  const productos = await getProducts();
  return productos.find((producto) => producto.id === Number(id)) ?? null;
};
