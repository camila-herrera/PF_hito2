import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../assets/styles.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Login = () => {
  return (
    <>
    <Navbar />
    <Container className="mt-5">
      <h2 className="text-center mb-4" style={{ color: '#4C5425' }}>Login</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox" className="mt-3">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="custom" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </Container>
    <Footer></Footer>
    </>
  );
};
export default Login;