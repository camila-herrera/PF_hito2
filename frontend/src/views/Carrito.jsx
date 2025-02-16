import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const Carrito = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Tu carrito está vacío');
    } else {
      alert('Procediendo al checkout...');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>Carrito de Compras</h1>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <div>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <div className="d-flex justify-content-between">
                    <span>{item.nombre}</span>
                    <span>${item.precio} x {item.cantidad}</span>
                    <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <button onClick={clearCart}>Vaciar Carrito</button>
              <button onClick={handleCheckout}>Ir a Checkout</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Carrito;

