import { useEffect, useState } from 'react';

// Ejecuta una función asíncrona y devuelve { data, error, loading }.
// Vuelve a ejecutarla cuando cambia la identidad de `loader`.
export const useAsync = (loader) => {
  const [result, setResult] = useState({ loader: null, data: null, error: null });

  useEffect(() => {
    let cancelled = false;

    loader()
      .then((data) => !cancelled && setResult({ loader, data, error: null }))
      .catch((error) => !cancelled && setResult({ loader, data: null, error }));

    // Evita actualizar el estado si el componente se desmontó o cambió el loader
    return () => {
      cancelled = true;
    };
  }, [loader]);

  // Mientras el resultado guardado sea de otro loader, sigue cargando
  const loading = result.loader !== loader;

  return {
    data: loading ? null : result.data,
    error: loading ? null : result.error,
    loading,
  };
};
