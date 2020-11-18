import { db } from "../firebase";
import { Results } from "../helper/results";

export const saveResultsOnFireBase = async (results: Array<Results>) => {
  const userEmail = localStorage.getItem("email");

  if (userEmail != null) {
    await db
      .collection("usuarios")
      .where("email", "==", userEmail)
      .get()
      .then((data) => {
        data.docs.forEach((doc) => {
          db.collection("usuarios").doc(doc.id).update({ results: results });
        });
      });
  } else {
    alert("Error al guardar datos");
  }
};
