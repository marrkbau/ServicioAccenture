import { Button, Card, Col, Form, ListGroup, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Contador from "./Contador";
const Resumen = ({
  dataClients,
  selectedClient,
  selectedProducts,
  createCompra,
}) => {
  const [fechaEntrega, setFechaEntrega] = useState("");

  useEffect(() => {
    console.log(fechaEntrega);
  }, [fechaEntrega]);

  return (
    <Card className="mb-3" border="primary" style={{ width: "30rem" }}>
      <Card.Header
        className="text-center"
        style={{ backgroundColor: "#550ed4", color: "#6cdacd" }}
      >
        <strong>Resumen</strong>
      </Card.Header>
      <Card.Body>
        <Card.Title className="text-center">
          {dataClients.find((client) => client.id === selectedClient.id).nombre}{" "}
          {dataClients.find((client) => client.id === selectedClient.id).apellido}
        </Card.Title>
        <Card.Text>
          <ListGroup variant="flush">
            {selectedProducts.map((product) => (
              <ListGroup.Item key={product.id}>
                <Row style={{ display: "flex", alignItems: "baseline" }}>
                  <Col className="text-center">
                    {product.nombre} - ${product.precio}
                  </Col>
                  <Col>
                    <Contador
                      min={1}
                      max={product.stock}
                      onCount={(count) => {
                        product.cantidad = count;
                        console.log(selectedProducts);
                      }}
                    />
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>Fecha de entrega</strong>
            </Form.Label>
            <Form.Control
              type="date"
              value={fechaEntrega}
              onChange={(e) => setFechaEntrega(e.target.value)}
            />
          </Form.Group>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
        <Button
          disabled={selectedProducts.length === 0}
          className="btn btn-primary"
          onClick={() => createCompra(fechaEntrega, selectedProducts, selectedClient)}
        >
          Generar compra
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Resumen;
