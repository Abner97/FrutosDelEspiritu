import { auth, db } from "../../firebase";
import { SignUp } from "./interfaces";
import { UserModel } from "../../models/user_data_model";
import firebase from "firebase";

export const getUser = async (signUpData: SignUp) => {
  try {
    const usuariosRef = db.collection("usuarios");
    const query = await usuariosRef
      .where("email", "==", signUpData.email)
      .get();
    const user = UserModel.fromQuerySnapshot(query);
    if (user.length !== 0 && user !== null && user !== undefined) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const saveData = async (signUpData: SignUp) => {
  console.log(signUpData);
  try {
    console.log("enviando");
    // for (let i = 0; i <= 100; i++) {
    //   const increment = firebase.firestore.FieldValue.increment(1);
    //   const statsRef = db.collection("stats").doc("--users_count--");
    //   const usersRef = db.collection("usuarios").doc();
    //   const batch = db.batch();
    //   batch.set(usersRef, signUpData);
    //   batch.set(statsRef, { count: increment }, { merge: true });
    //   await batch.commit();
    // }
    const increment = firebase.firestore.FieldValue.increment(1);
    const statsRef = db.collection("stats").doc("--users_count--");
    const usersRef = db.collection("usuarios").doc();
    const batch = db.batch();
    batch.set(usersRef, signUpData);
    batch.set(statsRef, { count: increment }, { merge: true });
    await batch.commit();
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const signIn = async (email: string, password: string) => {
  await auth
    .signInWithEmailAndPassword(email, password)
    .then((cred) => {
      return cred.user;
    })
    .catch((err) => {
      return err;
    });
};
