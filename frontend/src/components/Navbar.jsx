import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const CustomNavbar = () => {
    const { isAuthenticated, logout } = useAuth();
    
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#4C5425' }} className="shadow-sm p-3">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">.
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <img
            src="/logo-leo.jpg"
            alt="Selk Nam Survival Store"
            height="50"
            className="me-2 rounded-circle"
          />
          <span className="fw-bold text-light">Selk Nam Store</span>
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav ml-auto">
            {!isAuthenticated ? (
                <>
                <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
                </>
            ) : (
                <>
                <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/pedidos">Pedidos</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/carrito">Carrito</Link></li>
                <li className="nav-item"><button className="btn btn-danger" onClick={logout}>Logout</button></li>
                </>
            )}
            </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

