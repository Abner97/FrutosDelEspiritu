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
    config: {
      mass: 10,
      friction: 100,
      tension: 600,
    },
  });

  useEffect(() => {
    getQuestions().then(() => {
      setLoading(false);
    });

    if (actualIndex > 28) {
      history.push("/results");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {transitions.map(({ props, key }) => (
        <animated.div key={key} style={props}>
          <Card className="mb-3">
            <Card.Body style={{ background: "#90c73f", textAlign: "center" }}>
              <h1>{loading ? "LOADING" : questions[actualIndex].question}</h1>
            </Card.Body>
          </Card>
        </animated.div>
      ))}
    </>
  );
};

export default QuestionCard;
