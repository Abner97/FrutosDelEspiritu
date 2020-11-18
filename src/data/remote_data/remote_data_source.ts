import { db } from "../../firebase";
import { QuestionModel } from "../../models/question_model";
import firebase from "firebase/app";


export class RemoteDataSource {
  private getFireCollection = async (
    collection: string
  ): Promise<firebase.firestore.QuerySnapshot> => {
    const docRef = db.collection(collection);
    const response = await docRef.get();
    return response;
  };

  getQuestions = async (): Promise<Array<QuestionModel>> => {
    const questions = await this.getFireCollection("questions");
    const questionModel = QuestionModel.fromQuerySnapshot(questions);
    return questionModel;
  };
}
