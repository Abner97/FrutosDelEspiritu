import React from "react";

//Components
import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "../components/LoginForm";

const Login: React.FC = () => {
  return (
    <div
      className="d-flex h-100 justify-content-start  align-items-center"
      style={{ background: "#36773a" }}
    >
      <Container fluid>
        <Row className="justify-content-center  ">
          <Col lg={4} xl={4} xs={12}>
            <LoginForm></LoginForm>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
