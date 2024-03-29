import firebase from "firebase/app";
export class UserModel {
  public constructor(
    readonly name: string,
    readonly email: string,
    readonly country: string,
    readonly birthDay: string
  ) {}

  static fromJson = (json: any): UserModel => {
    const castResponseModel: UserModel = new UserModel(
      json.name,
      json.email,
      json.country,
      json.birthDay
    );
    return castResponseModel;
  };

  static fromQuerySnapshot = (
    querySnapshot: firebase.firestore.QuerySnapshot
  ) => {
    const items: Array<UserModel> = [];
    if (querySnapshot === null) return items;
    querySnapshot.docs.forEach((item) => {
      const users = UserModel.fromJson(item.data());
      items.push(users);
    });
    return items;
  };
}
