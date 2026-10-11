# TechLab Mayorista

Tienda online mayorista de tecnología, alimentos y bebidas. Permite ver el catálogo paginado, entrar al detalle de cada producto y armar un pedido en el carrito.

## Tecnologías

- React 19 + Vite
- React Router (navegación)
- Bootstrap 5 (estilos, solo CSS)

## Cómo ejecutarlo

```bash
npm install      # instala las dependencias
npm run dev      # servidor de desarrollo
npm run build    # versión de producción
npm run lint     # revisa el código con ESLint
```

## Estructura de carpetas

```
public/
  productos.json      Catálogo de productos
  img/                Imágenes de los productos
src/
  config/             Constantes de la app
  utils/              Funciones puras (formato de precios, cálculos del carrito)
  services/           Acceso a datos (catálogo y localStorage)
  hooks/              Hooks reutilizables (useCart, useProducts, usePagination...)
  context/            Contexto del carrito (CartContext y CartProvider)
  data/               Datos fijos de la interfaz (equipo, beneficios)
  components/
    common/           Piezas genéricas (spinner, error, paginación)
    layout/           Estructura de la página (header, footer, layout)
    home/             Piezas de la portada
    products/         Piezas del catálogo y del detalle de producto
    cart/             Piezas del carrito
  pages/              Una pantalla por ruta
```

## Cómo se reparten las responsabilidades

| Capa | Responsabilidad |
| --- | --- |
| `pages` | Armar una pantalla combinando hooks y componentes |
| `components` | Dibujar una parte de la interfaz |
| `hooks` | Manejar estado y efectos reutilizables |
| `services` | Leer y guardar datos (fetch y localStorage) |
| `utils` | Calcular y formatear, sin estado ni efectos |

La lógica de stock del carrito está solo en `src/utils/cartUtils.js`.

## Convenciones

- Nombres técnicos (funciones, hooks, componentes) en inglés.
- Nombres del dominio (producto, carrito, cantidad, precio) en español, igual que los datos de `productos.json`.
- Comentarios cortos que explican qué hace cada parte.
- Cada imagen de producto va en el arreglo `imagenes`; la primera es la que se ve en el catálogo.

## Rutas

| Ruta | Pantalla |
| --- | --- |
| `/` | Portada |
| `/productos` | Catálogo |
| `/producto/:id` | Detalle de producto |
| `/carrito` | Carrito |
| cualquier otra | Página no encontrada |

El carrito se guarda en `localStorage`, así que sobrevive a recargar la página.
