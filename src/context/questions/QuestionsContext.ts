import { createContext } from "react";
import { providerValueInterface } from "./interfaces";

const defaultValue: providerValueInterface = {
  questions: [],
  getQuestions: () => {},
};

const QuestionsContext = createContext(defaultValue);

export default QuestionsContext;
