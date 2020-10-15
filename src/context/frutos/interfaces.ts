import { Domain } from "domain";

export interface propsInterface {
  children: React.ReactNode;
}

export interface fruitsPoints {
  fruto: string;
  points: number;
}

export interface fruitsInterface {
  frutos: Array<fruitsPoints>;
}

export interface providerValueInterface {
  frutos: Array<fruitsPoints>;
  increaseFruitPoint: Function;
  resetFrutosState: Function;
}

export interface actionInterface {
  type: string;
  payload: Array<fruitsPoints>;
}
