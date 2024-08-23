// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkplNkUyeAgxoZkKdD4JVmvl-En1OWLhA",
  authDomain: "connectup-ad850.firebaseapp.com",
  projectId: "connectup-ad850",
  storageBucket: "connectup-ad850.appspot.com",
  messagingSenderId: "296010712895",
  appId: "1:296010712895:web:86c4c78685f65e0e11358a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db= getFirestore(app);
