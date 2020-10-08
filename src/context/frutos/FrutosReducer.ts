import {
  AMOR,
  BENIGNIDAD,
  BONDAD,
  DOMINIO_PROPIO,
  FE,
  GET_QUESTIONS,
  GOZO,
  INCREASE_INDEX,
  MANSEDUMBRE,
  PACIENCIA,
  PAZ,
} from "../types/index";

import { frutosPoints } from "./interfaces";

export default (state: frutosPoints, action: actionInterface) => {
  switch (action.type) {
    case AMOR:
      const newState: questionInterface = {
        questions: action.payload,
        actualIndex: state.actualIndex,
      };
      console.log(action.payload);

    default:
      return state;
  }
};
