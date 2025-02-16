import { createContext, useState, useContext } from 'react';

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([
    // Ejemplo de pedido
    {
      id: 1,
      user: 'Juan Pérez',
      productos: ['Spray de Pimienta', 'Taser Portátil'],
      total: 95000,
      estado: 'Por entregar',
      fecha: '2025-02-10',
    },
    {
      id: 2,
      user: 'Ana López',
      productos: ['Alarma Personal', 'Linterna Táctica'],
      total: 45000,
      estado: 'Pagado',
      fecha: '2025-02-12',
    },
  ]);

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, estado: newStatus } : order
      )
    );
  };

  return (
    <OrdersContext.Provider value={{ orders, updateOrderStatus }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => useContext(OrdersContext);
