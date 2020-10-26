import React, { useState, useContext } from "react";

//Components
import { Button, Col } from "react-bootstrap";

//Helpers
import allAnswers from "../data/answers/all_answers";

//State
import QuestionsContext from "../context/questions/QuestionsContext";
import FruitsContext from "../context/frutos/FruitsContext";
import { useHistory } from "react-router-dom";

const Answers = () => {
  const [answers] = useState(allAnswers);

  //Context
  const questionsContext = useContext(QuestionsContext);
  const fruitsContexts = useContext(FruitsContext);
  const { increaseIndex, questions, actualIndex } = questionsContext;
  const { increaseFruitPoint } = fruitsContexts;

  const history = useHistory();

  const onClick = (type: string, points: number) => {
    if (actualIndex === questions.length - 1) {
      increaseIndex();
      increaseFruitPoint(type, points);
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
              style={{background:"#36773a"}}
              onClick={() =>
                onClick(questions[actualIndex].type, answer.points)
              }
            >
              <b>{answer.answer}</b>{" "}
            </Button>
          </Col>
        );
      })}
    </>
  );
};

export default Answers;
