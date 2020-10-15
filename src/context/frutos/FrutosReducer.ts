import { ADD_POINTS, RESET_STATE } from "../types/index";

import { actionInterface, fruitsInterface } from "./interfaces";

export default (state: fruitsInterface, action: actionInterface) => {
  switch (action.type) {
    case ADD_POINTS:
      const newState: fruitsInterface = {
        frutos: action.payload,
      };
      return newState;
    case RESET_STATE:
      const newState2: fruitsInterface = {
        frutos: action.payload,
      };
      return newState2;
    default:
      return state;
  }
};
