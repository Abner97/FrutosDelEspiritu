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

const preservedPoints = (): Array<fruitsPoints> => {
  defaultPoints.forEach((fruto, index) => {
    let localPoints = localStorage.getItem(fruto.fruto);

    if (localPoints !== null) {
      defaultPoints[index].points = parseInt(
        localStorage.getItem(fruto.fruto)!
      );
    }

    //fruto.points=parseInt(localStorage.getItem(fruto.fruto))?localStorage.getItem(fruto.fruto):"0";
  });

  return defaultPoints;
};

const defaultValues: providerValueInterface = {
  frutos: preservedPoints(),
  increaseFruitPoint: () => {},
  resetFrutosState: () => {},
};

const FruitsContext = createContext(defaultValues);

export default FruitsContext;
