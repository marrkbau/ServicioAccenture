import { Container } from "react-bootstrap";
import { getClientes } from "../../services/ClientesServices";
import ClientesTable from "../../components/ClientesTable";
import { useEffect, useState } from "react";

const Clientes = () => {
  const [dataClientes, setDataClientes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getClientes();
      console.log(data);

      setTimeout(() => {
        setDataClientes(data);
      }, 2000);
    };

    fetchData();
  }, []);

  const clienteCreate = (nombre, apellido, email) => {
    alert("Cliente creado correctamente");
  };

  const clienteEdit = (nombre, apellido, email) => {
    alert("Cliente editado correctamente");
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
