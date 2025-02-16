import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Profile = () => {
  const user = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'juan.perez@example.com',
    telefono: '+56 9 1234 5678',
    dni: '12345678-9',
    direccion: 'Av. Siempre Viva 1234, Santiago',
    historialCompras: [
      { id: 1, producto: 'Spray de Pimienta', fecha: '2025-02-10', total: '$15.000' },
      { id: 2, producto: 'Taser Portátil', fecha: '2025-01-22', total: '$80.000' },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#4C5425] text-white">
      <Navbar />
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Perfil de Usuario</h2>
        <div className="bg-white text-black rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-2">Información Personal</h3>
          <p><strong>Nombre:</strong> {user.nombre} {user.apellido}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Teléfono:</strong> {user.telefono}</p>
          <p><strong>DNI:</strong> {user.dni}</p>
          <p><strong>Dirección:</strong> {user.direccion}</p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Historial de Compras</h3>
          {user.historialCompras.length > 0 ? (
            <ul className="list-disc list-inside">
              {user.historialCompras.map((compra) => (
                <li key={compra.id} className="mb-2">
                  {compra.producto} - {compra.fecha} - <strong>{compra.total}</strong>
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay compras realizadas aún.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
