import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import '../assets/styles.css';
import Footer from '../components/Footer';

const Register = () => {
  return (
    <>
      <Navbar />
      <Container className="mt-5">
        <h2 className="text-center mb-4" style={{ color: '#4C5425' }}>Register</h2>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" required />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" required />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={6}>
              <Form.Group controlId="formGridFirstName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control placeholder="Ana" required />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formGridLastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control placeholder="Perez" required />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formGridPhone" className="mt-3">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="tel" placeholder="+56 9 1234 5678" required />
          </Form.Group>

          <Form.Group controlId="formGridAddress" className="mt-3">
            <Form.Label>Direccion</Form.Label>
            <Form.Control placeholder="Alameda 1234" required />
          </Form.Group>

          <Row className="mt-3">
            <Col md={6}>
              <Form.Group controlId="formGridCity">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control required />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formGridState">
                <Form.Label>Region</Form.Label>
                <Form.Control required />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formGridDNI" className="mt-3">
            <Form.Label>RUT (ID Number)</Form.Label>
            <Form.Control placeholder="12345678-9" required />
          </Form.Group>

          <Button variant="custom" type="submit" className="mt-4">
            Register
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default Register;
