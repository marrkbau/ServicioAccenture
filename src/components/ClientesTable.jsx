import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import NuevoClienteModal from "./NuevoClienteModal";
import { useState } from "react";

const ClientesTable = ({ data, clienteCreate, clienteEdit, clienteDelete }) => {
  const [openModal, setOpenModal] = useState(false);
  const [cliente, setCliente] = useState(null);

  const columns = [
    "ID",
    "Nombre",
    "Apellido",
    "Razon Social",
    "CUIT",
    "Tipo Cliente",
    "Categoria",
    "Puntos",
    "Acciones"
    
  ];

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleOnCreate = () => {
    setCliente(null);
    handleOpenModal();
  };

  const handleOnEdit = (cliente) => {
    setCliente(cliente);
    handleOpenModal();
  };

  const handleOnDelete = (cliente) => {
    clienteDelete(cliente);
  };

  return (
    <>
      <Button className="mb-2" onClick={handleOnCreate}>
        Nuevo Cliente
      </Button>
      <NuevoClienteModal
        cliente={cliente}
        open={openModal}
        handleClose={handleCloseModal}
        create={clienteCreate}
        edit={clienteEdit}
      />
      <Table
        
        responsive
        striped
        bordered
        hover
        size="sm"
        style={{
          borderColor: "#550ed4",
          borderStyle: "solid",
        }}
      >
        <thead>
          <tr className="text-center">
            {columns.map((column) => (
              <th>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              <td className="text-center">{row.id}</td>
              <td className="text-center">{row.nombre}</td>
              <td className="text-center">{row.apellido}</td>
              <td className="text-center">{row.razonSocial.razonSocial}</td>
              <td className="text-center">{row.cuitDni}</td>
              <td className="text-center">{row.tipoCliente.tipoCliente}</td>
              <td className="text-center">{row.categoria.nivel}</td>
              <td className="text-center">{row.puntos}</td>
              <td className="text-center">
                <Button
                  onClick={() => handleOnEdit(row)}
                  className="m-2"
                  variant="info"
                >
                  Editar
                </Button>
                <Button
                  onClick={() => handleOnDelete(row)}
                  className="m-2"
                  variant="danger"
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ClientesTable;
