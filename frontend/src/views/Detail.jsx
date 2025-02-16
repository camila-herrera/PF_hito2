import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useProductos } from '../context/ProductContext';
import { useCart } from '../context/CartContext';

const Detail = () => {
  const { id } = useParams();
  const { productos, loading } = useProductos();
  const { addToCart } = useCart();
  const product = productos.find((p) => p.id_producto.toString() === id);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Producto no encontrado</div>;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#4C5425] text-white">
      <Navbar />
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="bg-white text-black rounded-lg shadow-lg p-6 max-w-md w-full text-center">
          <img src={product.imagen} alt={product.nombre} className="w-full h-64 object-cover mb-4 rounded" />
          <h1 className="text-2xl font-bold mb-2">{product.nombre}</h1>
          <p className="mb-2">{product.descripcion}</p>
          <p className="mb-4 font-semibold text-lg">${product.precio}</p>
          <button onClick={handleAddToCart} className="bg-[#E5B129] text-black px-4 py-2 rounded hover:bg-yellow-600 transition">
            Agregar al Carrito
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;


