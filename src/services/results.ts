import firebase from "firebase";
import { db } from "../firebase";
import { Results } from "../helper/results";

export const saveResultsOnFireBase = async (results: Array<Results>) => {
  const userEmail = localStorage.getItem("email");
  const timeStamp = firebase.firestore.Timestamp.fromDate(new Date());
  if (userEmail != null) {
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
    alert("Error al guardar datos");
  }
};
