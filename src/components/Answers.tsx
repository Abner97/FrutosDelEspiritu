import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import allAnswers from "../data/answers/all_answers";

const Answers = () => {
  const [answers, setAnswers] = useState(allAnswers);

  return (
    <>
      {answers.map((e, i) => {
        return (
          <Col key={i} xl={{ span: "6" }}>
            <Button
              variant="primary"
              size="lg"
              className="w-100 m-1 hoverable"
              onClick={() => {}}
            >
              {e.answer}
            </Button>
          </Col>
        );
      })}
    </>
  );
};

// const getAnswer = (answ) => {
//   console.log(answ);
// };
export default Answers;
