export class AnswersModel {
  public constructor(readonly answer: string, readonly points: number) {}

  static fromJson = (json: any): AnswersModel => {
    const castResponseModel: AnswersModel = new AnswersModel(
      json.answer,
      json.points
    );
    return castResponseModel;
  };
}
