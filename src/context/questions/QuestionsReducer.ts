import { questionInterface, actionInterface } from "./interfaces";
import { GET_QUESTIONS } from "../types/index";

export default (state: questionInterface, action: actionInterface) => {
  switch (action.type) {
    case GET_QUESTIONS:
      const newState: questionInterface = {
        questions: action.payload,
      };
      console.log(action.payload);
      return newState;
    default:
      return state;
  }
};
