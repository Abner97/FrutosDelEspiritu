import { createContext } from "react";
import { frutosPoints } from "./interfaces";

const defaultValues: frutosPoints = {
  Amor: 0,
  Benignidad: 0,
  Bondad: 0,
  Dominio_propio: 0,
  Fe: 0,
  Gozo: 0,
  Mansedumbre: 0,
  Paciencia: 0,
  Paz: 0,
};

export const FrutosContext = createContext(defaultValues);
