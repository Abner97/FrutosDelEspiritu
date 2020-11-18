import React, { useContext } from "react";

//Components
import { Button } from "react-bootstrap";

//State
import { useHistory } from "react-router-dom";
import FruitsContext from "../context/frutos/FruitsContext";
import QuestionsContext from "../context/questions/QuestionsContext";
import { AuthContext } from "../context/auth/AuthContext";

const StartAgainButton: React.FC = () => {
  //State Handling
  const authContext = useContext(AuthContext);
  const { saveCredentials } = authContext;
  const frutosContext = useContext(FruitsContext);
  const questionsContext = useContext(QuestionsContext);
  const history = useHistory();

  const startAgain = () => {
    localStorage.clear();
    frutosContext.resetFrutosState();
    questionsContext.resetStateQuestions();
    saveCredentials("", "");
    history.push("/");
  };

  return (
    <Button variant="danger" className="mr-5" onClick={() => startAgain()}>
      Volver a hacer el Test
    </Button>
  );
};

export default StartAgainButton;
