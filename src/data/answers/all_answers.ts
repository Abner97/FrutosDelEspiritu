import { AnswersModel } from "../../models/answer_model";

const siempre = new AnswersModel("Siempre", 4);
const casiSiempre = new AnswersModel("Casi siempre", 3);
const aveces = new AnswersModel("A veces", 2);
const poco = new AnswersModel("Poco", 1);
const nunca = new AnswersModel("Nunca", 0);

const allAnswers: Array<AnswersModel> = [
  siempre,
  casiSiempre,
  aveces,
  poco,
  nunca,
];

export default allAnswers;
