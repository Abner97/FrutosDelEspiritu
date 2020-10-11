import { createContext } from "react";
import { fruitsPoints, providerValueInterface } from "./interfaces";

export const defaultPoints: fruitsPoints[] = [
  { fruto: "Amor", points: 0 },
  { fruto: "Benignidad", points: 0 },
  { fruto: "Bondad", points: 0 },
  { fruto: "Dominio propio", points: 0 },
  { fruto: "Fe", points: 0 },
  { fruto: "Gozo", points: 0 },
  { fruto: "Mansedumbre", points: 0 },
  { fruto: "Paciencia", points: 0 },
  { fruto: "Paz", points: 0 },
];

const defaultValues: providerValueInterface = {
  frutos: defaultPoints,
  increaseFruitPoint: () => {},
};

const FruitsContext = createContext(defaultValues);

export default FruitsContext;
