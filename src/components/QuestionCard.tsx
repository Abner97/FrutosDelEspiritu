import React, { useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import QuestionsContext from "../context/questions/QuestionsContext";

const QuestionCard = () => {
  const questionsContext = useContext(QuestionsContext);
  const { questions, getQuestions } = questionsContext;
  useEffect(() => {
    getQuestions();
    // console.log(questions);
  }, [getQuestions]);
  return (
    <Card className="mb-3">
      <Card.Body>
        {/* {questions !== [] ? <h2>{questions[0]}</h2> : <h2>asd</h2>} */}
      </Card.Body>
    </Card>
  );
};

export default QuestionCard;
// Cuando se comete una injusticia en mi contra, y que no puedo
// solucionar, pongo el asunto en las manos de Dios sin hacer el mal.
