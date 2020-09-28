import { AnswersModel } from "../models/answer_model";
import { db } from "../firebase";

export class AnswersProvider {
  answers = [];

  getAnswers = async () => {
    const docRef = db.collection("answers");
    const response = await docRef.get().catch((error)=>{
        console.log('Error al obtener las respuestas' + error);
    });

    response.forEach((answer) => {
      this.answers.push(new AnswersModel(answer.data()));
    });

    return this.answers;
  };
}
