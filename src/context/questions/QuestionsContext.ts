import { createContext } from "react";
import { providerValueInterface } from "./interfaces";

const defaultValue: providerValueInterface = {
  questions: [],
  getQuestions: () => {},
  actualIndex: 0,
  increaseIndex: () => {},
  resetStateQuestions: () => {},
};

const QuestionsContext = createContext(defaultValue);

export default QuestionsContext;
