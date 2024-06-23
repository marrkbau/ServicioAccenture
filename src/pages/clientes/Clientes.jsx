import { Container } from "react-bootstrap";
import {
  createCliente,
  editCliente,
  getClientes,
} from "../../services/ClientesServices";
import ClientesTable from "../../components/ClientesTable";
import { useEffect, useState } from "react";

const Clientes = () => {
  const [dataClientes, setDataClientes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getClientes();

      setTimeout(() => {
        setDataClientes(data);
      }, 2000);
    };

    fetchData();
  }, [dataClientes]);

  const clienteCreate = (
    nombre,
    apellido,
    cuitDni,
    razonSocial,
    tipoCliente
  ) => {
    createCliente(nombre, apellido, cuitDni, razonSocial, tipoCliente);
    setDataClientes(null);
  };

  const clienteEdit = (
    id,
    nombre,
    apellido,
    cuitDni,
    razonSocial,
    tipoCliente
  ) => {
    editCliente(id, nombre, apellido, cuitDni, razonSocial, tipoCliente);
    setDataClientes(null);
  };

  return (
    <Container>
      <h1>Clientes</h1>
      {!dataClientes ? (
        <p>Cargando...</p>
      ) : (
        <ClientesTable
          data={dataClientes}
          clienteCreate={clienteCreate}
          clienteEdit={clienteEdit}
        />
      )}
    </Container>
  );
};

export default Clientes;
