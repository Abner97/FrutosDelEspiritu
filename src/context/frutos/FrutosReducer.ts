import { ADD_POINTS } from "../types/index";

import { actionInterface, fruitsInterface } from "./interfaces";

export default (state: fruitsInterface, action: actionInterface) => {
  switch (action.type) {
    case ADD_POINTS:
      const newState: fruitsInterface = {
        frutos: action.payload,
      };
      console.log(action.payload);
      return newState;

    default:
      return state;
  }
};
