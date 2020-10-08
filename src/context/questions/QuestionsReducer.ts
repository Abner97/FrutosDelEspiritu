import { questionInterface, actionInterface } from "./interfaces";
import { GET_QUESTIONS, INCREASE_INDEX } from "../types/index";

export default (state: questionInterface, action: actionInterface) => {
  switch (action.type) {
    case GET_QUESTIONS:
      const newState: questionInterface = {
        questions: action.payload,
        actualIndex: state.actualIndex,
      };
      console.log(action.payload);
      return newState;
    case INCREASE_INDEX:
      const newState2: questionInterface = {
        questions: state.questions,
        actualIndex: action.actualIndexPayload,
      };
      return newState2;
    default:
      return state;
  }
};
