import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import {
  getRazonesSociales,
  getTipoClientes,
} from "../services/ClientesServices";

const NuevoClienteModal = ({ open, handleClose, cliente, create, edit }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cuitDni, setCuitDni] = useState("");
  const [razonSocial, setRazonSocial] = useState("");
  const [tipoCliente, setTipoCliente] = useState("");

  const [validated, setValidated] = useState(false);

  const [razonSocialOption, setRazonSocialOption] = useState([]);
  const [tipoClienteOption, setTipoClienteOption] = useState([]);

  useEffect(() => {
    setRazonSocialOption(getRazonesSociales());
    setTipoClienteOption(getTipoClientes());

    if (cliente) {
      setNombre(cliente.nombre);
      setApellido(cliente.apellido);
      setCuitDni(cliente.cuitDni);
      setRazonSocial(cliente.razonSocial);
      setTipoCliente(cliente.tipoCliente);
    } else {
      resetStates();
    }
  }, [cliente]);

  const resetStates = () => {
    setNombre("");
    setApellido("");
    setCuitDni("");
    setRazonSocial("");
    setTipoCliente("");
  };

  const handleSubmit = (event) => {
    console.log(nombre, apellido, cuitDni, razonSocial, tipoCliente);
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      setValidated(true);
      alert("Complete los campos requeridos");
    } else {
      cliente
        ? edit(cliente.id, nombre, apellido, cuitDni, razonSocial, tipoCliente)
        : create(nombre, apellido, cuitDni, razonSocial, tipoCliente);
      resetStates();
      handleClose();
    }
  };
  return (
    <Modal show={open} onHide={handleClose}>
      <Modal.Header closeButton style={{ backgroundColor: "#550ed4" }}>
        <Modal.Title style={{ color: "#6cdacd" }}>Alta de Cliente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              minLength={2}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              value={nombre}
              placeholder="Ingrese el nombre"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="apellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              minLength={2}
              onChange={(e) => setApellido(e.target.value)}
              type="text"
              value={apellido}
              placeholder="Ingrese el apellido"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cuitDni">
            <Form.Label>CUIT/DNI</Form.Label>
            <Form.Control
              required
              onChange={(e) => setCuitDni(e.target.value)}
              type="text"
              value={cuitDni}
              placeholder="Ingrese el CUIT/DNI"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="razonSocial">
            <Form.Label>Razon social</Form.Label>
            <Form.Select
              onChange={(e) => setRazonSocial(e.target.value)}
              value={razonSocial}
              required
            >
              <option value="">Selecciona una razon social</option>
              {razonSocialOption.map((razon) => (
                <option key={razon.id} value={razon.id}>
                  {razon.razonSocial}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="tipoCliente">
            <Form.Label>Tipo de cliente</Form.Label>
            <Form.Select
              onChange={(e) => setTipoCliente(e.target.value)}
              value={tipoCliente}
              required
            >
              <option value="">Selecciona un tipo de cliente</option>
              {tipoClienteOption.map((tipo) => (
                <option key={tipo.id} value={tipo.id}>
                  {tipo.tipoCliente}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Button type="submit">Guardar</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button
          type="submit"
          variant="primary"
          onClick={(e) => handleSubmit(e)}
        >
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NuevoClienteModal;
