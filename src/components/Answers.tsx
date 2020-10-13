import React, { useState, useContext } from "react";
import { Button, Col } from "react-bootstrap";
import allAnswers from "../data/answers/all_answers";
import QuestionsContext from "../context/questions/QuestionsContext";
import FruitsContext from "../context/frutos/FruitsContext";
import { useHistory } from "react-router-dom";
const Answers = () => {
  const [answers] = useState(allAnswers);
  const questionsContext = useContext(QuestionsContext);
  const fruitsContexts = useContext(FruitsContext);

  const { increaseIndex, questions, actualIndex } = questionsContext;
  const { increaseFruitPoint } = fruitsContexts;

  const history = useHistory();

  const onClick = (type: string, points: number) => {
    if (actualIndex == questions.length - 1) {
      increaseIndex();
      history.push("/results");
    } else {
      increaseIndex();
      increaseFruitPoint(type, points);
    }
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
