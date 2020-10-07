import { db } from "../../firebase";
import { QuestionModel } from "../../models/question_model";

export class RemoteDataSource {
  _getFireCollection = async (
    collection: string
  ): Promise<firebase.firestore.QuerySnapshot> => {
    const docRef = db.collection(collection);
    const response = await docRef.get();
    return response;
  };

  getQuestions = async (): Promise<Array<QuestionModel>> => {
    const questions = await this._getFireCollection("questions");
    const questionModel = QuestionModel.fromQuerySnapshot(questions);
    return questionModel;
  };
}
