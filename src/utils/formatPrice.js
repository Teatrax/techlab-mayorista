import { LOCALE } from '../config/constants';

const numberFormatter = new Intl.NumberFormat(LOCALE);

// Devuelve un precio con signo peso y separador de miles. Ej: $450.000
export const formatPrice = (value) => `$${numberFormatter.format(value)}`;
