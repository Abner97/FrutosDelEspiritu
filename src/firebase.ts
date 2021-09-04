import "firebase/firestore";
import "firebase/auth";
import { initializeApp } from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyAmy2ktE4PNJtMXTEFFp589NJAY9Ugw2vU",
  authDomain: "test-frutos-del-espiritu.firebaseapp.com",
  databaseURL: "https://test-frutos-del-espiritu.firebaseio.com",
  projectId: "test-frutos-del-espiritu",
  storageBucket: "test-frutos-del-espiritu.appspot.com",
  messagingSenderId: "836707464961",
  appId: "1:836707464961:web:6b8ae013acb9f9f3764d00",
  measurementId: "G-4QPTTYSM9V",
};
// Initialize Firebase
const fb = initializeApp(firebaseConfig);
export const auth = fb.auth();
export const db = fb.firestore();

//db.settings({})
