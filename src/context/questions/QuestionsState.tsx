import React, { useReducer } from "react";
import QuestionsContext from "./QuestionsContext";
import QuestionsReducer from "./QuestionsReducer";
import {
  questionInterface,
  actionInterface,
  propsInterface,
} from "./interfaces";
import { RemoteDataSource } from "../../data/remote_data/remote_data_source";
import { GET_QUESTIONS } from "../types/index";
import { providerValueInterface } from "./interfaces";

const QuestionsState = (props: propsInterface) => {
  const remoteDataSource = new RemoteDataSource();

  const initialState: questionInterface = {
    questions: [],
  };
  const [state, dispatch] = useReducer(QuestionsReducer, initialState);

  const getQuestions = async () => {
    try {
      const allQuestions = await remoteDataSource.getQuestions();
      const action: actionInterface = {
        type: GET_QUESTIONS,
        payload: allQuestions,
      };
      dispatch(action);
    } catch (e) {
      console.log("ERROR getquestions questionstate");
    }
  };

  const value: providerValueInterface = {
    questions: state.questions,
    getQuestions,
  };

  return (
    <QuestionsContext.Provider value={value}>
      {props.children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsState;
