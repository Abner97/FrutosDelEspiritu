import firebase from "firebase";
import { db } from "../firebase";
import { Results } from "../helper/results";
import { saveData } from "./auth/auth";
import { UserModel } from "../models/user_data_model";
import { SignUp } from "./auth/interfaces";

export const saveResultsOnFireBase = async (results: Array<Results>) => {
  const userEmail = localStorage.getItem("email");
  const newUser = localStorage.getItem("newUser");
  const timeStamp = firebase.firestore.Timestamp.fromDate(new Date());
  if (userEmail != null) {
    if (newUser === "no") {
      await db
        .collection("usuarios")
        .where("email", "==", userEmail)
        .get()
        .then((data) => {
          data.docs.forEach((doc) => {
            db.collection("usuarios")
              .doc(doc.id)
              .update({
                test: {
                  results,
                  submitedAt: timeStamp,
                },
              });
          });
        });
    } else if (newUser === "yes") {
      const userInfo = UserModel.fromJson(
        JSON.parse(localStorage.getItem("userInfo") || "{}")
      );

      const userInfoJSON: SignUp = {
        name: userInfo.name,
        email: userInfo.email,
        birthDay: userInfo.birthDay,
        country: userInfo.country,
      };
      console.log(userInfoJSON);
      await saveData(userInfoJSON);
      await db
        .collection("usuarios")
        .where("email", "==", userEmail)
        .get()
        .then((data) => {
          data.docs.forEach((doc) => {
            db.collection("usuarios")
              .doc(doc.id)
              .update({
                test: {
                  results,
                  submitedAt: timeStamp,
                },
              });
          });
        });
    } else {
      console.log("algo ta pasando aki prro");
    }
  } else {
    alert("Error al guardar datos");
  }
};
