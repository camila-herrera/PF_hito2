import { Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';      
import Profile from './views/Profile';
import Register from './views/Register';
import Login from './views/Login';
import Checkout from './views/Checkout';
import Pedidos from './views/Pedidos';
import Carrito from './views/Carrito';
import Detail from './views/Detail';
import Notfound from './views/Notfound';
import { ProductosProvider } from './context/ProductContext';
import { useAuth } from './context/AuthContext';

function ProtectedRoute({ children, allowedRoles }) {
  const { isAuthenticated, userRole } = useAuth();
  if (!isAuthenticated || !allowedRoles.includes(userRole)) {
    return <Navigate to="/login" />;
  }
  return children;
}

function App() {
  return (
    <ProductosProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProtectedRoute allowedRoles={['user']}><Profile /></ProtectedRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<ProtectedRoute allowedRoles={['user']}><Checkout /></ProtectedRoute>} />
        <Route path="/pedidos" element={<ProtectedRoute allowedRoles={['cliente', 'admin']}><Pedidos /></ProtectedRoute>} />
        <Route path="/carrito" element={<ProtectedRoute allowedRoles={['user']}><Carrito /></ProtectedRoute>} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </ProductosProvider>
  );
}

export default App;
