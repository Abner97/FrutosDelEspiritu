import { AnswersModel } from "../models/answer_model";
import { db } from "../firebase";
import { QuestionModel } from '../models/question_model';

export class Provider {
  
  answers = [];
  questions=[];


  _getFireCollection = async (collection)=>{
    const docRef = db.collection(collection);
    const response = await docRef.get().catch((error)=>{
        console.log(`Error al obtener ${collection} ${error}`);
    });

    return response;
  } 

  getAnswers = async () => {
    const response = await  this._getFireCollection("answers");
    response.forEach((answer) => {
      this.answers.push(new AnswersModel(answer.data()));
    });

    return this.answers;
  };

  
  getQuestions = async ()=>{
    const questions = await this._getFireCollection("questions");
    questions.forEach((question)=>{
      this.questions.push(new QuestionModel(question.data()));
    })

    return this.questions;
  }
  
}
