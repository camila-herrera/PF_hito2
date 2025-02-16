import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar'
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
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formGridAddress" className="mt-3">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridCity" className="mt-3">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group controlId="formGridState" className="mt-3">
          <Form.Label>State</Form.Label>
          <Form.Select>
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Button variant="custom" type="submit" className="mt-4">
          Register
        </Button>
      </Form>
    </Container>
    <Footer></Footer>
    </>
  );
};
export default Register;
