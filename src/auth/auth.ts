
import { auth } from "../firebase";
import { SignUp } from "./interfaces";



export const submitSignUpForm= async (signUpData:SignUp)=>{
   // event.preventDefault();
    console.log(signUpData.name);
    console.log(signUpData.email);
    
    //sign up to firebase
    await auth.createUserWithEmailAndPassword(signUpData.email,signUpData.name).then((cred)=>{
        console.log("User created" + cred);
        return cred;
    }).catch((err)=>{
        console.log(err);
        return err;
    });
}

export const signIn= async(email:string,password:string)=>{
   await auth.signInWithEmailAndPassword(email,password).then((cred)=>{
        return cred.user;
   }).catch((err)=>{
       return err;
   });

}

