import React, { useContext, useEffect, useState } from "react";

//Components
import { Card } from "react-bootstrap";
import { useTransition, animated } from "react-spring";

//State
import { useHistory } from "react-router-dom";
import QuestionsContext from "../context/questions/QuestionsContext";

const QuestionCard: React.FC = () => {
  const questionsContext = useContext(QuestionsContext);

  const history = useHistory();
  const { questions, getQuestions, actualIndex } = questionsContext;
  const [loading, setLoading] = useState(true);

  const transitions = useTransition(actualIndex, (p) => p, {
    from: {
      opacity: 0,
      transform: "translate3d(100%,0,0)",
      position: "absolute",
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0%,0,0)",
      position: "relative",
    },
    leave: {
      opacity: 0,
      transform: "translate3d(-50%,0,0)",
      position: "absolute",
    },
  });

  useEffect(() => {
    getQuestions().then(() => {
      setLoading(false);
    });

    if (actualIndex > 29) {
      console.log(actualIndex);
      history.push("/results");
    }
    // eslint-disable-next-line
  }, []);

  // const startAgain = () => {
  //   localStorage.clear();
  //   frutosContext.resetFrutosState();
  //   questionsContext.resetStateQuestions();
  //   saveCredentials("", "");
  //   history.push("/");
  // };

  // function showQuestions() {
  //   if (questions.length !== 0 && actualIndex <= questions.length - 1) {
  //     return questions[actualIndex].question;
  //   } else {
  //     console.log("aqui toy");
  //     startAgain();
  //   }
  // }

  return (
    <>
      {transitions.map(({ props, key }) => (
        <animated.div key={key} style={props}>
          <Card className="mb-3">
            <Card.Body style={{ background: "#90c73f" }}>
              <h2>{loading ? "LOADING" : questions[actualIndex].question}</h2>
            </Card.Body>
          </Card>
        </animated.div>
      ))}
    </>
  );
};

export default QuestionCard;
// Cuando se comete una injusticia en mi contra, y que no puedo
// solucionar, pongo el asunto en las manos de Dios sin hacer el mal.
