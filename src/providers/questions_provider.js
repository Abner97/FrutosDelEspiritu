import { QuestionModel } from "../models/question_model";
import { db } from "../firebase";

export class QuestionProvider {
  questions = [];

  getQuestions() {
    const docRef = db.collection('questions')
    const response = await docRef.get().catch((error)=>{
      console.log('Errror al obtener las preguntas ' + error);
    });
    
    response.forEach((question)=>{
        questions.push(new QuestionModel(question.data()));
    });

    return this.questions;
  }
}
