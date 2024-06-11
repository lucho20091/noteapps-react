import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAML7Mkbxx_jjQ-PcrFjY8iksCoO7CCmbg",
  authDomain: "react-notes-68ed1.firebaseapp.com",
  projectId: "react-notes-68ed1",
  storageBucket: "react-notes-68ed1.appspot.com",
  messagingSenderId: "692491410853",
  appId: "1:692491410853:web:8fd1aa64e4bdcfa48bdc4c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")