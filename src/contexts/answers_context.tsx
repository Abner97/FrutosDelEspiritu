import React, { createContext, useState, Context } from "react";

export const AnswersContext = createContext([]);

const AnswersContextProvider = (props: any) => {
  const [answers, setAnswers] = useState([]);

  return (
    <AnswersContext.Provider value={answers}>
      {props.children}
    </AnswersContext.Provider>
  );
};

export default AnswersContextProvider;
