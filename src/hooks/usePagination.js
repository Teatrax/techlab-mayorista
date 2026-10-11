import { useState } from 'react';

// Divide una lista en páginas y lleva la cuenta de la página actual
export const usePagination = (items, perPage) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * perPage;
  const pageItems = items.slice(start, start + perPage);

  // Cambia de página sin salirse del rango válido
  const goToPage = (number) => {
    setPage(Math.min(Math.max(number, 1), totalPages));
  };

  return { pageItems, currentPage, totalPages, goToPage };
};
