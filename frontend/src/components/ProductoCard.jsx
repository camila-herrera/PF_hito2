import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProductoCard = ({ producto }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleClick = () => {
    navigate(`/detail/${producto.id_producto}`);
  };

  return (
    <div className="col-md-4 my-3" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="card">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="card-img-top"
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">{producto.descripcion}</p>

          {isAuthenticated ? (
            <p className="card-text">
              <strong>${producto.precio}</strong>
            </p>
          ) : (
            <p className="card-text">Inicia sesión para ver VALORES</p>
          )}

          <p className="card-text">Stock: {producto.stock}</p>
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductoCard;
