import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Container, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";

const Login = () => {
  const authContext = useContext(AuthContext);

  const { saveCredentials, email, name } = authContext;

  const [name2, setName] = useState("");

  const [email2, setEmail] = useState("");

  const [error, seterror] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (name !== "" && name !== null && email !== "" && email !== null) {
      history.push("/home");
    }
    // eslint-disable-next-line
  }, []);

  const ValidateEmail = () => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email2
      )
    ) {
      return true;
    }
    return false;
  };

  const sendCredentials = (
    event:
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.FormEvent<HTMLElement>
  ) => {
    event.preventDefault();
    if (name2 !== "" && name2 !== null && email2 !== "" && ValidateEmail()) {
      seterror(false);
      console.log("object");
      saveCredentials(name2, email2);

      history.push("/home");
    } else {
      seterror(true);
    }
  };

  const Error = () => {
    return (
      <div className="font-weight-bold w-100 bg-danger py-1 mb-2 d-flex justify-content-center">
        {ValidateEmail() ? (
          <h4>POR FAVOR LLENE TODOS LOS CAMPOS</h4>
        ) : (
          <h4>EL EMAIL INGRESADO NO ES VALIDO</h4>
        )}
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
              value={name2}
              placeholder="Ingresa tu nombre"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              value={email2}
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
