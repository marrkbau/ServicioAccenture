import { Container } from "react-bootstrap";
import {
  createCliente,
  deleteCliente,
  editCliente,
  getClientes,
} from "../../services/ClientesServices";
import ClientesTable from "../../components/ClientesTable";
import { useEffect, useState } from "react";
import ErrorModal from "../../components/ErrorModal";
import { Navigate } from "react-router-dom";

const Clientes = () => {
  const [dataClientes, setDataClientes] = useState(null);
  const [errorOpen, setErrorOpen] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getClientes();
      setDataClientes(data);
    } catch (error) {
      setErrorOpen(true);
      setError(error.message);
    }
  };

  const clienteCreate = async (
    nombre,
    apellido,
    cuitDni,
    razonSocial,
    tipoCliente
  ) => {
    try {
      await createCliente(nombre, apellido, cuitDni, razonSocial, tipoCliente);
      setDataClientes(await getClientes());
    } catch (error) {
      setErrorOpen(true);
      setError(error.message);
    }
  };

  const clienteEdit = async (
    id,
    nombre,
    apellido,
    cuitDni,
    razonSocial,
    tipoCliente
  ) => {
    try {
      await editCliente(
        id,
        nombre,
        apellido,
        cuitDni,
        razonSocial,
        tipoCliente
      );
      setDataClientes(await getClientes());
    } catch (error) {
      setErrorOpen(true);
      setError(error.message);
      console.error(error);
    }
  };

  const clienteDelete = async (client) => {
    await deleteCliente(client.id);
    setDataClientes(await getClientes());
  };

  return (
    <>
      {localStorage.getItem("access_token") ? (
        <Container>
        <ErrorModal
          open={errorOpen}
          handleClose={() => setErrorOpen(false)}
          error={error}
        />
        <h1>Clientes</h1>
        {!dataClientes ? (
          <p>Cargando...</p>
        ) : (
          <ClientesTable
            data={dataClientes}
            clienteCreate={clienteCreate}
            clienteEdit={clienteEdit}
            clienteDelete={clienteDelete}
          />
        )}
      </Container>
      ): (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Clientes;
