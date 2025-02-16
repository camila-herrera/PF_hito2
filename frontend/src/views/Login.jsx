import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../assets/styles.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin@admin.com' && password === '1234') {
      login('admin');
      navigate('/');
    } else if (email === 'cliente@cliente.com' && password === '1234') {
      login('cliente');
      navigate('/');
    } else if (email === 'usuario@usuario.com' && password === '1234') {
      login('user');
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <>
      <Navbar />
      <Container className="mt-5">
        <h2 className="text-center mb-4" style={{ color: '#4C5425' }}>Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>

          <Button variant="custom" type="submit" className="mt-3">
            ENTRAR
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
