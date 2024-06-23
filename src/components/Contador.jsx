import { Button, Row, Col } from "react-bootstrap";
import { useState } from "react";

const Contador = ({ max, min, onCount }) => {
  const [count, setCount] = useState(1);

  const handleCountPlus = () => {
    if (count < max) {
      setCount(count + 1);
      onCount(count + 1);
    }
  };

  const handleCountMinus = () => {
    if (count > min) {
      setCount(count - 1);
      onCount(count - 1);
    }
  };

  return (
    <Row>
      <Col className="d-flex" style={{ alignItems: "baseline" }}>
        <Button className="m-2" onClick={handleCountMinus}>
          -
        </Button>
        <p>{count}</p>
        <Button className="m-2" onClick={handleCountPlus}>
          +
        </Button>
      </Col>
    </Row>
  );
};

export default Contador;
