import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "API_KEY_HERE",
  authDomain: "AUTH_DOMAIN_HERE",
  projectId: "PROJECT_ID_HERE",
  storageBucket: "STORAGE_BUCKET_HERE",
  messagingSenderId: "MSG_SENDER_ID_HERE",
  appId: "APP_ID_HERE",
};

// Initialize Firebase, auth, db, and provider
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
export default db;
