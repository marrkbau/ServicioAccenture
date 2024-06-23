import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBarComponent = () => {
  return (
    <Navbar className="navBar" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <NavLink className="nav-link-title" to="/">
            Accenture
          </NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <NavLink className="nav-link" to="/clientes">
              Clientes
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink className="nav-link" to="/compras">
              Compras
            </NavLink>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
