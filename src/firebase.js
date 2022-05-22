import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import{getStorage} from "firebase/storage"
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBE_aZ8lqKKg4RvevMV7QEdPkZx_vaxisA",
  authDomain: "jsdataentry-c9bf7.firebaseapp.com",
  databaseURL: "https://jsdataentry-c9bf7-default-rtdb.firebaseio.com",
  projectId: "jsdataentry-c9bf7",
  storageBucket: "jsdataentry-c9bf7.appspot.com",
  messagingSenderId: "1041364413154",
  appId: "1:1041364413154:web:f4e8cd6292f4c6a04a8cbb"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
export default app;