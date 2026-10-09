import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import HomeView from './pages/HomeView';
import ItemListContainer from './components/products/ItemListContainer';
import ItemDetailContainer from './components/products/ItemDetailContainer';
import CartView from './pages/CartView';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* 1. Portada institucional */}
            <Route path="/" element={<HomeView />} />
            
            {/* 2. Catálogo mayorista */}
            <Route path="/productos" element={<ItemListContainer greeting="Catálogo Mayorista TechLab" />} />
            
            {/* 3. Detalle de producto */}
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            
            {/* 4. Carrito */}
            <Route path="/carrito" element={<CartView />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;