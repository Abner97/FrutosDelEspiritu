// export class QuestionModel extends Model({question:String,type:String}){}

export class QuestionModel {
  public constructor(readonly question: string, readonly type: string) {}

  static fromJson = (json: any): QuestionModel => {
    const castResponseModel: QuestionModel = new QuestionModel(
      json.question,
      json.type
    );
    return castResponseModel;
  };

  static fromQuerySnapshot = (
    querySnapshot: firebase.firestore.QuerySnapshot
  ) => {
    const items: Array<QuestionModel> = [];
    if (querySnapshot === null) return items;
    querySnapshot.docs.forEach((item) => {
      const question = QuestionModel.fromJson(item.data());
      items.push(question);
    });
    return items;
  };
}
