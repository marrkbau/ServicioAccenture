import { Modal, Button } from "react-bootstrap";

const ErrorModal = ({ open, handleClose, error }) => {
  return (
    <Modal show={open} onHide={handleClose}>
      <Modal.Header closeButton style={{ backgroundColor: "#550ed4" }}>
        <Modal.Title style={{ color: "#6cdacd" }}>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{error}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;
