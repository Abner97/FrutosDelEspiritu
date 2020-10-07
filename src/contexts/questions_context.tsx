import React, { createContext, useState } from "react";
import { RemoteDataSource } from "../data/remote_data/remote_data_source";

const questionsProvider = new RemoteDataSource();

export const QuestionsContext = createContext([]);

const QuestionsContextProvider = (props: any) => {
  const [questions, setQuestions] = useState([]);

  // useEffect(() => {
  //     const questions =await  questionsProvider.getQuestions();
  //     return () => {
  //         cleanup
  //     }
  // }, [input])

  return (
    <QuestionsContext.Provider value={questions}>
      {props.children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsContextProvider;
