import React, { useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";
import FruitsContext from "../context/frutos/FruitsContext";
import QuestionsContext from "../context/questions/QuestionsContext";

const QuestionCard: React.FC = () => {
  const questionsContext = useContext(QuestionsContext);
  const authContext = useContext(AuthContext);

  const { saveCredentials } = authContext;

  const frutosContext = useContext(FruitsContext);

  const history = useHistory();
  const { questions, getQuestions, actualIndex } = questionsContext;

  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line
  }, []);

  const startAgain = () => {
    localStorage.clear();
    frutosContext.resetFrutosState();
    questionsContext.resetStateQuestions();
    saveCredentials("", "");
    history.push("/");
  };

  function showQuestions() {
    if (questions.length !== 0 && actualIndex <= questions.length - 1) {
      return questions[actualIndex].question;
    } else {
      console.log("aqui toy");
      startAgain();
      return <h1>No question available</h1>;
    }
  }

  return (
    <Card className="mb-3">
      <Card.Body style={{ background: "#90c73f" }}>
        <h2>{showQuestions()}</h2>
      </Card.Body>
    </Card>
  );
};

export default QuestionCard;
// Cuando se comete una injusticia en mi contra, y que no puedo
// solucionar, pongo el asunto en las manos de Dios sin hacer el mal.
