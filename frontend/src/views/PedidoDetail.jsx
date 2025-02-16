import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useOrders } from '../context/OrdersContext';
import { useNavigate } from 'react-router-dom';

const PedidoDetail = () => {
  const { id } = useParams();
  const { orders, updateOrderStatus } = useOrders();
  const navigate = useNavigate();
  
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const orderDetail = orders.find(order => order.id === parseInt(id));
    setOrder(orderDetail);
  }, [id, orders]);

  const handleStatusChange = (newStatus) => {
    if (order) {
      updateOrderStatus(order.id, newStatus);
    }
  };

  if (!order) return <div>Pedido no encontrado</div>;

  return (
    <div className="container mt-5">
      <h1>Detalle del Pedido #{order.id}</h1>
      <p><strong>Usuario:</strong> {order.user}</p>
      <p><strong>Fecha:</strong> {order.fecha}</p>
      <p><strong>Total:</strong> ${order.total}</p>
      <p><strong>Estado:</strong> {order.estado}</p>
      <p><strong>Productos:</strong></p>
      <ul>
        {order.productos.map((producto, index) => (
          <li key={index}>{producto}</li>
        ))}
      </ul>
      <div className="mt-4">
        <button onClick={() => handleStatusChange('Pagado')} className="btn btn-primary mr-2">
          Marcar como Pagado
        </button>
        <button onClick={() => handleStatusChange('Por entregar')} className="btn btn-warning mr-2">
          Marcar como Por entregar
        </button>
        <button onClick={() => handleStatusChange('Entregado')} className="btn btn-success">
          Marcar como Entregado
        </button>
      </div>
      <div className="mt-4">
        <button onClick={() => navigate('/pedidos')} className="btn btn-secondary">
          Volver a los Pedidos
        </button>
      </div>
    </div>
  );
};

export default PedidoDetail;
