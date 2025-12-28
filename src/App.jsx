import { Routes, Route } from 'react-router-dom';
// context
import { CartProvider } from './Hooks/Context';
import { AuthProvider } from './Hooks/AuthContext';
//componentes
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtctRoute';
//paginas
import Home from './pages/Home';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/ProductoDetalle';
import Carrito from './pages/Carrito';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';
import './App.css';

export default function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <div className="app-container">
          <Navbar />

          <main className="container flex-grow-1 my-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/producto/:isbn13" element={<ProductoDetalle />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <AdminPanel />
                </ProtectedRoute>
              } />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  )
}