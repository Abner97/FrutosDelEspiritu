import React from "react";

//Components
import Answers from "./Answers";
import QuestionCard from "./QuestionCard";
import { Row, Col, Container } from "react-bootstrap";

const Question: React.FC<React.HtmlHTMLAttributes<Row>> = () => {
  return (
    <Container fluid className="h-full p-5 animation position-absolute">
      <Row className="justify-content-center align-content-center mt-5">
        <Col xl={8} sm={12} xs={12}>
          <QuestionCard />
        </Col>
      </Row>
      <Row className="justify-content-center align-content-center">
        <Col xl={{ span: 8 }}>
          <Row className="justify-content-center align-content-center">
            <Answers />
          </Row>
          <Row className="justify-content-center">
            <b style={{ margin: "30px" }}>
              <i style={{ color: "#36773a" }} className="text-responsive2">
                Estas son afirmaciones ideales, por favor responda lo mas
                honesto que le sea posible.
              </i>
            </b>{" "}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Question;
