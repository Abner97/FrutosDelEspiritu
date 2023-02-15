import { questionInterface, actionInterface } from "./interfaces";
import { GET_QUESTIONS, INCREASE_INDEX, RESET_STATE } from "../types/index";

export default (state: questionInterface, action: actionInterface) => {
  switch (action.type) {
    case GET_QUESTIONS:
      const newState: questionInterface = {
        questions: action.payload,
        actualIndex: state.actualIndex,
      };

      return newState;
    case INCREASE_INDEX:
      const newState2: questionInterface = {
        questions: state.questions,
        actualIndex: action.actualIndexPayload,
      };
      return newState2;
    case RESET_STATE:
      const newState3: questionInterface = {
        questions: state.questions,
        actualIndex: 0,
      };
      return newState3;
    default:
      return state;
  }
};
