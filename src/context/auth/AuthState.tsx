import React, { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import authReducer from "./AuthReducer";
import { SAVE_CREDENTIALS } from "../types/";
import { authInterface, providerInterface } from "./interfaces";

interface AuthStateProps {
  children: React.ReactNode;
}

const AuthState: React.FC<AuthStateProps> = ({ children }: AuthStateProps) => {
  const initialState: authInterface = {
    email: localStorage.getItem("email") ? localStorage.getItem("email")! : "",
    name: localStorage.getItem("name") ? localStorage.getItem("name")! : "",
    cargando: true,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const Save = (name: string, email: string) => {
    localStorage.setItem("email", email);
    localStorage.setItem("name", name);

    dispatch({
      type: SAVE_CREDENTIALS,
      payload: {
        name: name,
        email: email,
      },
    });
  };

  const value: providerInterface = {
    cargando: state.cargando,
    email: state.email,
    name: state.name,
    saveCredentials: Save,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthState;
