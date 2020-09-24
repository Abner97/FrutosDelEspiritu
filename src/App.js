import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navbar";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    // <div className="h-100 bg-primary">
    //   <Navigation></Navigation>
    //   <Home></Home>
    // </div>
    <>
      <Navigation></Navigation>
      <Container fluid>
        <Row>
          <Col>
            <Home></Home>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
