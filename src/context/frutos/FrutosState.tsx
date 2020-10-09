import React, { useReducer } from "react";
import { ADD_POINTS } from "../types";
import FruitsContext, { defaultPoints } from "./FruitsContext";
import FrutosReducer from "./FrutosReducer";
import {
  actionInterface,
  fruitsInterface,
  fruitsPoints,
  propsInterface,
  providerValueInterface,
} from "./interfaces";

// const value:providerValueInterface={

// }

const FrutosState = (props: propsInterface) => {
  const getStoragePoint = (fruit: string): number => {
    const index = localStorage.getItem(fruit);
    if (index !== null) {
      return parseInt(index);
    } else {
      return 0;
    }
  };

  const initialPoints: Array<fruitsPoints> = [
    { fruto: "Amor", points: getStoragePoint("Amor") },
    { fruto: "Benignidad", points: getStoragePoint("Benignidad") },
    { fruto: "Bondad", points: getStoragePoint("Bondad") },
    { fruto: "Dominio_propio", points: getStoragePoint("Dominio_propio") },
    { fruto: "Fe", points: getStoragePoint("Fe") },
    { fruto: "Gozo", points: getStoragePoint("Gozo") },
    { fruto: "Mansedumbre", points: getStoragePoint("Mansedumbre") },
    { fruto: "Paciencia", points: getStoragePoint("Paciencia") },
    { fruto: "Paz", points: getStoragePoint("Paz") },
  ];

  const initialState: fruitsInterface = {
    frutos: initialPoints,
  };

  const [state, dispatch] = useReducer(FrutosReducer, initialState);

  const savePoints = (points: number, fruit: string) => {
    localStorage.setItem(fruit, points.toString());
  };

  const AddPoint = (fruit: string, points: number) => {
    const tempFruits = state.frutos;

    tempFruits.find((f, index) => {
      if (f.fruto === fruit) {
        tempFruits[index].points += points;
        savePoints(tempFruits[index].points, fruit);
      }
    });

    const action: actionInterface = {
      type: ADD_POINTS,
      payload: tempFruits,
    };

    dispatch(action);
  };

  const value: providerValueInterface = {
    frutos: state.frutos,
    increaseFruitPoint: AddPoint,
  };

  return (
    <FruitsContext.Provider value={value}>
      {props.children}
    </FruitsContext.Provider>
  );
};

export default FrutosState;
