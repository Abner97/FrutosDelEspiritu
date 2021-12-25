import { fruitsPoints } from "../context/frutos/interfaces";

import { QuestionModel } from "../models/question_model";
import {
  DES_AMOR,
  DES_GOZO,
  DES_PAZ,
  DES_PACIENCIA,
  DES_BENIGNIDAD,
  DES_FE,
  DES_MANSEDUMBRE,
  DES_DOMINIO_PROPIO,
  DES_BONDAD,
} from "../data/answers/all_descriptions";
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
} from "../data/answers/all_colors";

export interface Results {
  fruto: string;
  result: number;
  description: string;
  color: string;
}
const calculateResults = (points: number, numberofQuestions: number) => {
  const porcentage =
    (parseFloat((points / numberofQuestions).toFixed(2)) * 100) / 4;
  return porcentage;
};

export const getresults = (
  questions: Array<QuestionModel>,
  frutos: Array<fruitsPoints>
) => {
  let amor = 0;
  let fe = 0;
  let benignidad = 0;
  let bondad = 0;
  let dominioPropio = 0;
  let gozo = 0;
  let mansedumbre = 0;
  let paciencia = 0;
  let paz = 0;

  let Pamor = 0;
  let Pfe = 0;
  let Pbenignidad = 0;
  let Pbondad = 0;
  let PDominioPropio = 0;
  let Pgozo = 0;
  let Pmansedumbre = 0;
  let Ppaciencia = 0;
  let Ppaz = 0;

  for (let question of questions) {
    switch (question.type) {
      case "Gozo":
        gozo++;

        break;
      case "Amor":
        amor++;
        break;
      case "Benignidad":
        benignidad++;
        break;
      case "Bondad":
        bondad++;
        break;
      case "Dominio propio":
        dominioPropio++;
        break;
      case "Fe":
        fe++;
        break;
      case "Mansedumbre":
        mansedumbre++;
        break;
      case "Paciencia":
        paciencia++;
        break;
      case "Paz":
        paz++;
        break;
      default:
        break;
    }
  }

  for (let fruto of frutos) {
    switch (fruto.fruto) {
      case "Gozo":
        Pgozo = calculateResults(fruto.points, gozo);
        break;
      case "Amor":
        Pamor = calculateResults(fruto.points, amor);
        break;
      case "Benignidad":
        Pbenignidad = calculateResults(fruto.points, benignidad);
        break;
      case "Bondad":
        Pbondad = calculateResults(fruto.points, bondad);
        break;
      case "Dominio propio":
        PDominioPropio = calculateResults(fruto.points, dominioPropio);
        break;
      case "Fe":
        Pfe = calculateResults(fruto.points, fe);
        break;
      case "Mansedumbre":
        Pmansedumbre = calculateResults(fruto.points, mansedumbre);
        break;
      case "Paciencia":
        Ppaciencia = calculateResults(fruto.points, paciencia);
        break;
      case "Paz":
        Ppaz = calculateResults(fruto.points, paz);
        break;
      default:
        break;
    }
  }

  const result: Results[] = [
    { fruto: "Amor", result: Pamor, description: DES_AMOR, color: COL_AMOR },
    {
      fruto: "Benignidad",
      result: Pbenignidad,
      description: DES_BENIGNIDAD,
      color: COL_BENIGNIDAD,
    },
    {
      fruto: "Bondad",
      result: Pbondad,
      description: DES_BONDAD,
      color: COL_BONDAD,
    },
    {
      fruto: "Dominio propio",
      result: PDominioPropio,
      description: DES_DOMINIO_PROPIO,
      color: COL_DOMINIO_PROPIO,
    },
    { fruto: "Fe", result: Pfe, description: DES_FE, color: COL_FE },
    { fruto: "Gozo", result: Pgozo, description: DES_GOZO, color: COL_GOZO },
    {
      fruto: "Mansedumbre",
      result: Pmansedumbre,
      description: DES_MANSEDUMBRE,
      color: COL_MANSEDUMBRE,
    },
    {
      fruto: "Paciencia",
      result: Ppaciencia,
      description: DES_PACIENCIA,
      color: COL_PACIENCIA,
    },
    { fruto: "Paz", result: Ppaz, description: DES_PAZ, color: COL_PAZ },
  ];

  result.forEach((item) => {
    localStorage.setItem(`P${item.fruto}`, item.result.toString());
  });

  result.forEach((item) => {
    localStorage.setItem(`DES${item.fruto}`, item.description);
  });
};
