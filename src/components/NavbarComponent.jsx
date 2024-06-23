import { Navbar, Nav, Container } from "react-bootstrap";
import bg from "../assets/bg-1.png";
const NavBarComponent = () => {
  return (
    <Navbar className="navBar" data-bs-theme="dark">
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
