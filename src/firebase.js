import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4nwuPsqdVCEX4p5104ukuxgyVTaSgb50",
  authDomain: "listed-assignment-962a5.firebaseapp.com",
  projectId: "listed-assignment-962a5",
  storageBucket: "listed-assignment-962a5.appspot.com",
  messagingSenderId: "873767393821",
  appId: "1:873767393821:web:8915e1a77a838b1f69c4f4",
  measurementId: "G-5WXVSFBKL9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {
  auth,
  createUserWithEmailAndPassword,
  provider,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
};
