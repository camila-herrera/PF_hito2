import React from 'react';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Checkout = () => {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>Confirmar Compra</h1>
        {cart.length === 0 ? (
          <p>No hay productos en tu carrito.</p>
        ) : (
          <div>
            <h2>Resumen de Compra</h2>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.nombre} - ${item.precio}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <h3>Total: ${total}</h3>
              <button>Confirmar Compra</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
