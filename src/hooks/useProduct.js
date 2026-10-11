import { useCallback } from 'react';
import { getProductById } from '../services/productService';
import { useAsync } from './useAsync';

// Carga un producto por id; producto es null si no existe
export const useProduct = (id) => {
  const loader = useCallback(() => getProductById(id), [id]);
  const { data, error, loading } = useAsync(loader);
  return { producto: data, error, loading };
};
