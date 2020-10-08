import React, { useContext, useEffect } from "react";
import Answers from "./Answers";
import QuestionCard from "./QuestionCard";
import { Row, Col } from "react-bootstrap";
import QuestionsContext from "../context/questions/QuestionsContext";

const Question = () => {
  return (
    <>
      <Row className="justify-content-center align-content-center">
        <Col xl={{ span: 8 }}>
          <QuestionCard />
        </Col>
      </Row>
      <Row className="justify-content-center align-content-center">
        <Col xl={{ span: 8 }}>
          <Row className="justify-content-center align-content-center">
            <Answers />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Question;
