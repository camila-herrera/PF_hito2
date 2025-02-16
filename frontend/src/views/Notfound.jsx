import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Notfound = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>¡Página no encontrada!</h1>
        <p>Lo siento, no encontramos lo que estás buscando.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Notfound;
