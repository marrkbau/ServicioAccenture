import { Form, Button, Card, Container } from "react-bootstrap";
import { useState } from "react";
import ErrorModal from "../../components/ErrorModal";
import { login } from "../../services/UsuariosService";

const Login = () => {
  const [errorOpen, setErrorOpen] = useState(false);
  const [error, setError] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (!usuario || !password) {
      setError("Debe completar todos los campos");
      setErrorOpen(true);
      return;
    }

    const result = await login(usuario, password);

    console.log(result);

    if (!result.success) {
      console.log(result.message);
      setError(result.message);
      setErrorOpen(true);
    } else {
        localStorage.setItem("access_token", result.access_token);
        window.location.href = "/";
    }
  };

  return (
    <Container style={{ maxWidth: "400px", marginTop: "20vh" }}>
      <ErrorModal
        open={errorOpen}
        handleClose={() => setErrorOpen(false)}
        error={error}
      />
      <Card>
        <Card.Header
          style={{ backgroundColor: "#550ed4", color: "#6fffec" }}
          className="text-center"
        >
          <strong>Login</strong>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={handleSubmit}>
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
