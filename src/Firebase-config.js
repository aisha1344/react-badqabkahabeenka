import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDLkf9yG4P6au9jZDk3HfB9YRIX3n1dZJM",
    authDomain: "dumarka-d7087.firebaseapp.com",
    projectId: "dumarka-d7087",
    storageBucket: "dumarka-d7087.appspot.com",
    messagingSenderId: "907347687974",
    appId: "1:907347687974:web:c78343cc088c7b292a84e7",
    measurementId: "G-K1RHKXYWM8"
  };

  const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);