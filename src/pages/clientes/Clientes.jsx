import { Container } from "react-bootstrap";
import { getClientes } from "../../services/ClientesServices";
import ClientesTable from "../../components/ClientesTable";

const Clientes = () => {
  const dataClientes = getClientes();

  const clienteCreate = (nombre, apellido, email) => {
    alert("Cliente creado correctamente");
  };

  const clienteEdit = (nombre, apellido, email) => {
    alert("Cliente editado correctamente");
  };

  return (
    <Container>
      <h1>Clientes</h1>
      <ClientesTable
        data={dataClientes}
        clienteCreate={clienteCreate}
        clienteEdit={clienteEdit}
      />
    </Container>
  );
};

export default Clientes;
