import React, { useState, useContext } from "react";
import { Button, Col } from "react-bootstrap";
import allAnswers from "../data/answers/all_answers";
import QuestionsContext from "../context/questions/QuestionsContext";
import FruitsContext from "../context/frutos/FruitsContext";

const Answers = () => {
  const [answers] = useState(allAnswers);
  const questionsContext = useContext(QuestionsContext);
  const fruitsContexts = useContext(FruitsContext);

  const { increaseIndex, questions, actualIndex } = questionsContext;
  const { increaseFruitPoint } = fruitsContexts;

  const onClick = (type: string, points: number) => {
    increaseIndex();
    increaseFruitPoint(type, points);
  };

  return (
    <>
      {answers.map((answer, i) => {
        return (
          <Col key={i} xl={{ span: "6" }}>
            <Button
              variant="dark"
              size="lg"
              className="w-100 m-1 hoverable"
              onClick={() =>
                onClick(questions[actualIndex].type, answer.points)
              }
            >
              {answer.answer}
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
