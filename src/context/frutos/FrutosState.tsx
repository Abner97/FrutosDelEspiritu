import React, { useReducer } from "react";
import { ADD_POINTS, RESET_STATE } from "../types";
import FruitsContext from "./FruitsContext";
import FrutosReducer from "./FrutosReducer";
import {
  actionInterface,
  fruitsInterface,
  fruitsPoints,
  propsInterface,
  providerValueInterface,
} from "./interfaces";

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
    { fruto: "Dominio propio", points: getStoragePoint("Dominio propio") },
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

    tempFruits.map((f, index) => {
      if (f.fruto === fruit) {
        tempFruits[index].points += points;
        savePoints(tempFruits[index].points, fruit);
      }
      return "";
    });

    const action: actionInterface = {
      type: ADD_POINTS,
      payload: tempFruits,
    };

    dispatch(action);
  };

  const resetFrutosState = () => {
    const tempFruits = [
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
    const action: actionInterface = {
      type: RESET_STATE,
      payload: tempFruits,
    };
    tempFruits.map((f, index) => {
      savePoints(0, f.fruto);
      return null;
    });
    dispatch(action);
  };

  const value: providerValueInterface = {
    frutos: state.frutos,
    increaseFruitPoint: AddPoint,
    resetFrutosState,
  };

  return (
    <FruitsContext.Provider value={value}>
      {props.children}
    </FruitsContext.Provider>
  );
};

export default FrutosState;
