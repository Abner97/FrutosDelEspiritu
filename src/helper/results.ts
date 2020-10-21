import { fruitsPoints } from "../context/frutos/interfaces";

import { QuestionModel } from "../models/question_model";

export interface results {
  fruto: string;
  result: number;
}

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
  console.log(gozo);
  for (let fruto of frutos) {
    switch (fruto.fruto) {
      case "Gozo":
        Pgozo = parseFloat((fruto.points / gozo).toPrecision(3));
        break;
      case "Amor":
        Pamor = parseFloat((fruto.points / amor).toPrecision(3));
        break;
      case "Benignidad":
        Pbenignidad = parseFloat((fruto.points / benignidad).toPrecision(3));
        break;
      case "Bondad":
        Pbondad = parseFloat((fruto.points / bondad).toPrecision(3));
        break;
      case "Dominio propio":
        PDominioPropio = parseFloat(
          (fruto.points / dominioPropio).toPrecision(3)
        );
        break;
      case "Fe":
        Pfe = parseFloat((fruto.points / fe).toPrecision(3));
        break;
      case "Mansedumbre":
        Pmansedumbre = parseFloat((fruto.points / mansedumbre).toPrecision(3));
        break;
      case "Paciencia":
        Ppaciencia = parseFloat((fruto.points / paciencia).toPrecision(3));
        break;
      case "Paz":
        Ppaz = parseFloat((fruto.points / paz).toPrecision(3));
        break;
      default:
        break;
    }
  }

  const result: results[] = [
    { fruto: "Amor", result: Pamor },
    { fruto: "Benignidad", result: Pbenignidad },
    { fruto: "Bondad", result: Pbondad },
    { fruto: "Dominio propio", result: PDominioPropio },
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
