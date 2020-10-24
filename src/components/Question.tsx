import React from "react";

//Components
import Answers from "./Answers";
import QuestionCard from "./QuestionCard";
import { Row, Col } from "react-bootstrap";

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
          <Row className="justify-content-center">
          <b style={{margin:"30px"}}><i style={{fontSize:"25px",color:"#36773a"}}>Estas son afirmaciones ideales, por favor responda lo mas honesto que le sea posible.</i>
          </b> </Row>
        </Col>
      </Row>
    </>
  );
};

export default Question;
