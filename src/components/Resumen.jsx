import { Button, Card, Form, ListGroup } from "react-bootstrap";

const Resumen = ({
  dataClients,
  selectedClient,
  selectedProducts,
  createCompra,
}) => {
  return (
    <Card border="primary" style={{ width: "18rem" }}>
      <Card.Header className="text-center" style={{backgroundColor:"#550ed4", color:"#6cdacd"}}><strong>Resumen</strong></Card.Header>
      <Card.Body>
        <Card.Title>
          {dataClients.find((client) => client.id == selectedClient).nombre}{" "}
          {dataClients.find((client) => client.id == selectedClient).apellido}
        </Card.Title>
        <Card.Text>
          <ListGroup variant="flush">
            {selectedProducts.map((product) => (
              <ListGroup.Item key={product.id}>
                {product.producto} - ${product.total}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>Fecha de entrega</strong>
            </Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Card.Text>
        <Card.Footer className="text-center">
          <Button
            disabled={selectedProducts.length === 0}
            className="btn btn-primary"
            onClick={() => createCompra()}
          >
            Generar compra
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default Resumen;
