import firebase from 'firebase/app';


class CountModel {
  /* eslint-disable */
  public constructor(
    /* eslint-disable */
    readonly count: number,
  ) {}

  static fromJson = (json: any): CountModel => {
    const castResponseModel: CountModel = new CountModel(
      json.count,
    );
    return castResponseModel;
  };

  static fromQuerySnapshot = (
    querySnapshot: firebase.firestore.QuerySnapshot
  ) => {
    const items: Array<CountModel> = [];
    if (querySnapshot === null) return items;
    querySnapshot.docs.forEach((item) => {
      const count = CountModel.fromJson(item.data());
      items.push(count);
    });
    return items;
  };
}
export default CountModel