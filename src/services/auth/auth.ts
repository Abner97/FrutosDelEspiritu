import { auth, db } from "../../firebase";
import { SignUp } from "./interfaces";
import { UserModel } from "../../models/user_data_model";
import firebase from "firebase/app";

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
    console.debug(error);
    return error;
  }
};

export function calculateAge(date: string): number {
  const ageDifMs = Date.now() - new Date(date).getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const updateUserInfo = async (signUpData: SignUp) => {
  const age = calculateAge(signUpData.birthDay);
  signUpData.age = age;
  await db
    .collection("usuarios")
    .where("email", "==", signUpData.email)
    .get()
    .then((data) => {
      data.docs.forEach((doc) => {
        db.collection("usuarios").doc(doc.id).update(signUpData);
      });
    });
};

export const saveData = async (signUpData: SignUp) => {
  try {
    const increment = firebase.firestore.FieldValue.increment(1);
    const statsRef = db.collection("stats").doc("--users_count--");
    const usersRef = db.collection("usuarios").doc();
    const batch = db.batch();
    const age = calculateAge(signUpData.birthDay);
    signUpData.age = age;
    batch.set(usersRef, signUpData);
    batch.set(statsRef, { count: increment }, { merge: true });
    await batch.commit();
  } catch (error) {
    console.debug(error);
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
