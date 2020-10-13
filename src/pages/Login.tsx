import React, { useContext, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";

const Login = () => {
  const authContext = useContext(AuthContext);

  const { saveCredentials } = authContext;

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [error, seterror] = useState(false);

  const history = useHistory();

  const sendCredentials = (
    event:
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.FormEvent<HTMLElement>
  ) => {
    event.preventDefault();
    if (name !== "" && name !== null && email !== "" && email !== null) {
      seterror(false);
      console.log("object");
      saveCredentials(name, email);

      history.push("/home");
    } else {
      seterror(true);
    }
  };

  const Error = () => {
    return (
      <div className="font-weight-bold w-100 bg-danger py-1 mb-2 d-flex justify-content-center">
        <h4>POR FAVOR LLENE TODOS LOS CAMPOS</h4>
      </div>
    );
  };

  return (
    <Container fluid className="mt-4">
      <Col xs={10} sm={10} md={10} lg={6}>
        {error && <Error />}
        <Form onSubmit={(event) => sendCredentials(event)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Ingresa tu nombre"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Ingresa tu email"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Comenzar test
          </Button>
        </Form>
      </Col>
    </Container>
  );
};

export default Login;
