import React, { useReducer } from "react";
import QuestionsContext from "./QuestionsContext";
import QuestionsReducer from "./QuestionsReducer";
import {
  questionInterface,
  actionInterface,
  propsInterface,
} from "./interfaces";
import { RemoteDataSource } from "../../data/remote_data/remote_data_source";
import { GET_QUESTIONS, INCREASE_INDEX, RESET_STATE } from "../types/index";
import { providerValueInterface } from "./interfaces";

const getStorageIndex = (): number => {
  const index = localStorage.getItem("actualIndex");
  if (index !== null) {
    return parseInt(index);
  } else {
    return 0;
  }
};

const QuestionsState = (props: propsInterface) => {
  const remoteDataSource = new RemoteDataSource();

  const initialState: questionInterface = {
    questions: [],
    actualIndex: getStorageIndex(),
  };

  const [state, dispatch] = useReducer(QuestionsReducer, initialState);

  const resetStateQuestions = () => {
    const action: actionInterface = {
      type: RESET_STATE,
      payload: [],
      actualIndexPayload: 0,
    };
    saveIndex(0);
    dispatch(action);
  };

  const getQuestions = async () => {
    try {
      const allQuestions = await remoteDataSource.getQuestions();
      console.log(allQuestions);
      localStorage.setItem("Questions", JSON.stringify(allQuestions));
      const action: actionInterface = {
        type: GET_QUESTIONS,
        payload: allQuestions,
        actualIndexPayload: state.actualIndex,
      };
      dispatch(action);
    } catch (e) {
      alert("ERROR getquestions questionstate " + e);
    }
  };

  const increaseIndex = () => {
    const newIndex = state.actualIndex + 1;
    saveIndex(newIndex);
    const action: actionInterface = {
      type: INCREASE_INDEX,
      payload: state.questions,
      actualIndexPayload: newIndex,
    };
    dispatch(action);
  };

  const saveIndex = (index: number) => {
    localStorage.setItem("actualIndex", index.toString());
  };

  const value: providerValueInterface = {
    questions: state.questions,
    getQuestions,
    actualIndex: state.actualIndex,
    increaseIndex,
    resetStateQuestions,
  };

  return (
    <QuestionsContext.Provider value={value}>
      {props.children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsState;
