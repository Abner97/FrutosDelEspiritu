import { fruitsPoints } from "../context/frutos/interfaces";

import { QuestionModel } from "../models/question_model";
import { DES_AMOR, DES_GOZO, DES_PAZ,
  DES_PACIENCIA,
  DES_BENIGNIDAD,
  DES_FE,
  DES_MANSEDUMBRE,
  DES_DOMINIO_PROPIO,
  DES_BONDAD } from '../data/answers/all_descriptions';



export interface results {
  fruto: string;
  result: number;
  description: string
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
    { fruto: "Amor", result: Pamor, description: DES_AMOR },
    { fruto: "Benignidad", result: Pbenignidad, description: DES_BENIGNIDAD  },
    { fruto: "Bondad", result: Pbondad, description: DES_BONDAD  },
    { fruto: "Dominio propio", result: PDominioPropio, description: DES_DOMINIO_PROPIO  },
    { fruto: "Fe", result: Pfe, description: DES_FE  },
    { fruto: "Gozo", result: Pgozo, description: DES_GOZO  },
    { fruto: "Mansedumbre", result: Pmansedumbre, description: DES_MANSEDUMBRE  },
    { fruto: "Paciencia", result: Ppaciencia, description: DES_PACIENCIA  },
    { fruto: "Paz", result: Ppaz, description: DES_PAZ  },
  ];

  result.forEach((item) => {
    localStorage.setItem(`P${item.fruto}`, item.result.toString());
  });

  result.forEach((item) => {
    localStorage.setItem(`DES${item.fruto}`, item.description);
  });


};
