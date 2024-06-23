import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ProductosTable from "../../components/ProductosTable";
import { useState } from "react";
import NuevoClienteModal from "../../components/NuevoClienteModal";
import Resumen from "../../components/Resumen";
import { getClientes } from "../../services/ClientesServices";
import { getProductos } from "../../services/ProductosServices";

const Compras = () => {
  const columnsProducts = ["ID", "Producto", "Precio", "Cantidad", "Total"];
  const dataFieldsProducts = ["id", "producto", "precio", "cantidad", "total"];

  const dataProducts = getProductos();
  const dataClients = getClientes();

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedClient, setSelectedClient] = useState("");

  const handleSelectProduct = (product) => {
    if (selectedProducts.find((p) => p.id === product.id)) {
      const filteredProducts = selectedProducts.filter(
        (p) => p.id !== product.id
      );
      setSelectedProducts(filteredProducts);
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleSelectClient = (event) => {
    setSelectedClient(event.target.value);
  };


  const createCompra = () => {
    alert("Compra generada");
    setSelectedClient("");
    setSelectedProducts([]);
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Compras</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={4}></Col>
        <Col className="d-flex gap-2 justify-content-center">
          <Form.Select onChange={(e) => handleSelectClient(e)}>
            <option value={""}>Selecciona un cliente</option>
            {dataClients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.nombre} {client.apellido}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col xs={4}></Col>
      </Row>
      {selectedClient && (
        <>
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <h5>Seleccionar Productos</h5>
              <ProductosTable
                columns={columnsProducts}
                data={dataProducts}
                dataFields={dataFieldsProducts}
                handleSelectProduct={handleSelectProduct}
              />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <Resumen
                dataClients={dataClients}
                selectedClient={selectedClient}
                selectedProducts={selectedProducts}
                createCompra={createCompra}
              />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Compras;
