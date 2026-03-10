import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlrmnZiujz9IEZR6r4Y8n7y6QGibXn_p4",
  authDomain: "homefix-33c6e.firebaseapp.com",
  projectId: "homefix-33c6e",
  storageBucket: "homefix-33c6e.firebasestorage.app",
  messagingSenderId: "1044277695875",
  appId: "1:1044277695875:web:49fdf556190b268ce112b6",
  measurementId: "G-NYZGQ4CJQS"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;