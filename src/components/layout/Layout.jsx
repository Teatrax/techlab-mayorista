import Header from './Header';
import Footer from './Footer';

// Estructura común de todas las pantallas: encabezado, contenido y pie
const Layout = ({ children }) => (
  <div className="d-flex flex-column min-vh-100">
    <Header />
    <main className="flex-grow-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
