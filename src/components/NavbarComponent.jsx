import { Navbar, Nav, Container } from "react-bootstrap";

const NavBarComponent = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Accenture</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/clientes">Clientes</Nav.Link>
          <Nav.Link href="/compras">Compras</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
