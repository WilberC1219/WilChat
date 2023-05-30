import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiNeHKH7wlqojpFaO1xu3XhPNkIR-c6e4",
  authDomain: "wilchat-e3e1a.firebaseapp.com",
  projectId: "wilchat-e3e1a",
  storageBucket: "wilchat-e3e1a.appspot.com",
  messagingSenderId: "622415891463",
  appId: "1:622415891463:web:906a178847d6c2fa756ea2",
  measurementId: "G-0PJVMF0R3M",
};

// Initialize Firebase, auth, db, and provider
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
export default db;
