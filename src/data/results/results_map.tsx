import { Results } from "../../helper/results";
import {
  COL_AMOR,
  COL_BENIGNIDAD,
  COL_BONDAD,
  COL_DOMINIO_PROPIO,
  COL_FE,
  COL_GOZO,
  COL_MANSEDUMBRE,
  COL_PACIENCIA,
  COL_PAZ,
} from "../answers/all_colors";
import {
  DES_AMOR,
  DES_BENIGNIDAD,
  DES_BONDAD,
  DES_DOMINIO_PROPIO,
  DES_FE,
  DES_GOZO,
  DES_MANSEDUMBRE,
  DES_PACIENCIA,
  DES_PAZ,
} from "../answers/all_descriptions";

export const resultsMap: Array<Results> = [
  { fruto: "Amor", result: 0, description: DES_AMOR, color: COL_AMOR },
  {
    fruto: "Benignidad",
    result: 0,
    description: DES_BENIGNIDAD,
    color: COL_BENIGNIDAD,
  },
  { fruto: "Bondad", result: 0, description: DES_BONDAD, color: COL_BONDAD },
  {
    fruto: "Dominio propio",
    result: 0,
    description: DES_DOMINIO_PROPIO,
    color: COL_DOMINIO_PROPIO,
  },
  { fruto: "Fe", result: 0, description: DES_FE, color: COL_FE },
  { fruto: "Gozo", result: 0, description: DES_GOZO, color: COL_GOZO },
  {
    fruto: "Mansedumbre",
    result: 0,
    description: DES_MANSEDUMBRE,
    color: COL_MANSEDUMBRE,
  },
  {
    fruto: "Paciencia",
    result: 0,
    description: DES_PACIENCIA,
    color: COL_PACIENCIA,
  },
  { fruto: "Paz", result: 0, description: DES_PAZ, color: COL_PAZ },
];
