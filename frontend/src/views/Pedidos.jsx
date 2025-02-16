import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrders } from '../context/OrdersContext';
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';

const Pedidos = () => {
  const { orders } = useOrders();
  const navigate = useNavigate();

  const handleOrderDetail = (orderId) => {
    navigate(`/detail/${orderId}`);
  };

  return (
    <div className="container mt-5">
      <CustomNavbar></CustomNavbar>
      <h1>Pedidos</h1>
      {orders.length === 0 ? (
        <p>No hay pedidos disponibles.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Fecha</th>
              <th>Total</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.user}</td>
                <td>{order.fecha}</td>
                <td>${order.total}</td>
                <td>{order.estado}</td>
                <td>
                <button onClick={() => handleOrderDetail(order.id)} className="btn btn-info">
                    Ver detalles
                  </button>
                  {order.estado !== 'Entregado' && (
                    <button
                      onClick={() => handleStatusChange(order.id, 'Entregado')}
                      className="btn btn-success ml-2"
                    >
                      Marcar como Entregado
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Pedidos;
