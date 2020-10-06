import {createContext} from 'react'
import { Provider } from '../providers/Provider';

export const questionsContext = createContext();

const questionsProvider = new Provider();
const questions = questionsProvider.getQuestions();

const QuestionsContextProvider = createContext()