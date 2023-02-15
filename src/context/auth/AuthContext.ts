import { createContext } from "react";
import { providerInterface } from "./interfaces";

const defaultValue: providerInterface = {
  name: "",
  saveCredentials: (name: string, email: string) => {},
  email: "",
  cargando: true,
};

export const AuthContext = createContext(defaultValue);
