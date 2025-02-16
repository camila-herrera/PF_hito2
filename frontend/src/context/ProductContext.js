import React, { createContext, useState, useEffect, useContext } from "react";

const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/productos.json")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.productos);  
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error cargando los productos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <ProductosContext.Provider value={{ productos, loading }}>
      {children}
    </ProductosContext.Provider>
  );
};

// Custom hook para acceder al contexto
export const useProductos = () => useContext(ProductosContext);
