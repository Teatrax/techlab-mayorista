import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartProvider';
import Layout from './components/layout/Layout';
import HomeView from './pages/HomeView';
import CatalogView from './pages/CatalogView';
import ProductDetailView from './pages/ProductDetailView';
import CartView from './pages/CartView';
import NotFoundView from './pages/NotFoundView';

// Raíz de la app: carrito compartido, rutas y estructura común
const App = () => (
  <CartProvider>
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Portada */}
          <Route path="/" element={<HomeView />} />
          {/* Catálogo mayorista */}
          <Route path="/productos" element={<CatalogView />} />
          {/* Detalle de un producto */}
          <Route path="/producto/:id" element={<ProductDetailView />} />
          {/* Carrito de compras */}
          <Route path="/carrito" element={<CartView />} />
          {/* Cualquier otra dirección */}
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </CartProvider>
);

export default App;
