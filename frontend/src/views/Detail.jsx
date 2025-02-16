import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; // Si vas a obtener un ID del producto de la URL

const Detail = () => {
  const { id } = useParams(); // Para obtener el ID de la URL si es necesario
  const [product, setProduct] = useState(null);

  // Simulación de obtener los detalles de un producto (por ejemplo, desde una API o archivo local)
  useEffect(() => {
    // Aquí podrías hacer una llamada a la API usando el ID
    // Esto es solo un ejemplo estático:
    const fetchProduct = async () => {
      // Suponiendo que obtienes un producto con el ID
      // Esto es solo un mock-up de ejemplo
      const data = {
        id: id,
        name: 'Chaqueta de Invierno',
        description: 'Una chaqueta térmica ideal para el frío extremo.',
        price: '$99.99',
        image: '/path/to/image.jpg',
        extraImages: ['/path/to/extra1.jpg', '/path/to/extra2.jpg'],
      };
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Puedes mostrar un loading mientras cargas los datos
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.image} alt={product.name} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text><strong>Price:</strong> {product.price}</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          {/* Aquí puedes añadir una galería de imágenes adicionales si las tienes */}
          <h5>Additional Images</h5>
          <Row>
            {product.extraImages.map((img, index) => (
              <Col key={index} sm={4}>
                <img src={img} alt={`Extra ${index + 1}`} className="img-fluid mb-2" />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
