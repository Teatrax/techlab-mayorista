import { getProducts } from '../services/productService';
import { useAsync } from './useAsync';

const EMPTY_LIST = [];

// Carga el catálogo completo
export const useProducts = () => {
  const { data, error, loading } = useAsync(getProducts);
  return { productos: data ?? EMPTY_LIST, error, loading };
};
