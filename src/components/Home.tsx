import React from "react";
import { Container } from "react-bootstrap";
import Question from "./Question";
const Home = () => {
  return (
    <>
      <div
        className="d-flex h-100 justify-content-center  align-items-center"
        style={{ background: "#36773a" }}
      >
        <Container fluid className="h-full p-5">
          <Question />
        </Container>
      </div>
    </>
  );
};

export default Home;
