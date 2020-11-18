import { auth, db } from "../../firebase";
import { SignUp } from "./interfaces";
import { UserModel } from "../../models/user_data_model";

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
    await db.collection("usuarios").doc().set(signUpData);
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
