import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyB5NwbMhVBmPOd3kPfecA3A8LCduxCn-vM",
  authDomain: "bin-it-329914.firebaseapp.com",
  projectId: "bin-it-329914",
  storageBucket: "bin-it-329914.appspot.com",
  messagingSenderId: "596782343725",
  appId: "1:596782343725:web:5e7340b0c7cbac6773faa4",
  measurementId: "G-NP744LT74R",
});

export default app;
export const db = getFirestore(app);
export const auth = getAuth(app);
