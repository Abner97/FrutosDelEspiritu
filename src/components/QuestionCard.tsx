import React, { useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import QuestionsContext from "../context/questions/QuestionsContext";

const QuestionCard: React.FC = () => {
  const questionsContext = useContext(QuestionsContext);
  const { questions, getQuestions, actualIndex } = questionsContext;

  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line
  });

  return (
    <Card className="mb-3">
      <Card.Body style={{ background: "#90c73f" }}>
        <h2>{questions.length !== 0 && questions[actualIndex].question}</h2>
      </Card.Body>
    </Card>
  );
};

export default QuestionCard;
// Cuando se comete una injusticia en mi contra, y que no puedo
// solucionar, pongo el asunto en las manos de Dios sin hacer el mal.
