import { fruitsInterface, fruitsPoints } from "../context/frutos/interfaces";
import { questionInterface } from "../context/questions/interfaces";

import { QuestionModel } from "../models/question_model";

export interface results {
  fruto: string;
  result: number;
}

export const getresults = (
  questions: Array<QuestionModel>,
  frutos: Array<fruitsPoints>
) => {
  console.log(questions);
  console.log(frutos);
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
        Pgozo = fruto.points / gozo;
        break;
      case "Amor":
        Pamor = fruto.points / amor;
        break;
      case "Benignidad":
        Pbenignidad = fruto.points / benignidad;
        break;
      case "Bondad":
        Pbondad = fruto.points / bondad;
        break;
      case "Dominio propio":
        PDominioPropio = fruto.points / dominioPropio;
        break;
      case "Fe":
        Pfe = fruto.points / fe;
        break;
      case "Mansedumbre":
        Pmansedumbre = fruto.points / mansedumbre;
        break;
      case "Paciencia":
        Ppaciencia = fruto.points / paciencia;
        break;
      case "Paz":
        Ppaz = fruto.points / paz;
        break;
      default:
        break;
    }
  }

  const result: results[] = [
    { fruto: "Amor", result: Pamor },
    { fruto: "Benignidad", result: Pbenignidad },
    { fruto: "Bondad", result: Pbondad },
    { fruto: "Dominio Propio", result: PDominioPropio },
    { fruto: "Fe", result: Pfe },
    { fruto: "Gozo", result: Pgozo },
    { fruto: "Mansedumbre", result: Pmansedumbre },
    { fruto: "Paciencia", result: Ppaciencia },
    { fruto: "Paz", result: Ppaz },
  ];

  result.forEach((item) => {
    localStorage.setItem(`P${item.fruto}`, item.result.toString());
  });
};
