import { auth, db } from "../../firebase";
import { SignUp } from "./interfaces";
import { UserModel } from "../../models/user_data_model";
import CountModel from '../../models/count_model';
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
    const count  = await getCount();
    await saveCount(count.count)
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

/* eslint-disable */
export const getCount = async (): Promise<CountModel> => {
  try {
    const countRef = db.collection("count");
    const query = await countRef.get();
    const count = CountModel.fromQuerySnapshot(query);
    console.log('en count')
    console.log(count[0].count)
    return count[0];
  } catch (error) {
    console.log(error);
    return error;
  }
};

/* eslint-disable */
export const saveCount = async (count: number) => {
  try {
    const newCount = count + 1
    console.log('salvando count')
    console.log(newCount)
    const countModel = new CountModel(newCount)
    await db.collection("count/").doc('3u6lhiKPmGsUiAtFs0W0').set({
      count:newCount
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};