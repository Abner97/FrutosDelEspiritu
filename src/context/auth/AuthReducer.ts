import { SAVE_CREDENTIALS } from "../types/";
import { actionInterface, authInterface } from "./interfaces";

export default (state: authInterface, action: actionInterface) => {
  switch (action.type) {
    case SAVE_CREDENTIALS:
      const newState: authInterface = {
        email: action.payload.email,
        name: action.payload.name,
        cargando: false,
      };

      return newState;
    default:
      return state;
  }
};
